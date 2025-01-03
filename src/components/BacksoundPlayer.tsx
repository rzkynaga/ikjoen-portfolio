"use client";

import { useEffect, useState } from 'react';

const BacksoundPlayer = () => {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    // Fungsi untuk memutar audio setelah interaksi
    const handleUserInteraction = () => {
      setHasInteracted(true);
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };

    // Tambahkan event listener untuk scroll dan klik
    document.addEventListener('scroll', handleUserInteraction);
    document.addEventListener('click', handleUserInteraction);

    return () => {
      // Bersihkan event listener saat komponen dilepas
      document.removeEventListener('scroll', handleUserInteraction);
      document.removeEventListener('click', handleUserInteraction);
    };
  }, []);

  return (
    <>
      {hasInteracted && (
        <audio autoPlay loop>
          <source src="/audio/nina.mp3" type="audio/mpeg" />
          Browser Anda tidak mendukung elemen audio.
        </audio>
      )}
    </>
  );
};

export default BacksoundPlayer;
