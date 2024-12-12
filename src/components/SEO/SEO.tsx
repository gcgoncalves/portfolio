import React from "react"

type Props = { 
  title?: string
  description?: string
  image?: string
  children?: string
}

export const SEO = (props: Props) => {
  const { title, description, image, children } = props

  const seo = {
    title: title || 'Gabriel Costa - Web Developer',
    description: description || 'Hi, come take a look at my projects and professional experience!',
    image: image || 'images/og-image.jpg',
    icon: 'images/icon.png',
    url: 'https://gabrielc.dev',
    twitterUsername: 'thatgabrielc',
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="twitter:card" content={seo.image} />
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