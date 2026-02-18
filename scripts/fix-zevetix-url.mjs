import { createClient } from '@sanity/client'
import { readFileSync } from 'fs'

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

const allDocs = await client.fetch('*[_type in ["project", "blogPost"]]')
const matches = allDocs.filter(d => JSON.stringify(d).includes('zevetix.netlify.app'))

console.log(`Found ${matches.length} documents with zevetix.netlify.app:`)
for (const doc of matches) {
    console.log(`  - [${doc._type}] ${doc.title} (${doc._id})`)
    const patch = {}
    for (const [key, val] of Object.entries(doc)) {
        if (typeof val === 'string' && val.includes('zevetix.netlify.app')) {
            patch[key] = val.replace(/zevetix\.netlify\.app/g, 'zevetix.site')
            console.log(`    ${key}: ${val} → ${patch[key]}`)
        }
    }
    if (Object.keys(patch).length > 0) {
        await client.patch(doc._id).set(patch).commit()
        console.log(`    ✅ Updated!`)
    }
}
console.log('\n✨ Done!')
