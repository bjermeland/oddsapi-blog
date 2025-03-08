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
            <div>
              <div className="relative flex flex-wrap items-center justify-center md:flex-nowrap md:gap-10">
                <div className="absolute left-0 hidden sm:block">
                  <a
                    href="https://odds-api.io"
                    className="px-4 py-2 text-xs font-bold text-white uppercase hover:rounded-xl transition-all ease-in-out mt-8 text-center bgGradient rounded-md text-foreground"
                  >
                    Try Out Odds-API.io
                  </a>
                </div>
                <div>
                  <Link href="/blog" className="w-28 dark:hidden">
                    {props.logo ? (
                      <Image
                        {...urlForImage(props.logo)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 340px) 100vw, 200px"
                      />
                    ) : (
                      <span className="block text-center">Odds-API</span>
                    )}
                  </Link>
                  <Link href="/blog" className="hidden w-[70px] dark:block">
                    {props.logoalt ? (
                      <Image
                        {...urlForImage(props.logoalt)}
                        alt="Logo"
                        priority={true}
                        sizes="(max-width: 300px) 50vw, 100px"
                      />
                    ) : (
                      <span className="block text-center">Odds-API</span>
                    )}
                  </Link>
                </div>
              </div>
            </div>
          )}
        </Disclosure>
      </nav>
    </Container>
  )
}
