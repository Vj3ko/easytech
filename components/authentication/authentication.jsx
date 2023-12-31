'use client'

import { PageWrapper } from 'app/page-wrapper'
import { AnimatePresence, motion } from 'framer-motion'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import styles from './authentication.module.scss'
import FormData from './formData/FormData'

//Image animation variant for smooth transition
const imgVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
}

const Authentication = ({ lang }) => {
  const [isChecked, setIsChecked] = useState(false)
  const router = useRouter()

  let type = isChecked === true ? 'Register' : 'Login'

  const toggleChecked = () => {
    setIsChecked(prev => !prev)
  }

  const handleLogin = async data => {
    const { email, password } = data

    signIn('credentials', {
      email,
      password,
      redirect: false,
    }).then(callback => {
      if (callback?.error) {
        toast.error(callback.error)
      }

      if (callback?.ok && !callback?.error) {
        router.refresh()
      }
    })
  }

  const handleRegister = async data => {
    const { email, name, password } = data

    try {
      const response = await fetch(`/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, name, password }),
      })

      const { message } = await response.json()
      if (!response.ok) {
        toast.error(message)
        return
      }
      toast.success(message)
      toggleChecked()
    } catch (error) {
      console.error('Error trying to register: ', error)
    }
  }

  return (
    <section className={styles.auth}>
      <ToastContainer />

      <Link href={`/${lang}`} className={styles.logo}>
        <span className='logo'>
          easy<span className='bold'>Tech</span>
        </span>
      </Link>

      <PageWrapper>
        <div className={styles.flex__container}>
          {/* changing image depending if user wants to login/register */}
          <AnimatePresence mode='wait'>
            <motion.div
              className={styles.img__wrapper}
              variants={imgVariant}
              key={type}
              initial='hidden'
              animate='visible'
              exit='exit'>
              <Image
                src={
                  type === 'Login'
                    ? '/assets/images/womanOnChair.png'
                    : '/assets/images/twoPeopleUsingDevices.png'
                }
                width={0}
                height={0}
                sizes='100%'
                className={styles.img}
                alt={
                  type === 'Login'
                    ? 'A woman sitting on a chair using a laptop'
                    : 'A man sitting on a chair using a laptop and a woman standing next to him using mobile device.'
                }
                priority
              />
            </motion.div>
          </AnimatePresence>

          <div className={styles.wrapper}>
            <h1>Welcome to EasyTech!</h1>
            <ToggleSwitch isChecked={isChecked} toggleChecked={toggleChecked} />

            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>

            <AnimatePresence mode='wait'>
              <motion.div
                className={styles.form__wrapper}
                key={type}
                initial={{ opactiy: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}>
                <FormData
                  type={type}
                  handleLogin={handleLogin}
                  handleRegister={handleRegister}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}

Authentication.propTypes = {
  lang: PropTypes.string,
}

export default Authentication

const ToggleSwitch = ({ isChecked, toggleChecked }) => {
  return (
    <div className={styles.switch__container}>
      <label htmlFor='switch'>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={toggleChecked}
          name='switch'
          id='switch'
        />
        <span className={styles.slider}></span>
        <p className={styles.login}>Login</p>
        <p className={styles.register}>Register</p>
      </label>
    </div>
  )
}
