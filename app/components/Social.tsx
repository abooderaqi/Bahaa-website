"use client"

import { icons } from "lucide-react"
import Link from "next/link"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const socials = [
  {
    icon: <FaGithub />,
    path: "https://github.com/abooderaqi",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/abedalrhman-eraqi-4168b5252/",
  },
]
interface SocialProps {
  containerStyle: string
  iconStyle: string
}
const Social = ({ containerStyle, iconStyle }: SocialProps) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => {
        return (
          <Link
            href={social.path}
            key={index}
            target="_blank"
            className={iconStyle}
          >
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
