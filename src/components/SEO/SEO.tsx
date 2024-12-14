import React from "react"

type Props = { 
  title?: string
  description?: string
  image?: string
  imageWpp?: string
  children?: string
}

export const SEO = (props: Props) => {
  const { title, description, image, imageWpp, children } = props

  const seo = {
    title: title || 'Gabriel Costa - Web Developer',
    description: description || 'Hi, come take a look at my projects and professional experience!',
    image: image || 'https://gabrielc.dev/og-image.jpg',
    imageWpp: imageWpp || 'https://gabrielc.dev/og-image-wpp.jpg',
    icon: 'https://gabrielc.dev/icon.ico',
    url: 'https://gabrielc.dev',
    twitterUsername: 'thatgabrielc',
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta property="og:image" content={seo.image} itemProp="image" />
      <meta property="og:image:secure_url" content={seo.image} /> 
      <meta property="og:image:width" content="1280"/>
      <meta property="og:image:height" content="720"/>
      <meta property="og:image" content={seo.imageWpp} itemProp="image" />
      <meta property="og:image:secure_url" content={seo.imageWpp} /> 
      <meta property="og:image:width" content="400"/>
      <meta property="og:image:height" content="400"/>
      <meta name="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta property="og:locale" content="en_GB" />
      <meta property="og:updated_time" content="202412130740" />
      <meta name="twitter:card" content={seo.image} itemProp="image" />
      <meta name="twitter:card:secure_url" content={seo.image} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      <meta name="twitter:creator" content={seo.twitterUsername} />
      <link rel="icon" href={seo.icon} />
      {children}
    </>
  )
}