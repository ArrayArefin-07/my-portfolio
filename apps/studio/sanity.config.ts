import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'default',
  title: 'Portfolio Studio',
  projectId: process.env.SANITY_PROJECT_ID || 'yourProjectId',
  dataset: process.env.SANITY_DATASET || 'production',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes
  }
});
