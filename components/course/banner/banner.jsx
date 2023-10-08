import styles from './banner.module.scss'

const Banner = () => {
  return (
    <div className={styles.banner}>
      <button className='cta dark'>Apply now</button>
      <p>
        To start your way in the IT field, submit an application, and a manager
        will guide you in selecting the most suitable path for your career.
      </p>
    </div>
  )
}

export default Banner
