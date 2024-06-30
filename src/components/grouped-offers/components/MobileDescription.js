// @flow
import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
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

export default MobileDescription;
