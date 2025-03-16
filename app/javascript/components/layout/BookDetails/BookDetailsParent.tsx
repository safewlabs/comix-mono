import React from 'react';

import { productDetailsData } from '@javascript/utils/dummyData/productDetailsData';
const BookDetailsParent = () => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '717px',
        marginTop: '-100px',
      }}
    >
      {/* Blurred Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `url(https://www.comix.one${productDetailsData.data.issue_cover})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(6px)',
        }}
      />

      {/* Dark Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />

      {/* Content Area */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          marginTop: '50px',
          height: '617px',
          color: 'white',
          textAlign: 'center',
          zIndex: 1,
        }}
      ></div>
    </div>
  );
};

export default BookDetailsParent;
