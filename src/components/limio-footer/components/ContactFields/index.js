// @flow
import React from "react"
import type { ContactFieldsProps } from "../../types"

const ContactFields = ({ contactFields }: ContactFieldsProps) => (
  <>
    {contactFields.map((contactField, index) =>
      contactField.url ? (
        <p key={"contactField" + index} className={"ContactField"}>
          <div className="ContactLabel">{contactField.label}</div>
          <a className="FooterLink" href={contactField.url} target="_top">
            {contactField.value}
          </a>
        </p>
      ) : (
        <p className={"ContactField"} key={"contactField" + index}>
          <div className="ContactLabel">{contactField.label}</div>
          {contactField.value}
        </p>
      )
    )}
  </>
)

export default ContactFields
