import Dropdown from 'components/dropdown/dropdown'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import styles from './curriculum.module.scss'

const Curriculum = ({ color, skills }) => {
  return (
    <div className={styles.curriculum}>
      <div className={styles.gain}>
        <h2>What you will gain</h2>
        <p>
          The curriculum fully aligns with the standard prerequisites for
          entry-level positions in the field.
        </p>
      </div>

      <div className={styles.dropdown__wrapper}>
        {skills?.map(skill => (
          <Dropdown
            key={nanoid()}
            title={skill.name}
            about={skill.about}
            topics={skill.topics}
            color={color}
          />
        ))}
      </div>
    </div>
  )
}

Curriculum.propTypes = {
  color: PropTypes.string,
  skills: PropTypes.arrayOf(PropTypes.object),
}

export default Curriculum
