import styles from './auth.module.css'
import { Icon } from '@/components/primitives/icon'
import { FeatureBadge } from '@/components/primitives/feature-badge'
import { Button } from '@/components/primitives/button'
import { LabeledDivider } from '@/components/primitives/labeled-divider'
import { Input } from '@/components/primitives/input'
import { AuthSectionClient } from './auth-section'
import { AuthForm } from './auth-form'

async function getIcon(name: string) {
  return Icon({ name })
}

async function getBadges() {
  const badgeData = [
    { iconName: 'link', text: 'Connects to your tools', iconColor: 'brand' as const },
    { iconName: 'bolt-filled', text: 'Automates workflows', iconColor: 'violet' as const },
    { iconName: 'chart-bar-trend-up', text: 'Delivers insights', iconColor: 'success' as const },
    { iconName: 'clock-filled', text: 'Learns overtime', iconColor: 'danger' as const }
  ]

  return Promise.all(
    badgeData.map(async (badge) => {
      const icon = await getIcon(badge.iconName)
      return { ...badge, iconComponent: icon }
    })
  )
}

export default async function AuthPage() {
  const [
    mascotIcon,
    googleIcon,
    envelopeIcon,
    lockIcon,
    errorIcon,
    eyeIcon,
    eyeSlashIcon,
    checkIcon,
    crossIcon,
    badges
  ] = await Promise.all([
    getIcon('mazie-mascot'),
    getIcon('google'),
    getIcon('envelope'),
    getIcon('lock-filled'),
    getIcon('warning'),
    getIcon('eye'),
    getIcon('eye-slash'),
    getIcon('check-circle'),
    getIcon('xmark-circle'),
    getBadges()
  ])

  return (
    <div className={styles.container}>
      <div className={styles.contentWithToggle}>
        <AuthSectionClient 
          mascotIcon={mascotIcon}
          badges={badges}
          googleIcon={googleIcon}
          envelopeIcon={envelopeIcon} 
          lockIcon={lockIcon} 
          errorIcon={errorIcon}
          eyeIcon={eyeIcon}
          eyeSlashIcon={eyeSlashIcon}
          checkIcon={checkIcon}
          crossIcon={crossIcon}
        />
      </div>
    </div>
  )
}
