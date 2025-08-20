'use client'

import { ReactNode, useId } from 'react'
import styles from './input.module.css'

interface InputProps {
  name?: string
  label?: string
  placeholder?: string
  value?: string
  onChange?: (name: string, value: string) => void
  onBlur?: () => void
  onFocus?: () => void
  iconLeft?: ReactNode
  iconRight?: ReactNode
  disabled?: boolean
  type?: 'text' | 'email' | 'password' | 'tel' | 'url'
  error?: string
  errorIcon?: ReactNode
  autoFocus?: boolean
}

export function Input({ 
  name = '',
  label,
  placeholder,
  value,
  onChange,
  onBlur,
  onFocus,
  iconLeft,
  iconRight,
  disabled = false,
  type = 'text',
  error,
  errorIcon,
  autoFocus = false
}: InputProps) {
  const generatedId = useId()
  const inputId = name ? `input-${name}` : generatedId

  return (
    <div className={styles.container}>
      {label && (
        <div className={styles.headerRow}>
          <label htmlFor={inputId} className={styles.label}>
            {label}
          </label>
          {error && (
            <div className={styles.errorMessage}>
              {errorIcon && <span className={styles.errorIcon}>{errorIcon}</span>}
              <span className={styles.errorText}>{error}</span>
            </div>
          )}
        </div>
      )}
      <div className={styles.inputWrapper} data-error={!!error}>
        {iconLeft && <span className={styles.iconWrapper}>{iconLeft}</span>}
        <input
          id={inputId}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange?.(name, e.target.value)}
          onBlur={onBlur}
          onFocus={onFocus}
          disabled={disabled}
          autoFocus={autoFocus}
          className={styles.input}
        />
        {iconRight && <span className={styles.iconWrapper}>{iconRight}</span>}
      </div>
    </div>
  )
}
