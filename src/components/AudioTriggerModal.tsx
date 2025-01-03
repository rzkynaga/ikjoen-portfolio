import React from 'react';

interface AudioTriggerModalProps {
  onClose: () => void;
}

const AudioTriggerModal: React.FC<AudioTriggerModalProps> = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: '#fff',
          borderRadius: '8px',
          padding: '20px',
          textAlign: 'center',
          width: '80%',
          maxWidth: '400px',
        }}
      >
        <h2>🎵 Nikmati Suasana!</h2>
        <p>Klik tombol di bawah untuk menghidupkan musik latar.</p>
        <button
          onClick={onClose}
          style={{
            marginTop: '15px',
            padding: '10px 20px',
            borderRadius: '5px',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Mulai Musik
        </button>
      </div>
    </div>
  );
};

export default AudioTriggerModal;
