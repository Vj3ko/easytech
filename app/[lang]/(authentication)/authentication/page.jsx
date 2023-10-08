import { authOptions } from 'app/api/auth/[...nextauth]/route'
import Authentication from 'components/authentication/authentication'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import PropTypes from 'prop-types'

const AuthenticationPage = async ({ params: { lang = 'en' } }) => {
  const session = await getServerSession(authOptions)

  if (session) {
    redirect('/')
  }

  return <Authentication lang={lang} />
}

AuthenticationPage.propTypes = {
  params: {
    lang: PropTypes.string,
  },
}

export default AuthenticationPage
