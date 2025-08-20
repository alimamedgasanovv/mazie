'use client'

import { useState, ReactNode, useEffect } from 'react'
import { Input } from '@/components/primitives/input'
import { PasswordInput } from '@/components/primitives/password-input'
import { PasswordChecklist } from '@/components/primitives/password-checklist'
import { Checkbox } from '@/components/primitives/checkbox'
import { Button } from '@/components/primitives/button'
import styles from './auth.module.css'

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value)
  
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(handler)
  }, [value, delay])
  
  return debouncedValue
}

interface AuthFormProps {
  mode: 'create' | 'login'
  envelopeIcon: ReactNode
  lockIcon: ReactNode
  errorIcon: ReactNode
  eyeIcon: ReactNode
  eyeSlashIcon: ReactNode
  checkIcon: ReactNode
  crossIcon: ReactNode
}

export function AuthForm({ mode, envelopeIcon, lockIcon, errorIcon, eyeIcon, eyeSlashIcon, checkIcon, crossIcon }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    terms: false
  })

  const [errors, setErrors] = useState({
    email: '',
    password: ''
  })
  
  const [touched, setTouched] = useState({
    email: false,
    password: false
  })
  
    const [isPasswordValid, setIsPasswordValid] = useState(false)
  const [isPasswordFocused, setIsPasswordFocused] = useState(false)

  const debouncedEmail = useDebounce(formData.email, 300)
  
  const validateEmail = (email: string): string => {
    if (!email) return 'Email is required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) return 'Please enter a valid email address'
    return ''
  }
  
  useEffect(() => {
    const emailError = validateEmail(debouncedEmail)
    setErrors(prev => ({ ...prev, email: emailError }))
  }, [debouncedEmail])

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleInputBlur = (name: string) => {
    setTouched(prev => ({ ...prev, [name]: true }))
    if (name === 'password') {
      setIsPasswordFocused(false)
    }
  }

  const handlePasswordFocus = () => {
    setIsPasswordFocused(true)
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const isFormValid = formData.email && 
                     formData.password && 
                     !errors.email && 
                     !errors.password &&
                     (mode === 'login' || (formData.terms && isPasswordValid))

  return (
    <div className={styles.formContainer}>
            <Input
        name="email"
        label="Email"
        type="email"
        placeholder="name@gmail.com"
        value={formData.email}
        onChange={handleInputChange}
        onBlur={() => handleInputBlur('email')}
        error={touched.email && errors.email ? errors.email : undefined}
        errorIcon={touched.email && errors.email ? errorIcon : undefined}
        iconLeft={envelopeIcon}
        autoFocus
      />
      <div className={styles.passwordSection}>
        <PasswordInput 
          name="password"
          label="Password" 
          placeholder="8+ characters"
          value={formData.password}
          onChange={handleInputChange}
          onFocus={handlePasswordFocus}
          onBlur={() => handleInputBlur('password')}
          lockIcon={lockIcon}
          eyeIcon={eyeIcon}
          eyeSlashIcon={eyeSlashIcon}
        />
        {mode === 'create' && (isPasswordFocused || formData.password.length > 0) && (
          <PasswordChecklist 
            password={formData.password}
            onValidationChange={setIsPasswordValid}
            checkIcon={checkIcon}
            crossIcon={crossIcon}
          />
        )}
      </div>
      {mode === 'create' && (
        <Checkbox 
          name="terms"
          label="I agree to mazie's terms and privacy policy"
          checked={formData.terms}
          onChange={handleCheckboxChange}
        />
      )}
      <Button variant="primary" fullWidth disabled={!isFormValid}>
        {mode === 'create' ? 'Get started' : 'Log in'}
      </Button>
    </div>
  )
}
