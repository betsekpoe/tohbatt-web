// sanity/schemaTypes/post.js
export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).error('Title is required and should be at least 5 characters.'),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (Rule) => Rule.required().error('Slug is required. Click "Generate" from title.'),
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required().error('Main image is required.'),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Construction', value: 'construction' },
          { title: 'Training', value: 'training' },
          { title: 'Agribusiness', value: 'agribusiness' },
          { title: 'Tools', value: 'tools' },
          { title: 'Projects', value: 'projects' },
          { title: 'Events', value: 'events' },

        ],
      },
      validation: (Rule) => Rule.required().error('Please select a category.'),
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      validation: (Rule) => Rule.required().error('Published date is required.'),
    },
    {
      name: 'body',
      title: 'Body',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required().min(1).error('Post body is required.'),
    },
  ],
}