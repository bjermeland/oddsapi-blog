import { urlForImage } from '@/lib/sanity/image'
import { cx } from '@/utils/all'
import { PortableText as PortableTextComponent } from '@portabletext/react'
import getVideoId from 'get-video-id'
import Image from 'next/image'
import Link from 'next/link'
import Iframe from 'react-iframe'

import { Refractor, registerLanguage } from 'react-refractor'
import bash from 'refractor/lang/bash'
import css from 'refractor/lang/css'
import js from 'refractor/lang/javascript'
import json from 'refractor/lang/json'
import jsx from 'refractor/lang/jsx'
import html from 'refractor/lang/markup'

registerLanguage(js)
registerLanguage(jsx)
registerLanguage(html)
registerLanguage(css)
registerLanguage(bash)
registerLanguage(json)

// Barebones lazy-loaded image component
const ImageComponent = ({ value }) => {
  // const {width, height} = getImageDimensions(value)
  return (
    <Image
      src={urlForImage(value)}
      alt={value.alt || 'Image'}
      loading="lazy"
      className="object-cover"
      sizes="(max-width: 800px) 100vw, 800px"
    />
  )
}

const PortableTextTable = ({ value }) => {
  const [head, ...rows] = value.table.rows

  return (
    <table>
      {head.cells.filter(Boolean).length > 0 && (
        <thead>
          <tr>
            {head.cells.map((cell) => (
              <th key={cell}>{cell}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.cells.map((cell, index) => {
              return <td key={cell}>{cell}</td>
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

const Code = ({ value }) => {
  return (
    <Refractor
      // In this example, `props` is the value of a `code` field
      language={value.language || 'bash'}
      value={value.code}
      markers={value.highlightedLines}
    />
  )
}

const IframePreview = ({ value }) => {
  const { url, height } = value
  if (!url) {
    return <p>Missing Embed URL</p>
  }
  const { id, service } = getVideoId(url)

  const isYoutubeVideo = id && service === 'youtube'

  const finalURL = isYoutubeVideo ? `https://www.youtube-nocookie.com/embed/${id}` : url

  return (
    <Iframe
      url={finalURL}
      width="100%"
      height={height || '350'}
      className={cx(!height && 'aspect-video', 'rounded-md')}
      display="block"
      position="relative"
      frameBorder="0"
      allowfullscreen
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; fullscreen; gyroscope; picture-in-picture"
    />
  )
}

const components = {
  types: {
    image: ImageComponent,
    code: Code,
    embed: IframePreview,
    tables: PortableTextTable
  },
  marks: {
    center: (props) => <div className="text-center">{props.children}</div>,
    highlight: (props) => <span className="font-bold text-blue-500">{props.children}</span>,
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noopener' : undefined
      const target = !value.href.startsWith('/') ? '_blank' : undefined
      return (
        <a href={value.href} rel={rel} target={target}>
          {children}
        </a>
      )
    },
    internalLink: ({ children, value }) => {
      return <Link href={`/blog/${value?.slug?.current}`}>{children}</Link>
    }
  }
}
// Set up Portable Text serialization
export const PortableText = (props) => <PortableTextComponent components={components} {...props} />
