import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './schemaTypes'
import {deskStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'tohbatt',

  projectId: 'tam2yhf9', // Double check this matches your ID
  dataset: 'production',

  plugins: [structureTool({structure: deskStructure})],

  schema: {
    types: schemaTypes,
  },
})