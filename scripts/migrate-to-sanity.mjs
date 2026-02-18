import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Configurar cliente de Sanity con token
const client = createClient({
    projectId: 'akb2ar7n',
    dataset: 'production',
    apiVersion: '2026-02-18',
    token: 'sk9LeY54TKQ47cn3rUh4IiSQi5MVTXRALziRSgErsYSk1OA0a9NJclBugEwfPoxPE17YM8U4diJz61mjT',
    useCdn: false,
})

// Helper: subir imagen local a Sanity
async function uploadImage(imagePath) {
    // Resolver path relativo a public/
    const fullPath = path.join(__dirname, '..', 'public', imagePath)

    if (!fs.existsSync(fullPath)) {
        console.warn(`⚠️  Imagen no encontrada: ${fullPath}`)
        return null
    }

    try {
        const imageBuffer = fs.readFileSync(fullPath)
        const filename = path.basename(imagePath)
        const asset = await client.assets.upload('image', imageBuffer, {
            filename,
        })
        console.log(`   📷 Imagen subida: ${filename}`)
        return {
            _type: 'image',
            asset: {
                _type: 'reference',
                _ref: asset._id,
            },
        }
    } catch (error) {
        console.error(`   ❌ Error subiendo imagen ${imagePath}:`, error.message)
        return null
    }
}

async function clearSanityContent() {
    console.log('🗑️  Limpiando contenido existente en Sanity...\n')

    try {
        await client.delete({ query: '*[_type == "blogPost"]' })
        console.log('✅ Blog posts eliminados')
    } catch (e) {
        console.log('ℹ️  No había blog posts para eliminar')
    }

    try {
        await client.delete({ query: '*[_type == "project"]' })
        console.log('✅ Proyectos eliminados\n')
    } catch (e) {
        console.log('ℹ️  No había proyectos para eliminar\n')
    }
}

async function migrateBlogPosts() {
    console.log('📝 Migrando Blog Posts...\n')

    const postsData = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../data/backup/blog-posts.json'), 'utf-8')
    )

    let success = 0
    for (const post of postsData) {
        // Subir imagen principal
        const mainImage = await uploadImage(post.image)

        const doc = {
            _type: 'blogPost',
            title: post.title,
            titleEn: post.titleEn,
            slug: { _type: 'slug', current: post.slug },
            excerpt: post.excerpt,
            excerptEn: post.excerptEn,
            mainImage: mainImage,
            content: post.content,
            contentEn: post.contentEn,
            category: post.category,
            categoryEn: post.categoryEn,
            date: post.date,
            readTime: post.readTime,
            author: post.author,
        }

        try {
            await client.create(doc)
            console.log(`✅ Creado: ${post.title}`)
            success++
        } catch (error) {
            console.error(`❌ Error creando ${post.title}:`, error.message)
        }
    }

    console.log(`\n✅ ${success}/${postsData.length} blog posts migrados\n`)
}

async function migrateProjects() {
    console.log('🎨 Migrando Proyectos...\n')

    const projectsData = JSON.parse(
        fs.readFileSync(path.join(__dirname, '../data/backup/projects.json'), 'utf-8')
    )

    let success = 0
    for (const project of projectsData) {
        // Subir imagen principal
        const mainImage = await uploadImage(project.image)

        // Subir galería
        const galleryImages = []
        if (project.gallery && project.gallery.length > 0) {
            for (const galleryPath of project.gallery) {
                const galleryImage = await uploadImage(galleryPath)
                if (galleryImage) {
                    galleryImages.push({
                        ...galleryImage,
                        _key: Math.random().toString(36).substring(7),
                    })
                }
            }
        }

        const doc = {
            _type: 'project',
            title: project.title,
            titleEn: project.titleEn,
            slug: { _type: 'slug', current: project.slug },
            description: project.description,
            descriptionEn: project.descriptionEn,
            content: project.content,
            contentEn: project.contentEn,
            mainImage: mainImage,
            gallery: galleryImages.length > 0 ? galleryImages : undefined,
            tags: project.tags || [],
            category: project.category,
            demoUrl: project.demoUrl,
            githubUrl: project.githubUrl,
            featured: project.featured || false,
            order: project.order,
            year: project.year,
            technologies: project.technologies,
        }

        try {
            await client.create(doc)
            console.log(`✅ Creado: ${project.title}`)
            success++
        } catch (error) {
            console.error(`❌ Error creando ${project.title}:`, error.message)
        }
    }

    console.log(`\n✅ ${success}/${projectsData.length} proyectos migrados\n`)
}

async function main() {
    try {
        console.log('🚀 Iniciando migración a Sanity\n')
        console.log('===============================\n')

        await clearSanityContent()
        await migrateBlogPosts()
        await migrateProjects()

        console.log('===============================')
        console.log('✨ Migración completada!\n')
    } catch (error) {
        console.error('❌ Error en migración:', error)
        process.exit(1)
    }
}

main()
