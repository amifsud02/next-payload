import { cloudStorage } from "@payloadcms/plugin-cloud-storage";
import { s3Adapter } from "@payloadcms/plugin-cloud-storage/s3";
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { slateEditor } from '@payloadcms/richtext-slate'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config({
  path: path.resolve(__dirname, '../.env'),
})

import { buildConfig } from 'payload/config'

import BeforeLogin from './components/BeforeLogin'
import { Pages } from './collections/Pages'
import { Media } from "./collections/Media";
import { Users } from "./collections/Users";
import { Logo } from "./graphics/Logo";
import { Icon } from "./graphics/Icon";
import { MainMenu } from "./globals/MainMenu";
import { GeneralSettings } from "./globals/GeneralSettings";
import { Footer } from "./globals/Footer";

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL || '',
  collections: [
    Users,
    Pages, 
    Media
  ],
  globals: [
    Footer,
    GeneralSettings,
    MainMenu
  ],
  admin: {
    bundler: webpackBundler(),
    meta: {
      titleSuffix: ' - Admin',
      favicon: '/assets/favicon.svg',
      ogImage: '/assets/favicon.svg',
    },
    components: {
      beforeLogin: [
        BeforeLogin,
      ],
      graphics: {
        Logo,
        Icon
      }
    },
  },
  editor: slateEditor({}),
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  plugins: [
    cloudStorage({
      collections: {
        media: {
          adapter: s3Adapter({
            config: {
              endpoint: process.env.R2_ENDPOINT,
              credentials: {
                accessKeyId: process.env.R2_ACCESS_KEY_ID,
                secretAccessKey: process.env.R2_SECRET_ACCESS_KEY,
              },
              region: "auto"
            },
            bucket: process.env.R2_BUCKET,
          })
        }
      }
    })
  ]
})
