'use client'

import Container from '@/components/container'
import { urlForImage } from '@/lib/sanity/image'
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar(props) {
  return (
    <Container>
      <nav>
        <Disclosure>
          {({ open }) => (
            <>
              <div className="relative flex flex-wrap items-center justify-center md:flex-nowrap md:gap-10">
                <div className="absolute left-0 hidden sm:block">
                  <a
                    href="https://www.oddsnotifier.io/dashboard"
                    className="px-4 py-2 text-xs font-bold text-white uppercase bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                  >
                    Try Out OddsNotifier
                  </a>
                </div>
                <div>
                  <Link href="/blog" className="w-28 dark:hidden">
                    {props.logo ? (
                      <Image
                        {...urlForImage(props.logo)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 640px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">OddsNotifier</span>
                    )}
                  </Link>
                  <Link href="/blog" className="hidden w-[200px] dark:block">
                    {props.logoalt ? (
                      <Image
                        {...urlForImage(props.logoalt)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 700px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">OddsNotifier</span>
                    )}
                  </Link>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </nav>
    </Container>
  )
}
