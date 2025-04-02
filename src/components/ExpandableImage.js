// src/components/ExpandableImage.js
import React, { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

function ExpandableImage({ src, alt }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <img 
        src={src} 
        alt={alt} 
        style={{ 
          width: '100%', 
          display: 'block', 
          cursor: 'pointer', 
          borderRadius: '8px' 
        }}
        onClick={() => setOpen(true)}
      />
      {open && (
        <Lightbox
          open={open}
          close={() => setOpen(false)}
          slides={[{ src }]}
        />
      )}
    </>
  );
}

export default ExpandableImage;
