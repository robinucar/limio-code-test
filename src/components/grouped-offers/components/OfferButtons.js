import React from 'react';
import { Button } from '@limio/design-system';

const OfferButtons = ({
  groupId,
  groupSelected,
  addToBasket,
  selection,
  ctaText,
}) => (
  <div className={`offer-buttons ${groupSelected ? 'selected-group' : ''}`}>
    <Button
      id={`offer-group-button-${groupId}`}
      disabled={!groupSelected}
      onClick={() => {
        addToBasket(selection);
      }}
    >
      {ctaText || 'Buy now'}
    </Button>
  </div>
);

export default OfferButtons;
