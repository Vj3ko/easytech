import { PageWrapper } from 'app/page-wrapper'
import styles from './courses.module.scss'

export const metadata = {
  title: 'Courses',
}

const CourseList = () => {
  return (
    <PageWrapper>
      <section className={styles.courses}>
        <div className={styles.courses__wrapper}>
          <h1>Courses</h1>
        </div>
      </section>
    </PageWrapper>
  )
}

export default CourseList
