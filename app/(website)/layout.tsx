import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { getSettings } from '@/lib/sanity/client'
import { urlForImage } from '@/lib/sanity/image'

async function sharedMetaData(params) {
  const settings = await getSettings()

  return {
    // enable this for resolving opengraph image
    // metadataBase: new URL(settings.url),
    title: {
      default: settings?.title || 'Odds-API Blog | Live Sports & Betting Data Insights',
      template: '%s | Odds-API'
    },
    description: settings?.description || 'The most effective sports betting strategy',
    keywords: ['Odds API', 'Sports Odds API', 'Sports Betting API'],
    authors: [{ name: 'Markus' }],
    canonical: settings?.url,
    openGraph: {
      images: [
        {
          url: urlForImage(settings?.openGraphImage)?.src,
          width: 800,
          height: 600
        }
      ]
    },
    twitter: {
      title: settings?.title || 'Odds-API Blog',
      card: 'summary_large_image'
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export async function generateMetadata({ params }) {
  return await sharedMetaData(params)
}

export default async function Layout({ children, params }) {
  const settings = await getSettings()
  return (
    <>
      <Navbar {...settings} />

      <div>{children}</div>

      <Footer {...settings} />
    </>
  )
}
// enable revalidate for all pages in this layout
// export const revalidate = 60;
