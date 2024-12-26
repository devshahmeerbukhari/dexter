import { type SchemaTypeDefinition } from 'sanity'
import projectSchema from '../schemas/projectSchema'
import servicesSchema from '../schemas/servicesSchema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectSchema, servicesSchema],
}
