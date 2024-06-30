// @flow
import * as React from 'react';
import { useState } from 'react';
import * as R from 'ramda';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Button, CustomInput } from '@limio/design-system';
import { sanitizeString } from '@limio/utils/offers';

type MobileDescriptionProps = {
  heading: string,
  description: string,
};

function MobileDescription({
  heading,
  description,
}: MobileDescriptionProps): React.Node {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className='offer-mobile-description'>
      <div
        className={`expand-description ${expanded ? 'expanded' : ''}`}
        onClick={() => setExpanded(!expanded)}
      >
        <h3>{heading}</h3>
        <FontAwesomeIcon icon={faChevronDown} />
      </div>
      {expanded && (
        <div
          className='offers-description-body'
          dangerouslySetInnerHTML={{ __html: sanitizeString(description) }}
        />
      )}
    </div>
  );
}

function getTestId(name: string = 'default', groupId: string): string {
  const dashName = name.replace(/\s+/g, '-').toLowerCase();
  return `${groupId}-${dashName}-offer`;
}

type OfferGroupProps = {
  offer: {},
  selected: boolean,
  onClick: () => void,
  groupId: string,
};

function OfferOption({
  offer,
  selected,
  onClick,
  groupId,
}: OfferGroupProps): React.Node {
  const {
    display_name__limio,
    display_description__limio,
    display_price__limio,
    detailed_display_price__limio,
  } = offer.data.attributes;

  return (
    <div
      className={`offer-option ${offer.hidden ? ' hidden' : ''}`}
      onClick={() => onClick()}
      data-testid={getTestId(display_name__limio, groupId)}
    >
      {!offer.hidden && (
        <>
          <div className='offer-option-button'>
            <CustomInput
              aria-label={display_name__limio}
              type='radio'
              checked={selected}
              onChange={() => onClick()}
            />
          </div>
          <div className='offer-option-container'>
            <div className='offer-option-heading'>
              <h2>{display_name__limio}</h2>
              {<span>{display_description__limio}</span>}
            </div>
            <h3 dangerouslySetInnerHTML={{ __html: display_price__limio }} />
            <h4
              dangerouslySetInnerHTML={{
                __html: detailed_display_price__limio,
              }}
            />
          </div>
        </>
      )}
    </div>
  );
}

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
        <div className='offers-description'>
          {thumbnail ? <img src={thumbnail.placeholder} /> : null}
          <h2 className='offers-heading'>{label}</h2>
          <div
            className='offers-description-body'
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
        <div className='offer-selection'>
          <div className='offer-options'>
            {offers.map((offer, index) => (
              <OfferOption
                key={`${id}-offer-option-${index}`}
                groupId={groupId}
                offer={offer}
                selected={selection === offer && groupSelected}
                onClick={() => selectOffer(offer)}
              />
            ))}
          </div>
          <MobileDescription
            description={description}
            heading={mobileDescriptionHeading}
          />
          <div
            className={`offer-buttons ${groupSelected ? 'selected-group' : ''}`}
          >
            <Button
              id={`offer-group-button-${groupId}`}
              disabled={!groupSelected}
              onClick={() =>
                addToBasket(
                  selection,
                  undefined,
                  undefined,
                  redirect_url + window.location.search
                )
              }
            >
              {ctaText || 'Buy now'}
            </Button>
          </div>
        </div>
      </div>
      <div className='additional-offers-link'>
        <a href={buttonUrl + window.location.search} onClick={handleClick}>
          {buttonText}
        </a>
      </div>
    </div>
  );
}

export default OfferGroup;
