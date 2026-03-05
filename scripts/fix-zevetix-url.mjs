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

// Find Eduardo Rivera project
const docs = await client.fetch('*[_type == "project" && (title match "*Rivera*" || title match "*Eduardo*" || title match "*Seguros*")]{_id, title, demoUrl}')
console.log('Found:', JSON.stringify(docs, null, 2))

// Update demoUrl
for (const doc of docs) {
    await client.patch(doc._id).set({ demoUrl: 'https://eduardoriveraseguros.netlify.app/' }).commit()
    console.log(`✅ Updated ${doc.title} -> https://eduardoriveraseguros.netlify.app/`)
}

console.log('Done!')
