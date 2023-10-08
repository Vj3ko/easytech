import { PageWrapper } from 'app/page-wrapper'
import {
  Banner,
  Benefits,
  Consultation,
  Curriculum,
  Diploma,
  Hero,
  Info,
} from 'components/course'
import { coursesAPI } from 'data/coursesAPI'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { isImageAvailable } from 'utils/isImageAvailable'

import styles from './course.module.scss'

const CourseDetail = ({ params }) => {
  const courseName = params.course
  const course = coursesAPI.hasOwnProperty(courseName)
    ? coursesAPI[courseName]
    : 'fullstack'
  const imagePath = `/assets/images/${courseName}.png`

  return (
    <PageWrapper>
      <section className={styles.course}>
        <Hero
          title={course.title}
          info={course.info}
          desc={course.description}
        />
        <Info title={course.title} about={course.about} />

        {isImageAvailable(courseName) && (
          <div className={styles.img__container}>
            <Image
              src={imagePath}
              fill
              sizes='100%'
              alt={`Image for ${course} course`}
              priority
            />
          </div>
        )}

        <Benefits data={course.benefits} />
        <Banner />
        <Curriculum skills={course.skills} color={course.color} />
        <Consultation />
        <Diploma />
      </section>
    </PageWrapper>
  )
}

CourseDetail.propTypes = {
  params: {
    course: PropTypes.string.isRequired,
  }.isRequired,
}

export default CourseDetail

export async function generateMetadata({ params }) {
  const courseName = params.course
  const data = coursesAPI.hasOwnProperty(courseName)
    ? coursesAPI[courseName]
    : 'Course'

  return {
    title: `${data.title} Course`,
  }
}
