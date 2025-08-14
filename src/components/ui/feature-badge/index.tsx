import { ReactNode } from 'react'
import styles from './feature-badge.module.css'

type IconColor = 'brand' | 'success' | 'danger' | 'violet'

interface FeatureBadgeProps {
  children: ReactNode
  iconLeft?: ReactNode
  iconColor?: IconColor
}

export function FeatureBadge({ children, iconLeft, iconColor }: FeatureBadgeProps) {
  return (
    <div className={styles.badge} data-icon-color={iconColor}>
      {iconLeft && <span className={styles.iconWrapper}>{iconLeft}</span>}
      <span className={styles.textWrapper}>{children}</span>
    </div>
  )
}
