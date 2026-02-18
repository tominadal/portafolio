import { type SchemaTypeDefinition } from 'sanity'
import blogPost from './blogPost'
import project from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blogPost, project],
}
