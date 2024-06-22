import type { CollectionConfig } from "payload/types";

import { isAdmin } from "../access/isAdmin";
import { publishedOnly } from "../access/publishedOnly";
import { formatPreviewURL, revalidatePage } from "../utilities";
import formatSlug from "../utilities/formatSlug";

// Import Blocks 

// Import Fields

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        preview: doc => formatPreviewURL('posts', doc)
    },
    versions: {
        drafts: true,
    },
    access: {
        create: isAdmin,
        read: publishedOnly,
        readVersions: isAdmin,
        update: isAdmin,
        delete: isAdmin,
    },
    hooks: {
        afterChange: [
            ({ req: { payload }, doc }) => {
                revalidatePage({
                    payload,
                    collection: 'posts',
                    doc
                })
            }
        ]
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
        },
        {
            name: 'richText',
            type: 'richText',
            label: 'Content',
        },
        {
            name: 'relatedPosts',
            type: 'relationship',
            relationTo: 'posts',
            hasMany: true,
            filterOptions: ({ id }) => {
                return {
                    id: {
                        not_in: [id],
                    },
                }
            },
        },
        {
            name: 'slug',
            label: 'Slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [formatSlug('title')],
            },
        },
        {
            name: 'authors',
            type: 'relationship',
            relationTo: 'users',
            required: true,
            hasMany: true,
            admin: {
                position: 'sidebar',
            },
        },
        {
            name: 'publishedOn',
            type: 'date',
            required: true,
            admin: {
                date: {
                    pickerAppearance: 'dayAndTime',
                },
                position: 'sidebar',
            },
        },
    ]
}