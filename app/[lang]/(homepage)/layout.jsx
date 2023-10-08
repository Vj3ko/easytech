import Footer from 'components/footer/footer'
import Nav from 'components/nav/nav'
import rectangle from 'images/rectangle.png'
import rectangleBottom from 'images/rectangle2.png'
import Image from 'next/image'

const HomeLayout = ({ children, params }) => {
  const { lang } = params

  return (
    <div className='container'>
      {/* top purple bg rectangle on homepage */}
      <div className='top-bg'>
        <Image
          src={rectangle}
          className='top-bg__img'
          alt='purple rectangle'
          priority={true}
        />
      </div>

      <Nav lang={lang} />
      {children}
      <Footer />

      {/* bottom purple bg rectangle on homepage */}
      <div className='bottom-bg'>
        <Image
          src={rectangleBottom}
          className='bottom-bg__img'
          alt='purple rectangle'
        />
      </div>
    </div>
  )
}

export default HomeLayout
