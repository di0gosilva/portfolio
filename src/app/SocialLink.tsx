import React from 'react'

type Social = {
  url: string;
  className: string;
  icon: React.ElementType;
}

type SocialProps = {
  social: Social;
}

export default function SocialLink({ social }: SocialProps) {
  const Icon = social.icon

  return (
    <a href={social.url} target='_blank' rel="noopener noreferrer">
      <Icon className={social.className} />
    </a>
  )
}
