import { nanoid } from 'nanoid'
import Image from 'next/image'
import styles from './features.module.scss'
import { featureData } from './featuresData'

const Card = ({ card }) => {
  return (
    <div className={styles.card}>
      <div
        className={styles.card__image}
        style={{ background: card.circleColor }}>
        <Image src={card.img} className={styles.card__img} alt={card.alt} />
      </div>

      <h3 className={styles.card__title}>{card.title}</h3>
      <p className={styles.card__description}>{card.about}</p>
    </div>
  )
}

const features = () => {
  return (
    <section className={styles.features}>
      <h2>Our features</h2>
      <p>
        Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
        sollicitudin at nec nam et pharetra gravida. Adipiscing a quis ultrices
        eu ornare tristique vel nisl orci.
      </p>

      <div className={styles.cards}>
        {featureData.map(feature => (
          <Card key={nanoid()} card={feature} />
        ))}
      </div>
    </section>
  )
}

export default features
