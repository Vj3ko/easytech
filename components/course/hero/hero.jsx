import Image from 'next/image'
import PropTypes from 'prop-types'
import styles from './hero.module.scss'

const Hero = ({ title, info, desc }) => {
  return (
    <div className={styles.hero}>
      <div>
        <h2>Become a {title} Developer: beginner-friendly online course</h2>

        <h3>{desc}</h3>

        <div className={styles.cta__wrapper}>
          <button className='cta light'>Apply now</button>
          <span
            className={styles.status}
            style={{
              color: info.color,
              background: info.background,
            }}>
            {info.status}
          </span>
          <span
            className={styles.duration}
            style={{ color: title === 'FullStack' ? '#F5F5FC' : info.color }}>
            {info.duration}
          </span>
        </div>
      </div>
      <div className={styles.img__container}>
        <Image
          src={'/assets/images/twoPeopleUsingDevices.png'}
          className={styles.img}
          sizes='100%'
          alt='A man stting on a chair and using laptop and woman standing next to him using mobile device.'
          priority
          width={0}
          height={0}
        />
      </div>
    </div>
  )
}

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  info: PropTypes.exact({
    status: PropTypes.string,
    duration: PropTypes.string,
    color: PropTypes.string,
    background: PropTypes.string,
  }),
  desc: PropTypes.string.isRequired,
}

export default Hero
