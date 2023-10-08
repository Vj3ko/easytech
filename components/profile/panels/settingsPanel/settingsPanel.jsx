import { PanelWrapper } from '../panelWrapper'
import styles from './settingsPanel.module.scss'

const SettingsPanel = () => {
  return (
    <PanelWrapper>
      <div className={styles.settings__panel}>
        <h1>Settings</h1>

        <div className={styles.setting__option}>
          <h3>Country</h3>
        </div>

        <div className={styles.setting__option}>
          <h3>Timezone</h3>
        </div>

        <div className={styles.setting__option}>
          <h3>Language</h3>
        </div>
      </div>
    </PanelWrapper>
  )
}

export default SettingsPanel
