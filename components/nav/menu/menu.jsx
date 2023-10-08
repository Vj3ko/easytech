'use client'

import styles from './menu.module.scss'

import Image from 'next/image'
import { useState } from 'react'

const Menu = ({ children }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div>
      {/* {isActive && <>{children}</>} */}
      {children}

      <button
        className={styles.menu__toggler}
        onClick={() => setIsActive(!isActive)}>
        <Image
          src='/assets/icons/hamburger.svg'
          width={25}
          height={25}
          alt=''
        />
      </button>
    </div>
  )
}

export default Menu
