'use client'

import { useState } from 'react'
import { Input } from '../input'
import { ComponentProps } from 'react'
import styles from './password-input.module.css'

type InputProps = ComponentProps<typeof Input>

interface PasswordInputProps extends Omit<InputProps, 'type' | 'iconLeft' | 'iconRight'> {
  lockIcon: React.ReactNode
  eyeIcon: React.ReactNode
  eyeSlashIcon: React.ReactNode
}

export function PasswordInput({ lockIcon, eyeIcon, eyeSlashIcon, ...props }: PasswordInputProps) {
  const [isVisible, setIsVisible] = useState(false)
  
  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  return (
    <Input
      {...props}
      type={isVisible ? 'text' : 'password'}
      iconLeft={lockIcon}
      iconRight={
        <button className={styles.eyeIcon} onClick={toggleVisibility} type="button">
          {isVisible ? eyeSlashIcon : eyeIcon}
        </button>
      }
    />
  )
}
