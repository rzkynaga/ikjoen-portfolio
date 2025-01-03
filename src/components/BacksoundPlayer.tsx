"use client";

import { useState } from 'react';
import AudioTriggerModal from './AudioTriggerModal';

const BacksoundPlayer = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const handleInteraction = () => {
    setHasInteracted(true);
    setShowModal(false); // Close modal after interaction
  };

  return (
    <>
      {showModal && <AudioTriggerModal onClose={handleInteraction} />}
      <div onClick={handleInteraction} style={{ cursor: 'pointer' }}>
        {hasInteracted && (
          <audio autoPlay>
            <source src="/audio/nina.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        )}
      </div>
    </>
  );
};

export default BacksoundPlayer;
