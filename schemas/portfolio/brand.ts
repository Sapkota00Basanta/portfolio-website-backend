// Defining schema for brands section of portfolio

export default {
    name: 'brands',
    title: 'Brands',
    type: 'document',
    fields: [
        {
            name: 'imageURL',
            title: 'ImageURL',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'name',
            title: 'Name',
            type: 'string'
        }
    ]
}