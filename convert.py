import os
from PIL import Image
import pillow_heif

pillow_heif.register_heif_opener()

folder = r"c:\TN\Marca personal\tomas-portfolio\v2\public\images\setup"

for filename in ["IMG_8311.HEIC", "IMG_8350.HEIC"]:
    filepath = os.path.join(folder, filename)
    if os.path.exists(filepath):
        img = Image.open(filepath)
        # Convert to maximum quality JPEG
        outpath = os.path.join(folder, filename.replace(".HEIC", ".jpg"))
        img.save(outpath, "JPEG", quality=100)
        print(f"Converted {filename} to {os.path.basename(outpath)}")
    else:
        print(f"{filename} not found")
