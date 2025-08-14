import styles from './auth.module.css'
import { Icon } from '@/components/ui/icon'
import { FeatureBadge } from '@/components/ui/feature-badge'
import { Button } from '@/components/ui/button'
import { LabeledDivider } from '@/components/ui/labeled-divider'
import { Input } from '@/components/ui/input'
import { AuthForm } from './auth-form'

export default async function AuthPage() {
  const mascotIcon = await Icon({ name: 'mazie-mascot' })
  const googleIcon = await Icon({ name: 'google' })
  const envelopeIcon = await Icon({ name: 'envelope' })
  const lockIcon = await Icon({ name: 'lock-filled' })
  
  const badgeData = [
    { icon: 'link', text: 'Connects to your tools', iconColor: 'brand' as const },
    { icon: 'bolt-filled', text: 'Automates workflows', iconColor: 'violet' as const },
    { icon: 'chart-bar-trend-up', text: 'Delivers insights', iconColor: 'success' as const },
    { icon: 'clock-filled', text: 'Learns overtime', iconColor: 'danger' as const }
  ]

  const badges = await Promise.all(
    badgeData.map(async (badge) => {
      const icon = await Icon({ name: badge.icon })
      return { ...badge, iconComponent: icon }
    })
  )

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heroContainer}>
          {mascotIcon}
          <div className={styles.textContainer}>
            <p className={styles.title}>Mazie – Focus is worth protecting.</p>
            <p className={styles.subtitle}>One place to connect tools, automate</p>
            <p className={styles.subtitle}>execution, and surface insights.</p>
          </div>
          <div className={styles.badgesContainer}>
            {badges.map((badge, index) => (
              <FeatureBadge key={index} iconLeft={badge.iconComponent} iconColor={badge.iconColor}>
                {badge.text}
              </FeatureBadge>
            ))}
          </div>
        </div>
        <Button variant="secondary" iconLeft={googleIcon} fullWidth>
          Continue with Google
        </Button>
        <LabeledDivider label="or" />
        <AuthForm envelopeIcon={envelopeIcon} lockIcon={lockIcon} />
      </div>
    </div>
  )
}
