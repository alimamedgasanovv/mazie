'use client'

import { useState, ReactNode } from 'react'
import { Input } from '@/components/primitives/input'
import { Checkbox } from '@/components/primitives/checkbox'
import { Button } from '@/components/primitives/button'
import styles from './auth.module.css'

interface AuthFormProps {
  envelopeIcon: ReactNode
  lockIcon: ReactNode
}

export function AuthForm({ envelopeIcon, lockIcon }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    terms: false
  })

  const handleInputChange = (name: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }))
  }

  const isFormValid = formData.email.trim() !== '' && 
                     formData.password.trim() !== '' && 
                     formData.terms

  return (
    <div className={styles.formContainer}>
      <Input 
        name="email"
        label="Email" 
        placeholder="name@gmail.com"
        value={formData.email}
        onChange={handleInputChange}
        iconLeft={envelopeIcon}
      />
      <Input 
        name="password"
        type="password"
        label="Password" 
        placeholder="8+ characters"
        value={formData.password}
        onChange={handleInputChange}
        iconLeft={lockIcon}
      />
      <Checkbox 
        name="terms"
        label="I agree to mazie's terms and privacy policy"
        checked={formData.terms}
        onChange={handleCheckboxChange}
      />
      {isFormValid && (
        <Button variant="primary" fullWidth>
          Get Started
        </Button>
      )}
    </div>
  )
}
