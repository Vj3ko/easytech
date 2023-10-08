import { nanoid } from 'nanoid'
import Image from 'next/image'
import PropTypes from 'prop-types'
import styles from './grid.module.scss'

const GRID_ITEM_IMG_WIDTH = 33
const GRID_ITEM_IMG_HEIGHT = 43

const BenefitItem = ({ name, description, color }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__header}>
        <div className={styles.item__img} style={{ background: color }}>
          <Image
            src={'/assets/icons/file.svg'}
            width={GRID_ITEM_IMG_WIDTH}
            height={GRID_ITEM_IMG_HEIGHT}
            alt='random file image'
          />
        </div>
        <h3 className={styles.item__title}>{name}</h3>
      </div>
      <p className={styles.item__description}> {description}</p>
    </div>
  )
}

const Benefits = ({ data }) => {
  return (
    <div className={styles.grid}>
      {data.map(item => (
        <BenefitItem
          key={nanoid()}
          name={item.name}
          description={item.description}
          color={item.color}
        />
      ))}
    </div>
  )
}

Benefits.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
}

export default Benefits
