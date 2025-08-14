import { ReactNode } from 'react'
import styles from './button.module.css'
import { cn } from '@/lib/utils'

interface ButtonProps {
  children: ReactNode
  variant?: 'primary' | 'secondary'
  iconLeft?: ReactNode
  iconRight?: ReactNode
  disabled?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  fullWidth?: boolean
  className?: string
}

export function Button({ 
  children, 
  variant = 'primary', 
  iconLeft, 
  iconRight, 
  disabled = false,
  onClick,
  type = 'button',
  fullWidth = false,
  className = ''
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        className
      )}
    >
      {iconLeft && <span className={styles.iconWrapper}>{iconLeft}</span>}
      <span className={styles.textWrapper}>{children}</span>
      {iconRight && <span className={styles.iconWrapper}>{iconRight}</span>}
    </button>
  )
}
