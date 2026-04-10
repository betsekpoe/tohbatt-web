export default {
  name: 'siteAssets',
  title: 'Site Assets',
  type: 'document',
  fields: [
    {
      name: 'prospectus',
      title: 'Prospectus File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule) => Rule.required().error('Please upload a prospectus PDF file.'),
    },
    {
      name: 'galleryImages',
      title: 'Image Gallery',
      description: 'Upload gallery images one at a time or in bulk. Images are stored as files and displayed as a gallery on the website.',
      type: 'array',
      of: [
        {
          type: 'file',
          options: {
            accept: 'image/*',
          },
        },
      ],
      options: {
        layout: 'grid',
      },
      validation: (Rule) => Rule.min(1).error('Please upload at least one image for the gallery.'),
    },
  ],
  preview: {
    select: {
      media: 'galleryImages.0',
    },
    prepare(selection) {
      return {
        title: 'Site Assets',
        subtitle: 'Manage prospectus and gallery uploads',
        media: selection.media,
      }
    },
  },
}