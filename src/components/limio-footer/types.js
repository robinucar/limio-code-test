type ContactField = {
  label: string,
  url: string,
  value: string
}

type NavigationItem = {
  label: string,
  url: string
}

type Option = {
  id: string,
  label: string
}

type CountryOption = {
  countryCode: string,
  label: string,
  link: string
}

export type FooterProps = {
  enableLogo: boolean,
  logo: string,
  logoSize: string,
  logoMargin: string,
  contactFields: Array<ContactField>,
  copyrightText: string,
  poweredByLink: string,
  facebookLink: string,
  twitterLink: string,
  instagramLink: string,
  privacyLink: string,
  showJourneyCountryPicker: boolean,
  navigation: Array<NavigationItem>,
  navigationDivider: "-",
  navigationPosition: {
    options: Array<Option>,
    selected: Option
  },
  navigationAlignment: {
    options: Array<Option>,
    selected: Option
  },
  showCountryPicker: boolean,
  countries: {
    selected: CountryOption,
    configurableOptions: boolean,
    options: Array<CountryOption>
  },
  componentId: string
}

export type FooterNavigationProps = {
  items: Array<NavigationItem>,
  alignment: string,
  divider: string
}

export type CountryPickerProps = {
  countries: Array<CountryOption>,
  selected: CountryOption
}

export type LogoProps = {
  logo: string,
  logoMargin: string,
  logoSize: string
}

export type ContactFieldsProps = {
  contactFields: Array<ContactField>
}

export type SocialLinksProps = {
  facebookLink: string,
  twitterLink: string,
  instagramLink: string
}
