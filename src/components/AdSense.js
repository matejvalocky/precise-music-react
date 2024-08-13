import React, { useEffect } from 'react';

const AdSense = () => {
  useEffect(() => {
    // Vytvorenie script elementu pre AdSense
    const script = document.createElement('script');
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1376252668623148';
    script.async = true;
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Funkcia na pridanie reklamy po načítaní scriptu
    script.onload = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    // Úprava alebo odstránenie scriptu pri unmountovaní komponentu
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client="ca-pub-1376252668623148"
      data-ad-slot="XXXXXXXXXX" // Nahraď svojím ad-slot ID
      data-ad-format="auto"
    />
  );
};

export default AdSense;
