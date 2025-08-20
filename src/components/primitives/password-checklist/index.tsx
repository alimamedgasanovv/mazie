'use client'

import { useEffect } from 'react'
import { RequirementBadge } from '../requirement-badge'
import styles from './password-checklist.module.css'

interface PasswordChecklistProps {
  password: string
  onValidationChange: (isValid: boolean) => void
  checkIcon: React.ReactNode
  crossIcon: React.ReactNode
}

interface Requirement {
  label: string
  validate: (password: string) => boolean
}

export function PasswordChecklist({ password, onValidationChange, checkIcon, crossIcon }: PasswordChecklistProps) {
  const requirements: Requirement[] = [
    {
      label: '10 characters',
      validate: (pwd) => pwd.length >= 10
    },
    {
      label: 'Uppercase',
      validate: (pwd) => /[A-Z]/.test(pwd)
    },
    {
      label: 'Lowercase',
      validate: (pwd) => /[a-z]/.test(pwd)
    },
    {
      label: 'Number',
      validate: (pwd) => /\d/.test(pwd)
    },
    {
      label: 'Special character',
      validate: (pwd) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd)
    }
  ]

  const validationResults = requirements.map(req => req.validate(password))
  const allValid = validationResults.every(result => result)

  useEffect(() => {
    onValidationChange(allValid)
  }, [allValid, onValidationChange])

  return (
    <div className={styles.container}>
      {requirements.map((requirement, index) => (
        <RequirementBadge
          key={requirement.label}
          label={requirement.label}
          icon={validationResults[index] ? checkIcon : crossIcon}
          isValid={validationResults[index]}
        />
      ))}
    </div>
  )
}
