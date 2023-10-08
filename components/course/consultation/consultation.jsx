import CountrySelector from 'components/countrySelector/countrySelector'
import styles from './consultation.module.scss'

const Consultation = () => {
  return (
    <div className={styles.consultation}>
      <h3>
        Learn more about the skills you will gain after the course during a free
        consultation
      </h3>
      <div className={styles.consultation__wrapper}>
        <div className={styles.consultation__wrapper_inner}>
          <input type='text' placeholder='Your name' />
          <input type='email' placeholder='E-mail' />
          <div className={styles.consultation_country}>
            <CountrySelector />
          </div>
        </div>

        <button className='cta dark'>Get consultation</button>
      </div>
    </div>
  )
}

export default Consultation
