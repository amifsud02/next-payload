import { GlobalConfig } from 'payload/types'

export const GeneralSettings: GlobalConfig = {
  slug: 'general-settings',
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
