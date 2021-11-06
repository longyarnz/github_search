import React from 'react'
import Logo from './github_logo.png'
import { Wrapper } from './GitLogoStyles'

export const GitLogo = () => (
  <Wrapper $width={205} src={Logo} alt="GitHub Logo"/>
)