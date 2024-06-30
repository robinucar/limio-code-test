// @flow
import * as React from 'react';
import { CustomInput } from '@limio/design-system';

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

export default OfferOption;
