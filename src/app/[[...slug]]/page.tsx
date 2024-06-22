import React, { Fragment } from 'react'

import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { Page } from '../../payload-types'

import { getPayloadClient } from '../../getPayload'
import Button from 'react-bootstrap/Button';

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

  const page = docs?.[0] as Page;
  console.log(page);
  if (!page) return notFound();

  const thumbnailUrl = typeof page.thumbnail === 'string' ? page.thumbnail : page.thumbnail?.url;

  return (
    <Fragment>
      <main className="wrapper">
        <section>
          <div className="container" style={{ background: "red" }}>
            <div className="row">
              <div className="col-6" style={{ background: "blue" }}>
                <h1> Lorem Ipsum dolor sit amet</h1>
                <p>Welcome to NEXUS! We’re all about turning your big ideas into reality. Think of us as the bridge between your vision and success. With creative strategies and fresh solutions, we help brands come to life and grow in the digital world. Let’s connect and make amazing things happen together.</p>
                <Button href='/contact-us'>Contact Us</Button>
              </div>
              <div className="col-6" style={{ background: "blue" }}>
                <img src="" alt="" />
              </div>
            </div>
          </div>
        </section>
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
