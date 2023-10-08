import { getDictionary } from 'lib/localize'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './nav.module.scss'

import { authOptions } from 'app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import UserMenu from './userMenu/userMenu'

import SignOut from 'components/SignOut'
import Menu from './menu/menu'

import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoTiktok,
  BiLogoTwitter,
  BiLogoYoutube,
} from 'react-icons/bi'

const Nav = async ({ lang }) => {
  const { navigation } = await getDictionary(lang).catch(err =>
    console.error(err)
  )

  const session = await getServerSession(authOptions)

  return (
    <header className={styles.header}>
      <Link href={`/${lang}`}>
        <span className='logo'>
          easy<span className='bold'>Tech</span>
        </span>
      </Link>

      <Menu>
        {/* desktop menu */}
        <nav className={styles.nav__desktop}>
          <ul className={styles.list}>
            <li>
              <Link href={`/${lang}`}>{navigation.home}</Link>
            </li>

            <li>
              <Link href={`/${lang}/courses`}>{navigation.courses}</Link>
            </li>

            <li>
              <Link href={`#`}>{navigation.contacts}</Link>
            </li>

            <li>
              <Link href={`#`}>{navigation.about}</Link>
            </li>
          </ul>

          <div className={styles.search}>
            <Link href={`#`}>
              <div className={styles.img__container}>
                <Image src='/assets/icons/searchIcon.svg' fill alt='search' />
              </div>
            </Link>

            {session?.user ? (
              <div className={styles.user}>
                <UserMenu user={session.user.name}>
                  <Link href={`/${lang}/profile`}>My profile</Link>
                  <SignOut />
                </UserMenu>
              </div>
            ) : (
              <div className={styles.user}>
                <Link href={`/${lang}/authentication`}>
                  <div className={styles.img__container}>
                    <Image src='/assets/icons/userIcon.svg' fill alt='user' />
                  </div>
                </Link>
              </div>
            )}
          </div>
        </nav>

        {/* mobile menu */}
        <nav className={styles.nav__mobile}>
          <ul className={styles.list}>
            <li>
              <Link href={`/${lang}/courses`}>{navigation.courses}</Link>
            </li>

            <li>
              <Link href={`/${lang}/contacts`}>{navigation.contacts}</Link>
            </li>

            <li>
              <Link href={`/${lang}/about`}>{navigation.about}</Link>
            </li>

            <li>
              <Link href={`/${lang}/authentication`}>Sign in</Link>
            </li>
          </ul>

          <div className={styles.socials}>
            <BiLogoFacebook size={20} color='white' />
            <BiLogoInstagram size={20} color='white' />
            <BiLogoYoutube size={20} color='white' />
            <BiLogoTiktok size={20} color='white' />
            <BiLogoTwitter size={20} color='white' />
            <BiLogoLinkedinSquare size={20} color='white' />
          </div>
        </nav>
      </Menu>
    </header>
  )
}

Nav.propTypes = {
  lang: PropTypes.string,
}

export default Nav
