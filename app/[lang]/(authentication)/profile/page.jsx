import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { PageWrapper } from 'app/page-wrapper'
import Dashboard from 'components/profile/dashboard/dashboard'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import styles from './profilePage.module.scss'

const ProfilePage = async ({ params }) => {
  const { lang } = params
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/authentication')
  }

  return (
    <section className={styles.profile}>
      <Link href={`/${lang}`} className={styles.logo}>
        <span className='logo'>
          easy<span className='bold'>Tech</span>
        </span>
      </Link>

      <div className={styles.dashboard__container}>
        <PageWrapper>
          <Dashboard />
        </PageWrapper>
      </div>
    </section>
  )
}

export default ProfilePage
