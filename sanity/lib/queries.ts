// ============================================
// BLOG POST QUERIES
// ============================================

export const allBlogPostsQuery = `
  *[_type == "blogPost"] | order(date desc) {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    "image": mainImage.asset->url,
    category,
    categoryEn,
    date,
    readTime,
    author
  }
`

export const blogPostBySlugQuery = `
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    slug,
    excerpt,
    excerptEn,
    "image": mainImage.asset->url,
    content,
    contentEn,
    category,
    categoryEn,
    date,
    readTime,
    author
  }
`

// ============================================
// PROJECT QUERIES
// ============================================

export const allProjectsQuery = `
  *[_type == "project"] | order(order asc) {
    _id,
    title,
    titleEn,
    slug,
    description,
    descriptionEn,
    content,
    contentEn,
    "image": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    tags,
    category,
    demoUrl,
    githubUrl,
    featured,
    order,
    year,
    technologies
  }
`

export const projectBySlugQuery = `
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    titleEn,
    slug,
    description,
    descriptionEn,
    content,
    contentEn,
    "image": mainImage.asset->url,
    "gallery": gallery[].asset->url,
    tags,
    category,
    demoUrl,
    githubUrl,
    featured,
    order,
    year,
    technologies
  }
`

export const featuredProjectsQuery = `
  *[_type == "project" && featured == true] | order(order asc) {
    _id,
    title,
    titleEn,
    slug,
    description,
    descriptionEn,
    "image": mainImage.asset->url,
    technologies,
    category
  }
`

export const allBlogSlugsQuery = `
  *[_type == "blogPost"] { "slug": slug.current }
`

export const allProjectSlugsQuery = `
  *[_type == "project"] { "slug": slug.current }
`
