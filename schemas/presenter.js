import { HiOutlineUsers } from "react-icons/hi";

export default {
    name: 'presenter',
    title: 'Presenters',
    type: 'document',
    icon: HiOutlineUsers,
    fields: [
        {
            name: 'name',
            title: 'Name',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'name',
              maxLength: 96
            },
            validation: Rule => Rule.required()
        },
        {
            name: 'website',
            title: 'Website or Link',
            type: 'url'
        },
        {
            name: 'role',
            title: 'Role',
            type: 'string'
        },
        {
            name: 'description',
            title: 'Description',
            type: 'blockContent'
        },
        {
            name: 'image',
            title: 'Picture',
            type: 'image',
            options: {
                hotspot: true // <-- Defaults to false
            },
        }
    ]
}