'use client'
import { AnimatePresence, motion } from 'framer-motion'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { HiOutlineArrowNarrowDown } from 'react-icons/hi'
import styles from './dropdown.module.scss'

const ARROW_ICON_SIZE = 24

//dropdown animation variant
const dropdownVariant = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: 'auto',
    opacity: 1,
  },
  exit: {
    height: 0,
    opacity: 0,
  },
}
const Dropdown = ({ title, about, topics, color = '#8000FF' }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className={styles.dropdown}>
      <div className={styles.title__wrapper} style={{ background: color }}>
        <h3 className={styles.title}>{title}</h3>

        {/* course description */}
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.div
              key={isOpen}
              variants={dropdownVariant}
              initial='hidden'
              animate='visible'
              exit='exit'>
              <p className={styles.description}>{about}</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className={styles.topics__wrapper}>
        <div className={styles.header}>
          <h3 className={styles.title}>Main topics</h3>

          <motion.button
            type='button'
            animate={{ rotate: isOpen ? 180 : 0 }}
            onClick={() => setIsOpen(prev => !prev)}>
            <HiOutlineArrowNarrowDown size={ARROW_ICON_SIZE} />
          </motion.button>
        </div>

        {/* course topics */}
        <AnimatePresence mode='wait'>
          {isOpen && (
            <motion.div
              key={isOpen}
              variants={dropdownVariant}
              initial='hidden'
              animate='visible'
              exit='exit'>
              <div className={styles.list__wrapper}>
                <ul className={styles.list}>
                  {topics?.map(topic => (
                    <li key={nanoid()}>{topic}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,
  topics: PropTypes.arrayOf(PropTypes.string),
  color: PropTypes.string,
}

export default Dropdown
