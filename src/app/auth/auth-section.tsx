'use client'

import { useState } from 'react'
import { SegmentedControl } from '@/components/primitives/segmented-control'
import { FeatureBadge } from '@/components/primitives/feature-badge'
import { Button } from '@/components/primitives/button'
import { LabeledDivider } from '@/components/primitives/labeled-divider'
import { AuthForm } from './auth-form'
import { ReactNode } from 'react'
import styles from './auth.module.css'

interface AuthSectionProps {
  mascotIcon: ReactNode
  badges: Array<{
    iconName: string
    text: string
    iconColor: 'brand' | 'violet' | 'success' | 'danger'
    iconComponent: ReactNode
  }>
  googleIcon: ReactNode
  envelopeIcon: ReactNode
  lockIcon: ReactNode
  errorIcon: ReactNode
  eyeIcon: ReactNode
  eyeSlashIcon: ReactNode
  checkIcon: ReactNode
  crossIcon: ReactNode
}

export function AuthSectionClient({ mascotIcon, badges, googleIcon, envelopeIcon, lockIcon, errorIcon, eyeIcon, eyeSlashIcon, checkIcon, crossIcon }: AuthSectionProps) {
  const [authMode, setAuthMode] = useState<'create' | 'login'>('create')

  return (
    <>
      <div className={styles.floatingToggle}>
        <SegmentedControl 
          options={[
            { value: 'create', label: 'Create' },
            { value: 'login', label: 'Log in' }
          ]}
          value={authMode}
          onChange={(value) => setAuthMode(value as 'create' | 'login')}
        />
      </div>
      <div className={styles.heroContainer}>
        {mascotIcon}
        <div className={styles.textContainer}>
          <p className={styles.title}>
            {authMode === 'create' ? 'Create Mazie account.' : 'Welcome back.'}
          </p>
          <p className={styles.subtitle}>One place to connect tools, automate</p>
          <p className={styles.subtitle}>execution, and surface insights.</p>
        </div>
        {authMode === 'create' && (
          <div className={styles.badgesContainer}>
            {badges.map((badge, index) => (
              <FeatureBadge key={index} iconLeft={badge.iconComponent} iconColor={badge.iconColor}>
                {badge.text}
              </FeatureBadge>
            ))}
          </div>
        )}
      </div>
      <Button variant="secondary" iconLeft={googleIcon} fullWidth>
        Continue with Google
      </Button>
      <LabeledDivider label="or" />
      <AuthForm 
        mode={authMode}
        envelopeIcon={envelopeIcon} 
        lockIcon={lockIcon} 
        errorIcon={errorIcon}
        eyeIcon={eyeIcon}
        eyeSlashIcon={eyeSlashIcon}
        checkIcon={checkIcon}
        crossIcon={crossIcon}
      />
    </>
  )
}
