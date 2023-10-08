import Footer from 'components/footer/footer'
import Nav from 'components/nav/nav'

const CoursesLayoutProvider = ({ children, params }) => {
  return (
    <>
      <div className='container'>
        <Nav lang={params.lang} />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default CoursesLayoutProvider
