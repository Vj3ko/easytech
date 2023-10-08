import styles from './diploma.module.scss'

const Diploma = () => {
  return (
    <div className={styles.diploma}>
      <h2>Diploma of completion</h2>

      <div className={styles.diploma__banner}>
        <h3>
          Show your employer a certificate of education from EasyTech which
          confirms the acquired knowledge
        </h3>
      </div>
    </div>
  )
}

export default Diploma
