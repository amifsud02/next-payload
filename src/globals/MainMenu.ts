import { GlobalConfig } from 'payload/types'

export const MainMenu: GlobalConfig = {
  slug: 'main-menu',
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
