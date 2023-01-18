// @flow
import React from "react"
import type { LogoProps } from "../../types"

const Logo = ({ logo }: LogoProps) => (
  <img
    src={logo}
    alt="logo"
    className="FooterLogo"
    style={{
      width: `7em`
    }}
  />
)

export default Logo
