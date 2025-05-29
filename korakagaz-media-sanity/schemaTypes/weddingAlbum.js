// schemas/weddingAlbum.js
export default {
  name: 'weddingAlbum',
  title: 'Wedding Albums',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Wedding Title',
      type: 'string',
      validation: Rule => Rule.required().min(3)
    },
    {
      name: 'description',
      title: 'Album Description',
      type: 'text',
    },
    {
      name: 'coupleName',
      title: 'Couple Name',
      type: 'string',
    },
    {
      name: 'coverPhoto',
      title: 'Cover Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'photos',
      title: 'Wedding Photos',
      type: 'array',
      of: [{ type: 'image' }],
      options: {
        layout: 'grid'
      }
    }
  ]
};
