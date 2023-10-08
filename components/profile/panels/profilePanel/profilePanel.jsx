import { useSession } from 'next-auth/react'
import { BsCameraFill, BsFillPersonFill } from 'react-icons/bs'
import { PanelWrapper } from '../panelWrapper'
import styles from './profilePanel.module.scss'

const USER_IMG_SIZE = 90
const CAMERA_ICON_SIZE = 26

const ProfilePanel = () => {
  const { data: session } = useSession()

  if (!session) return <h1>Loading...</h1>

  return (
    <PanelWrapper>
      <div className={styles.profile__panel}>
        <h1>Your profile</h1>

        <div className={styles.user}>
          <div className={styles.user__img}>
            {/* placeholder img for a user */}
            <BsFillPersonFill size={USER_IMG_SIZE} />
            <span>
              {/* camera icon to add image */}
              <BsCameraFill size={CAMERA_ICON_SIZE} />
            </span>
          </div>

          <div>
            <h3 className={styles.user__name}>{session.user.name}</h3>
            <p>{session.user.email}</p>
          </div>
        </div>

        <form className={styles.form}>
          <div className={styles.grid}>
            <div className={styles.grid__item}>
              <label htmlFor='name'>User name</label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder={session.user.name}
              />
            </div>

            <div className={styles.grid__item}>
              <label htmlFor='surname'>User surname</label>
              <input
                type='text'
                name='surname'
                id='surname'
                placeholder='Enter your surname'
              />
            </div>

            <div className={styles.grid__item}>
              <label htmlFor='phone'>Phone</label>
              <input
                type='tel'
                name='phone'
                id='phone'
                placeholder='+385 ### ####'
              />
            </div>

            <div className={styles.grid__item}>
              <label htmlFor='address'>Address</label>
              <input
                type='text'
                name='address'
                id='address'
                placeholder='Enter your address'
              />
            </div>
          </div>

          <button className='cta dark'>Save changes</button>
        </form>
      </div>
    </PanelWrapper>
  )
}

export default ProfilePanel
