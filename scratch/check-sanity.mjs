import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import fs from 'fs'
dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function test() {
  const projects = await client.fetch('*[_type == "project"] { title, slug, category, tags, demoUrl }')
  const posts = await client.fetch('*[_type == "blogPost"] { title, slug }')
  fs.writeFileSync('scratch/sanity-clean.json', JSON.stringify({ projects, posts }, null, 2))
  console.log('Done writing to scratch/sanity-clean.json')
}

test()
