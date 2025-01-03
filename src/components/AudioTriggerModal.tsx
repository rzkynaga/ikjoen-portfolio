"use client";

import { useState } from 'react';

const AudioTriggerModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
      onClick={onClose}>
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '8px',
          textAlign: 'center',
        }}>
        <h2>Click here to start the music</h2>
        <p>Tap anywhere on this box to play the background sound.</p>
      </div>
    </div>
  );
};

export default AudioTriggerModal;
