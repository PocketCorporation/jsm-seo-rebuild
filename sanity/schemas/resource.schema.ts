
import {defineField,defineType} from 'sanity'

const schema = defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any)=>Rule.required()
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source:'title'}
    }),
    defineField({
      name: 'downloadLink',
      title: 'Download Link',
      type: 'url',
      validation: (Rule : any)=>Rule.required()
    }),
    defineField({
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      validation: (Rule: any)=>Rule.required(),
      options: {
        hotspot: true,
      }
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule: any)=>Rule.required(),
      options: {
        list: ['frontend','backend','next13','fullstack','other']
      }
    })
  ]
})

export default schema