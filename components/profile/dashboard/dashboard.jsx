'use client'

import { useState } from 'react'

import CoursesPanel from '../panels/coursesPanel/coursesPanel'
import ProfilePanel from '../panels/profilePanel/profilePanel'
import SettingsPanel from '../panels/settingsPanel/settingsPanel'
import SignOutPanel from '../panels/signOut/signOut'

import styles from './dashboard.module.scss'

const renderActivePanel = panel => {
  switch (panel) {
    case 'profile':
      return <ProfilePanel />
    case 'courses':
      return <CoursesPanel />
    case 'settings':
      return <SettingsPanel />
    case 'logout':
      return <SignOutPanel />
    default:
      return <ProfilePanel />
  }
}

const Dashboard = () => {
  const [panel, setPanel] = useState('profile')

  const handleActivePanel = panel => {
    setPanel(panel)
  }

  return (
    <div className={styles.dashboard}>
      <aside className={styles.aside}>
        <BtnsContainer active={panel} handleActivePanel={handleActivePanel} />
      </aside>
      <div className={styles.panel}>{renderActivePanel(panel)}</div>
    </div>
  )
}

export default Dashboard

const btns = [
  { name: 'Personal data', id: 'profile' },
  { name: 'My courses', id: 'courses' },
  { name: 'Settings', id: 'settings' },
  { name: 'Sign out', id: 'logout' },
]

const BtnsContainer = ({ active, handleActivePanel }) => {
  return (
    <div className={styles.aside__nav}>
      {btns.map(btn => (
        <button
          key={btn.id}
          id={btn.id}
          className={active === btn.id ? styles.active : ''}
          onClick={e => handleActivePanel(e.target.id)}>
          {btn.name}
        </button>
      ))}
    </div>
  )
}
