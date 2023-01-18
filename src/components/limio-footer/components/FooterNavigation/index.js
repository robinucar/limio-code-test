// @flow
import React from "react"
import type { FooterNavigationProps } from "../../types"

const FooterNavigation = ({ items = [], alignment, divider }: FooterNavigationProps) => (
  <div className={`footer-navigation ${alignment}`}>
    {items.map((item, index) => (
      <div className="footer-navigation-item" key={item.url + index}>
        <a href={item.url}>{item.label}</a>
        <div className="footer-divide">{divider}</div>
      </div>
    ))}
  </div>
)

export default FooterNavigation
