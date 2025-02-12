import {defineField,defineType} from 'sanity'

const schema = defineType({
    name: 'resourcePlaylist',
    title: 'Resource Playlist',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule:any)=>Rule.required()
        }),
        defineField({
            name: 'resources',
            title: 'Resources',
            type: 'array',
            of: [
                {type:'reference', to:[{type:'resource'}]}
            ]
        })
    ]
})

export default schema