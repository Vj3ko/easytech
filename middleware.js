import { match as matchLocale } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'
import { i18n } from './i18n.config'

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const negotiatorHeaders = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  const locales = i18n.locales
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()

  const locale = matchLocale(languages, locales, i18n.defaultLocale)
  return locale
}

export async function middleware(request) {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /
    // The new URL is now /en
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${locale}`, request.url))
    }
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!api|_next/static|_next/image|assets|favicon.ico).*)',
    // Optional: only run on root (/) URL
    // '/'
  ],
}
