import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './hero.module.scss'

import arrowRight from 'icons/arrowRight.svg'
import groupImg from 'images/groupOfPeople.png'

const Hero = ({ lang, home, shared }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        <Image
          src={groupImg}
          className={styles.img}
          alt='A group of people sitting at a table with a laptop and coins.'
          priority
        />

        <h1 className={styles.title}>
          Easy <strong>Tech</strong>
        </h1>

        <p className={styles.description}>{home.hero.description}</p>

        <div>
          <div className={styles.cta__container}>
            <input type='email' name='email' placeholder={shared.email_input} />

            <button className='cta light'>{shared.apply_btn}</button>
          </div>

          <div className='cta__learn--container'>
            <Link className='cta learn' href={`/${lang}/courses`}>
              {shared.learn_btn}
            </Link>
            <Image
              src={arrowRight}
              className={styles.arrow}
              alt='arrow pointing right'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

Hero.propTypes = {
  lang: PropTypes.string,
  home: PropTypes.exact({
    hero: PropTypes.exact({
      description: PropTypes.string,
    }),
  }),
  shared: PropTypes.exact({
    apply_btn: PropTypes.string,
    learn_btn: PropTypes.string,
    email_input: PropTypes.string,
  }),
}

export default Hero
