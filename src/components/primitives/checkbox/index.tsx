'use client'

import { ReactNode, useId } from 'react'
import styles from './checkbox.module.css'

interface CheckboxProps {
  name?: string
  label?: string | ReactNode
  checked?: boolean
  indeterminate?: boolean
  disabled?: boolean
  onChange?: (name: string, checked: boolean) => void
}

export function Checkbox({ 
  name = '',
  label,
  checked = false,
  indeterminate = false,
  disabled = false,
  onChange
}: CheckboxProps) {
  const generatedId = useId()
  const checkboxId = name ? `checkbox-${name}` : generatedId

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!disabled) {
      onChange?.(name, e.target.checked)
    }
  }

  return (
    <label htmlFor={checkboxId} className={styles.container}>
      <div className={styles.checkboxWrapper}>
        <input
          id={checkboxId}
          name={name}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={handleChange}
          className={styles.hiddenInput}
          {...(indeterminate ? { 'data-indeterminate': '' } : {})}
        />
        <div className={styles.customCheckbox}></div>
      </div>
      {label && (
        <span className={styles.label}>
          {label}
        </span>
      )}
    </label>
  )
}
