import clsx from 'clsx'
import { ReactNode } from 'react'
import styles from './requirement-badge.module.css'

interface RequirementBadgeProps {
  label: string
  icon: ReactNode
  isValid: boolean
}

export function RequirementBadge({ label, icon, isValid }: RequirementBadgeProps) {
  return (
    <div className={clsx(styles.container, {
      [styles.met]: isValid,
      [styles.notMet]: !isValid
    })}>
      <span className={styles.icon}>{icon}</span>
      <span className={styles.labelWrapper}>
        {label}
      </span>
    </div>
  )
}
