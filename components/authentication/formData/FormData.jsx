import PropTypes from 'prop-types'
import { useState } from 'react'
import { MdVisibility, MdVisibilityOff } from 'react-icons/md'
import { ToastContainer, toast } from 'react-toastify'
import styles from './formData.module.scss'

import { isEmailValid } from 'utils/isEmailVaild'

const PASS_VISIBILITY_ICON_SIZE = 18
const MIN_PASSWORD_LENGTH = 8

const FormData = ({ type = 'Login', handleLogin, handleRegister }) => {
  const [isVisible, setIsVisible] = useState(false)

  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const validateForm = (email, name, password) => {
    if (!email) {
      toast.error("'Email' field can not be empty")
      return false
    } else if (!isEmailValid(email)) {
      toast.error('Email is not valid')
      return false
    }

    if (!password) {
      toast.error("'Password' field can not be empty")
      return false
    }

    if (type === 'Register') {
      if (password && password.length < MIN_PASSWORD_LENGTH) {
        toast.error("'Password' field must contain at least 8 characters")
        return false
      }

      if (!name) {
        toast.error("'Name' field can not be empty")
        return false
      }
    }
    return true
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    const isValidated = validateForm(email, name, password)

    if (!isValidated) {
      return
    }

    if (type === 'Login') handleLogin({ email, password })
    if (type === 'Register') handleRegister({ email, name, password })
  }

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <ToastContainer />
      {/* username*/}
      {type === 'Register' && (
        <label htmlFor='name'>
          Name
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your User name'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      )}

      {/* email */}
      <label htmlFor='email'>
        Email
        <input
          type='email'
          id='email'
          name='email'
          placeholder='Enter your email address'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      {/* password */}
      <label htmlFor='password'>
        Password
        <input
          type={isVisible ? 'text' : 'password'}
          id='password'
          name='password'
          placeholder='Enter your Password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <span
          className={styles.pass_visible}
          onClick={() => setIsVisible(prev => !prev)}>
          {isVisible ? (
            <MdVisibility size={PASS_VISIBILITY_ICON_SIZE} />
          ) : (
            <MdVisibilityOff size={PASS_VISIBILITY_ICON_SIZE} />
          )}
        </span>
      </label>

      {/* checkbox */}
      <div className={styles.checkbox}>
        <label>
          <input type='checkbox' name='checkbox' id='checkbox' />
          Remember me
        </label>

        <button type='button'>Forgot Password ?</button>
      </div>

      <button className='cta dark'>{type}</button>
    </form>
  )
}

FormData.propTypes = {
  type: PropTypes.string,
  handleLogin: PropTypes.func,
  handleRegister: PropTypes.func,
}

export default FormData
