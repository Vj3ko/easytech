import { PageWrapper } from 'app/page-wrapper'
import { About, Courses, Features, Hero, Invest } from 'components/homepage'
import { getDictionary } from 'lib/localize'
import PropTypes from 'prop-types'

export const metadata = {
  title: 'easyTech',
}

const Home = async ({ params: { lang = 'en' } }) => {
  const {
    page: { home },
    shared,
  } = await getDictionary(lang).catch(err => {
    console.error('Error fetching dictionary:', err)
    return null
  })

  return (
    <PageWrapper>
      <Hero lang={lang} home={home} shared={shared} />
      <About />
      <Invest />
      <Features />
      <Courses lang={lang} />
    </PageWrapper>
  )
}

Home.propTypes = {
  params: {
    lang: PropTypes.string,
  },
}

export default Home
