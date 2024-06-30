// @flow
import * as React from 'react';
import { useState } from 'react';
import * as R from 'ramda';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button, CustomInput } from '@limio/design-system';
import { sanitizeString } from '@limio/utils/offers';

import MobileDescription from './MobileDescription';
import OfferDescription from './OfferDescription';
import OfferOptions from './OfferOptions';
import OfferButtons from './OfferButton';

type Props = {
  id: string,
  groupId: string,
  label: string,
  offers: {},
  bestValueText: string,
  buttonText: string,
  buttonUrl: string,
  mobileDescriptionHeading?: string,
  thumbnail: ?string,
  preselectFirstOfferInGroup: boolean,
  selectedGroup: Array<string>,
  setSelectedGroup: (Array<string>) => void,
};

function OfferGroup({
  id,
  groupId,
  label,
  offers = [],
  bestValueText,
  buttonText = 'Click here',
  buttonUrl,
  mobileDescriptionHeading = "What's included",
  thumbnail,
  preselectFirstOfferInGroup,
  selectedGroup,
  setSelectedGroup,
}: Props): React.Node {
  const { shop } = {
    shop: { addToBasket: () => console.log('Add to basket!') },
  };
  const { addToBasket } = shop;

  const [firstOffer = {}] = offers;
  const description =
    R.path(['data', 'attributes', 'offer_features__limio'], firstOffer) || ''; // Get this from the first offer in the group (admittedly, not the best)
  const ctaText = R.path(['data', 'attributes', 'cta_text__limio'], firstOffer);
  const groupSelected = R.includes(groupId, selectedGroup);

  const [selection, setSelection] = useState(groupSelected ? firstOffer : {});
  const bestValue = R.includes(
    true,
    R.map(
      (offer) => R.path(['data', 'attributes', 'best_value__limio'], offer),
      offers
    )
  );

  let redirect_url = '';

  const selectOffer = (offer) => {
    setSelectedGroup(
      preselectFirstOfferInGroup
        ? R.uniq([groupId, ...selectedGroup])
        : [groupId]
    );
    setSelection(offer);
  };
  const navigate = useNavigate();
  const handleClick = (e) => {
    e.preventDefault(); // Stop the default anchor tag behavior
    // Get the current query string
    const currentSearch = window.location.search;
    // Navigate to the new URL with the current query string
    navigate(buttonUrl + currentSearch);
    console.log('Subscribe Button Clicked');
  };
  return (
    <div className={`offer-group-container ${bestValue ? 'best-value' : ''}`}>
      {bestValue && (
        <div className='best-value-group'>{bestValueText || 'Best value'}</div>
      )}
      <div className='offers-container'>
        <OfferDescription
          label={label}
          description={description}
          thumbnail={thumbnail}
        />
        <div className='offer-selection'>
          <OfferOptions
            id={id}
            groupId={groupId}
            offers={offers}
            selection={selection}
            groupSelected={groupSelected}
            selectOffer={selectOffer}
          />
          <MobileDescription
            description={description}
            heading={mobileDescriptionHeading}
          />
          <OfferButtons
            groupId={groupId}
            groupSelected={groupSelected}
            addToBasket={(selection) =>
              addToBasket(
                selection,
                undefined,
                undefined,
                redirect_url + window.location.search
              )
            }
            selection={selection}
            ctaText={ctaText}
          />
        </div>
      </div>
      <div className='additional-offers-link'>
        <a
          href={buttonUrl + window.location.search}
          onClick={handleClick}
          className={`additional-offers-link ${
            !groupSelected ? 'disabled' : ''
          }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default OfferGroup;
