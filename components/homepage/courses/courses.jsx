import arrowRight from 'icons/arrowRight.svg'
import { nanoid } from 'nanoid'
import Image from 'next/image'
import Link from 'next/link'
import PropTypes from 'prop-types'
import styles from './courses.module.scss'
import { coursesData } from './coursesData'

const Course = ({ duration, status, description, title, courseBg, lang }) => {
  return (
    <div className={styles.course} style={{ background: courseBg }}>
      <div className={styles.course__header}>
        <span className={styles.duration}>{duration}</span>
        <div className={styles.status} style={{ background: status.bgColor }}>
          <span
            className={styles.status__text}
            style={{ color: status.textColor }}>
            {status.active}
          </span>
        </div>
      </div>

      <h3 className={styles.course__title}>{title}</h3>
      <p className={styles.course__description}>{description}</p>
      <button className='cta light'>Apply now</button>

      <div className='cta__learn--container left'>
        <Link className='cta learn' href={`/${lang}/courses/${title}`}>
          Learn more
        </Link>

        <Image
          src={arrowRight}
          className={styles.arrow}
          alt='arrow pointing right'
        />
      </div>
    </div>
  )
}

const Courses = ({ lang }) => {
  return (
    <section className={styles.courses}>
      <h2>Our courses</h2>
      <p className={styles.description}>
        Simple and secure control of your organization’s financial and legal
        transactions. Send customized invoices and contracts Simple and secure
        control of your organization’s financial and legal transactions. Send
        customized invoices and contractsSimple and secure control of your.
      </p>

      <div className={styles.courseList}>
        {coursesData.map(course => (
          <Course
            title={course.title}
            description={course.description}
            status={course.status}
            duration={course.duration}
            courseBg={course.bgColor}
            key={nanoid()}
            lang={lang}
          />
        ))}
      </div>
    </section>
  )
}

Courses.propTypes = {
  lang: PropTypes.string,
}

export default Courses
