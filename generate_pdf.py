import os
import subprocess
import shutil
import sys

def generate_pdf():
    current_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Ensure public folder exists
    public_dir = os.path.join(current_dir, "public")
    os.makedirs(public_dir, exist_ok=True)

    configs = [
        {
            "src": "cv.md",
            "dst": ["cv.pdf"],
            "title": "Tomás Ignacio Nadal - CV",
            "lang": "es"
        },
        {
            "src": "cv-en.md",
            "dst": ["cv-en.pdf"],
            "title": "Tomás Ignacio Nadal - Resume",
            "lang": "en"
        },
        {
            "src": "cv-data.md",
            "dst": ["cv-data.pdf"],
            "title": "Tomás Ignacio Nadal - CV Data Science",
            "lang": "es"
        },
        {
            "src": "cv-data-en.md",
            "dst": ["cv-data-en.pdf"],
            "title": "Tomás Ignacio Nadal - Data Science Resume",
            "lang": "en"
        }
    ]

    try:
        import markdown
    except ImportError:
        print("Error: El paquete 'markdown' de Python no está instalado.", file=sys.stderr)
        print("Por favor instala 'markdown' ejecutando: pip install markdown", file=sys.stderr)
        sys.exit(1)

    # Microsoft Edge path
    edge_path = r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe"
    if not os.path.exists(edge_path):
        edge_path = "msedge"

    for config in configs:
        src_path = os.path.join(current_dir, config["src"])
        if not os.path.exists(src_path):
            print(f"Error: No se encontró el archivo de origen {src_path}", file=sys.stderr)
            continue
        
        print(f"Procesando {config['src']} ({config['lang']})...")
        with open(src_path, "r", encoding="utf-8") as f:
            md_text = f.read()

        # Parse markdown to HTML
        html_body = markdown.markdown(md_text, extensions=["extra", "nl2br"])

        # Harvard Resume template with styling
        html_template = f"""<!DOCTYPE html>
<html lang="{config['lang']}">
<head>
<meta charset="UTF-8">
<title>{config['title']}</title>
<style>
    @page {{
        size: A4;
        margin: 0.65in 0.7in 0.65in 0.7in;
    }}
    body {{
        font-family: "Garamond", "Times New Roman", Times, serif;
        font-size: 10.5pt;
        line-height: 1.35;
        color: #000000;
        background-color: #ffffff;
        margin: 0;
        padding: 0;
        -webkit-print-color-adjust: exact;
    }}
    /* Header styling */
    h1 {{
        font-size: 20pt;
        font-weight: bold;
        text-align: center;
        margin-top: 0;
        margin-bottom: 4px;
        letter-spacing: 0.5px;
        text-transform: uppercase;
    }}
    .contact-info {{
        text-align: center;
        font-size: 9pt;
        margin-top: 0;
        margin-bottom: 12px;
        color: #111111;
    }}
    .contact-info a {{
        color: #000000;
        text-decoration: none;
    }}
    .contact-info a:hover {{
        text-decoration: underline;
    }}
    /* Section Headers */
    h2 {{
        font-size: 11.5pt;
        font-weight: bold;
        text-transform: uppercase;
        border-bottom: 0.75pt solid #000000;
        margin-top: 14px;
        margin-bottom: 8px;
        padding-bottom: 1.5px;
        letter-spacing: 0.75px;
    }}
    /* Entry Titles */
    h3 {{
        font-size: 10.5pt;
        font-weight: normal;
        margin-top: 8px;
        margin-bottom: 1px;
        display: block;
    }}
    h3 strong {{
        font-weight: bold;
    }}
    h3 em {{
        font-style: italic;
    }}
    .date {{
        float: right;
        font-weight: normal;
        font-style: normal;
        font-size: 10pt;
        color: #000000;
    }}
    /* Entry Location */
    h3 + p {{
        margin-top: 0px;
        margin-bottom: 4px;
        font-size: 9.5pt;
        color: #222222;
    }}
    h3 + p em {{
        font-style: italic;
    }}
    /* General paragraphs */
    p {{
        margin-top: 0;
        margin-bottom: 6px;
        text-align: justify;
    }}
    /* List styles */
    ul {{
        margin-top: 2px;
        margin-bottom: 6px;
        padding-left: 18px;
    }}
    li {{
        margin-bottom: 2.5px;
        text-align: justify;
    }}
    /* Tighter lists under specific sections */
    h2 + ul {{
        list-style-type: none;
        padding-left: 0;
    }}
    h2 + ul li {{
        margin-bottom: 4px;
        text-align: left;
    }}
    /* Highlight bold elements in lists */
    li strong {{
        font-weight: bold;
    }}
</style>
</head>
<body>
    {html_body}
</body>
</html>
"""

        temp_html_path = os.path.join(current_dir, f"temp_{config['src'][:-3]}.html")
        with open(temp_html_path, "w", encoding="utf-8") as f:
            f.write(html_template)

        first_dst = os.path.join(public_dir, config["dst"][0])
        print(f"Compilando {config['src']} a PDF...")
        cmd = [
            edge_path,
            "--headless",
            "--disable-gpu",
            f"--print-to-pdf={first_dst}",
            "--no-pdf-header-footer",
            temp_html_path
        ]

        try:
            subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            print(f"¡Éxito! PDF generado en: {first_dst}")
            
            # Copy to other destinations in the list
            for additional_dst in config["dst"][1:]:
                full_add_dst = os.path.join(public_dir, additional_dst)
                shutil.copy2(first_dst, full_add_dst)
                print(f"Copia creada en: {full_add_dst}")
        except subprocess.CalledProcessError as e:
            print(f"Error al compilar el PDF para {config['src']}: {e.stderr.decode(errors='replace')}", file=sys.stderr)
        except FileNotFoundError:
            print("Error: No se pudo ejecutar Microsoft Edge. Verifica que esté instalado en el sistema.", file=sys.stderr)
        finally:
            if os.path.exists(temp_html_path):
                os.remove(temp_html_path)

if __name__ == "__main__":
    generate_pdf()
