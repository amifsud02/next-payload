import React, { Fragment } from 'react'

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Page } from '../../payload-types'

import { getPayloadClient } from '../../getPayload'
import { Gutter } from '../_components/Gutter'
import { RichText } from '../_components/RichText'
import classes from './page.module.scss'

const SinglePage = async ({ params: { slug } }: { params: { slug: string | string[] } }) => {
  const payload = await getPayloadClient()

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: (slug && slug[0]) || 'home',
      },
    },
  })

  const page = docs?.[0] as Page

  if (!page) return notFound()

  return (
    <Fragment>
      <main className={classes.main}>
        <Gutter>
          <div className={classes.body}>
            <RichText content={page.richText} />
          </div>
          <div>
            <picture>
              <source
                media="(prefers-color-scheme: dark)"
                srcSet={page.thumbnail?.url}
              />
              <img
                className={classes.logo}
                alt="Payload Logo"
                src={page.thumbnail?.url}
              />
            </picture>
          </div>
        </Gutter>
      </main>
    </Fragment>
  )
}

export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string | string[] }
}): Promise<Metadata> {
  return {
    title: ' | Test Site',
    description: 'Description of a test site',
  }
}

export default SinglePage
