'use client'

import { SessionProvider } from 'next-auth/react'
import { useParams, usePathname } from 'next/navigation'

const LayoutProvider = ({ children }) => {
  const pathname = usePathname()
  const params = useParams()
  const { lang } = params

  return (
    <SessionProvider>
      {pathname === `/${lang}/courses` && (
        <div className='linear-gradient'>{children}</div>
      )}

      {pathname === `/${lang}` && <>{children}</>}
      {pathname === `/${lang}/authentication` && <>{children}</>}
      {pathname === `/${lang}/profile` && <>{children}</>}

      {pathname === `/${lang}/courses/fullstack` && (
        <div className='linear-gradient'>{children}</div>
      )}

      {pathname === `/${lang}/courses/frontend` && (
        <div className='pink-bg'>{children}</div>
      )}
    </SessionProvider>
  )
}

export default LayoutProvider
