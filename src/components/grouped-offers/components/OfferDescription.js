import React from 'react';

const OfferDescription = ({ label, description, thumbnail }) => (
  <div className='offers-description'>
    {thumbnail ? <img src={thumbnail.placeholder} alt={label} /> : null}
    <h2 className='offers-heading'>{label}</h2>
    <div
      className='offers-description-body'
      dangerouslySetInnerHTML={{ __html: description }}
    />
  </div>
);

export default OfferDescription;
