import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

// Load .env.local manually
const envFile = readFileSync('.env.local', 'utf-8')
envFile.split('\n').forEach(line => {
    const [key, ...val] = line.split('=')
    if (key && val.length) process.env[key.trim()] = val.join('=').trim().replace(/^["']|["']$/g, '')
})

const client = createClient({
    projectId: 'akb2ar7n',
    dataset: 'production',
    apiVersion: '2024-01-01',
    token: process.env.SANITY_API_TOKEN,
    useCdn: false,
})

// Find all documents containing zevetix.online
const allProjects = await client.fetch('*[_type == "project"]')
const allPosts = await client.fetch('*[_type == "blogPost"]')

const allDocs = [...allProjects, ...allPosts]
const matches = allDocs.filter(d => JSON.stringify(d).includes('zevetix.online'))

console.log(`Found ${matches.length} documents with zevetix.online:`)
for (const doc of matches) {
    console.log(`  - [${doc._type}] ${doc.title} (${doc._id})`)

    // Build patches for string fields
    const patch = {}
    for (const [key, val] of Object.entries(doc)) {
        if (typeof val === 'string' && val.includes('zevetix.online')) {
            patch[key] = val.replace(/zevetix\.online/g, 'zevetix.site')
            console.log(`    ${key}: ${val} → ${patch[key]}`)
        }
    }

    if (Object.keys(patch).length > 0) {
        await client.patch(doc._id).set(patch).commit()
        console.log(`    ✅ Updated!`)
    }
}

console.log('\n✨ Done!')
