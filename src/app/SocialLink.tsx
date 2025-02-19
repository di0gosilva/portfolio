import React from 'react'

type Social = {
  url: string;
  size: number;
  icon: React.ElementType;
}

type SocialProps = {
  social: Social;
}

export default function SocialLink({ social }: SocialProps) {
  return (
    <a href={social.url} target='_blank' rel="noopener noreferrer">
      <social.icon size={social.size}/>
    </a>
  )
}
