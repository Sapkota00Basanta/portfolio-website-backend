// Defining schema for about section of portfolio

export default {
    name: 'abouts',
    title: 'Abouts',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string'
        },
        {
            name: 'imageURL',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}