'use client'

import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './segmented-control.module.css'

interface SegmentedControlOption {
  value: string
  label: string
}

interface SegmentedControlProps {
  options: SegmentedControlOption[]
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

export function SegmentedControl({ 
  options,
  value,
  onChange,
  disabled = false
}: SegmentedControlProps) {
  return (
    <div className={styles.container}>
      {options.map((option) => (
        <button
          key={option.value}
          className={clsx(styles.tab, {
            [styles.active]: value === option.value
          })}
          onClick={() => !disabled && onChange?.(option.value)}
          disabled={disabled}
          type="button"
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}
