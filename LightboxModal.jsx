// A simple lightbox modal for use in React.
// Uses the zoom in/zoom out cursor.

import React from 'react';

function LightboxModal({ image, handleLightboxExitClick }) {
  return (
    <div className="darkbox" onClick={handleLightboxExitClick}>
      <div className="lightbox">
        <img src={image} alt="" className="lightbox-image" onClick={handleLightboxExitClick} />
      </div>
    </div>
  )
}

export default LightboxModal;

/** Include these lines in parent element:

const [displayLightbox, setLightbox] = useState(false);

const handleLightboxClick = () => {
  setLightbox(true);
}

const handleLightboxExitClick = () => {
  setLightbox(false);
}

<img className="FILL_ME_IN" src={FILL_ME_IN} alt="" onClick={handleLightboxClick} />

*/