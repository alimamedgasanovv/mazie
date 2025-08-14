interface IconProps {
  name: string
  className?: string
}

export async function Icon({ name, className = '' }: IconProps) {
  try {
    const { default: IconComponent } = await import(`../../icons/${name}.svg`)
    return <IconComponent className={className} />
  } catch (error) {
    console.warn(`Icon "${name}" not found`)
    return null
  }
}