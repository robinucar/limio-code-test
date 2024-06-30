import React from 'react';
import OfferOption from './OfferOption';

const OfferOptions = ({
  id,
  groupId,
  offers,
  selection,
  groupSelected,
  selectOffer,
}) => (
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
);

export default OfferOptions;
