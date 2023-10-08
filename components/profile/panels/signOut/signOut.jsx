import { signOut } from 'next-auth/react'
import { PanelWrapper } from '../panelWrapper'
import styles from './signOut.module.scss'

const SignOutPanel = () => {
  return (
    <PanelWrapper>
      <div className={styles.signout__panel}>
        <h1>Sign out</h1>

        <h3>Are you sure u want to sign out?</h3>
        <div className={styles.signout__btns}>
          <button className='cta dark' onClick={() => signOut()}>
            Sign out
          </button>
          <button className='cta light'>Cancel</button>
        </div>
      </div>
    </PanelWrapper>
  )
}

export default SignOutPanel
