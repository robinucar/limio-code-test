// @flow
import React from "react"
import FooterNavigation from "./components/FooterNavigation"
import ContactFields from "./components/ContactFields"
import Logo from "./components/Logo"
import SocialLinks from "./components/SocialLinks"
import "./index.css"

const navigation = [
  {
    "label": "Home",
    "url": "/"
  },
  {
    "label": "Gift",
    "url": "/gift"
  },
  {
    "label": "Manage My Account",
    "url": "/mma"
  }
]

const contactFields = [
  {
    "label": "Email:",
    "value": "support@limio.com",
    "url": "mailto:support@limio.com"
  },
  {
    "label": "Telephone:",
    "value": "020 1234 1234",
    "url": "tel:020 1234 1234"
  },
  {
    "label": "Address:",
    "value": "Leather Market, Weston Street, London, SE1 3ER",
    "url": ""
  }
]

const LimioFooter = () => {

  return (
    <div className="FooterOuter">
      <div className="FooterWrapper">
        <div className="FooterContent">
          <Logo logo={"https://s3-eu-west-1.amazonaws.com/limio-public/limiologo.png"} />
          <div className="FooterSections">
            <div className="FooterLeft">
              <ContactFields contactFields={contactFields} />
            </div>
            <div className="FooterRight">
              <SocialLinks facebookLink={"https://www.facebook.com/people/Limio/100036084716440/"} twitterLink={"https://www.twitter.com/TryLimio"} instagramLink={"https://www.instagram.com/limio"} />
              <a className="FooterLink" href={"https://www.limio.com/privacy"} target="_blank" rel="noopener noreferrer"><p>Privacy Policy</p></a>
              <p>Copyright © 2019 Limio</p>
              <p>Powered by{" "}<a id="powered-link" href={"https//www.limio.com"} target="_blank" rel="noopener noreferrer">Limio</a></p>
            </div>
          </div>
        </div>
        <FooterNavigation items={navigation} alignment={"center"} divider={"-"} />
      </div>
    </div>
  )
}

export default LimioFooter
