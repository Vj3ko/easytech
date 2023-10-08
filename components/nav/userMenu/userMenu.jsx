'use client'

import PropTypes from 'prop-types'
import { useState } from 'react'
import styles from './userMenu.module.scss'

function UserMenu({ user, children }) {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={styles.user__menu}>
      <button
        className={styles.user__name}
        onClick={() => setIsActive(prev => !prev)}>
        {user}
      </button>
      {isActive && <div className={styles.menu}>{children}</div>}
    </div>
  )
}

UserMenu.propTypes = {
  user: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default UserMenu
