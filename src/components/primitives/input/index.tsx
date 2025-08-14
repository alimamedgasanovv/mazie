'use client'

import { ReactNode, useId } from 'react'
import styles from './input.module.css'

interface InputProps {
  name?: string
  label?: string
  placeholder?: string
  value?: string
  onChange?: (name: string, value: string) => void
  iconLeft?: ReactNode
  iconRight?: ReactNode
  disabled?: boolean
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
}

export function Input({ 
  name = '',
  label,
  placeholder,
  value,
  onChange,
  iconLeft,
  iconRight,
  disabled = false,
  type = 'text'
}: InputProps) {
  const generatedId = useId()
  const inputId = name ? `input-${name}` : generatedId

  return (
    <div className={styles.container}>
      {label && (
        <label htmlFor={inputId} className={`${styles.typography} ${styles.label}`}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        {iconLeft && <span className={styles.iconWrapper}>{iconLeft}</span>}
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(name, e.target.value)}
          disabled={disabled}
          className={`${styles.typography} ${styles.input}`}
        />
        {iconRight && <span className={styles.iconWrapper}>{iconRight}</span>}
      </div>
    </div>
  )
}
