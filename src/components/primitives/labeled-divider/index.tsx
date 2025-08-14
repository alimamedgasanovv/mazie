import { ReactNode } from 'react'
import { Divider } from '../divider'
import styles from './labeled-divider.module.css'

interface LabeledDividerProps {
  label: ReactNode
}

export function LabeledDivider({ label }: LabeledDividerProps) {
  return (
    <div className={styles.container}>
      <Divider />
      <span className={styles.label}>{label}</span>
      <Divider />
    </div>
  )
}
