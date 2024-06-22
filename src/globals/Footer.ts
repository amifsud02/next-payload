import { GlobalConfig } from 'payload/types'

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'columns',
      type: 'array',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          type: 'text',
          required: true,
          name: 'label',
        },
      ],
    },
  ],
}
