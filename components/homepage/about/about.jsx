import aboutImg from 'images/oneGuyCoding.png'
import Image from 'next/image'
import styles from './about.module.scss'

const About = () => {
  return (
    <section className={styles.about}>
      <Image
        src={aboutImg}
        className={styles.img}
        alt='A man sitting in front of a laptop with code on it.'
      />

      <div className={styles.wrapper}>
        <h2>About easyTech</h2>
        <p className={styles.description}>
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>
        <button className='cta dark'>Apply now</button>
      </div>
    </section>
  )
}

export default About
