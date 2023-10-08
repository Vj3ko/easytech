import PropTypes from 'prop-types'
import styles from './info.module.scss'

const Info = ({ title, about }) => {
  return (
    <div className={styles.info}>
      <h2>Who is {title} Developer</h2>
      <p className={styles.info__description}>{about}</p>
    </div>
  )
}

Info.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
}

export default Info
