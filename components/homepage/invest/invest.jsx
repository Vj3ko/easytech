import styles from './invest.module.scss'

const Stats = ({ stat, desc }) => {
  return (
    <>
      <div className={styles.item}>
        <span className={styles.item__title}>{stat}</span>
        <span className={styles.item__description}>{desc}</span>
      </div>
    </>
  )
}

const Invest = () => {
  return (
    <section className={styles.invest}>
      <h2>
        Invest in yourself
        <br /> with easyTech
      </h2>
      <p>
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices
        eu ornare tristique vel nisl orci.{' '}
      </p>

      <div className={styles.stats}>
        <Stats stat='15k+' desc='Students' />
        <Stats stat='75%' desc='Total success' />
        <Stats stat='26' desc='Chief experts' />
        <Stats stat='16' desc='Years of experience' />
      </div>
    </section>
  )
}

export default Invest
