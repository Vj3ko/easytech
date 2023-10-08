import facebook from 'icons/facebook.svg'
import instagram from 'icons/instagram.svg'
import linkedin from 'icons/linkedin.svg'
import twitter from 'icons/twitter.svg'
import Image from 'next/image'
import Link from 'next/link'
import styles from './footer.module.scss'

const socialIcons = [
  { name: 'facebook', img: facebook },
  { name: 'twitter', img: twitter },
  { name: 'instagram', img: instagram },
  { name: 'linkedin', img: linkedin },
]

const socials = socialIcons.map(icon => (
  <Link href='#' key={icon.name}>
    <Image src={icon.img} className={styles.img} alt={icon.name} />
  </Link>
))

const Footer = () => {
  return (
    <section className={styles.footer}>
      <span className='logo'>
        easy<span className='bold'>Tech</span>
      </span>

      <div className={styles.wrapper}>
        <div className={styles.links__wrapper}>
          <div className={styles.column}>
            <p className={styles.column__name}>Company</p>
            <ul>
              <li>
                <Link href='#'>About Us</Link>
              </li>
              <li>
                <Link href='#'>Why choose us</Link>
              </li>
              <li>
                <Link href='#'>Our features</Link>
              </li>
              <li>
                <Link href='#'>Our courses</Link>
              </li>
            </ul>
          </div>
          <div className={styles.column}>
            <p className={styles.column__name}>Resources</p>
            <ul>
              <li>
                <Link href='#'>Privacy Policy</Link>
              </li>
              <li>
                <Link href='#'>Terms and Condition</Link>
              </li>
              <li>
                <Link href='#'>Blog</Link>
              </li>
              <li>
                <Link href='#'>Contact us</Link>
              </li>
            </ul>
          </div>
        </div>

        <form className={styles.form}>
          <h4>Subscribe to get our Newsletter</h4>
          <input type='email' name='email' placeholder='Your Email' />
          <button className='cta light'>Subscribe</button>
        </form>
      </div>

      <div className={styles.socials}>{socials}</div>
    </section>
  )
}

export default Footer
