import Image from 'next/image'
import { PanelWrapper } from '../panelWrapper'
import styles from './coursesPanel.module.scss'

const CoursesPanel = () => {
  return (
    <PanelWrapper>
      <div className={styles.courses__panel}>
        <h1>Your courses</h1>

        <div className={styles.status}>
          <p>Active (1)</p>
          <p className={styles.greyed}>Passed</p>
        </div>

        <div className={styles.course}>
          <h3>Fullstack development</h3>

          <div className={styles.course__info_wrapper}>
            <div className={`${styles.flex__col} ${styles.grey}`}>
              <p>Start date:</p>
              <p>Your progress:</p>
              <p>Your progress:</p>
              <p>End date:</p>
            </div>

            <div className={styles.flex__col}>
              <p>23.09.2022</p>
              <div className={styles.progress}>
                <input type='range' min='1' max='100' value={72} readOnly />

                <p>72%</p>
              </div>
              <div className={styles.strike}>
                <div className={styles.strike__img}>
                  <Image
                    src={'/assets/icons/fireIcon.png'}
                    fill
                    sizes='100%'
                    alt='fire'
                  />
                </div>
                <p>3 days strike</p>
              </div>
              <p>23.09.2023</p>
            </div>
          </div>
        </div>
      </div>
    </PanelWrapper>
  )
}

export default CoursesPanel
