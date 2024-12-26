// schemas/servicesSchema.js

import {defineType, defineField} from 'sanity';

export default defineType({
  name: 'servicesSchema',
  title: 'Services Schema',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the service',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A short description of the service',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'An image related to the service',
      options: {
        hotspot: true, // Allows user to select a specific area of the image
      },
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'Service Details',
      options: {
        source: 'name', // Automatically generates the slug from the "name" field
        maxLength: 96,
      },
    }),
    defineField({
      name: 'detail',
      title: 'Detail',
      type: 'text',
      description: 'A detailed description of the item',
    }),
  ],
});
