import { i18n } from 'i18n.config'
import 'react-toastify/dist/ReactToastify.css'
import 'styles/globals.scss'
import LayoutProvider from './LayoutProvider'

export async function generateStaticParams() {
  return i18n.locales.map(locale => ({ lang: locale }))
}

const RootLayout = ({ children, params }) => {
  const { lang } = params
  return (
    <html lang={lang}>
      <body>
        <main>
          <LayoutProvider>{children}</LayoutProvider>
        </main>
      </body>
    </html>
  )
}

export default RootLayout
