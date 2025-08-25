'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from '@components/CookiePopup/CookiePopup.module.scss';


const CookiePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const cookieAccepted = localStorage.getItem('AcceptedCookie');
    if (!cookieAccepted) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('AcceptedCookie', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styled.cookie_container}>
      <h4 className={styled.title}>Wir respektieren Ihre Privatsphaere</h4>
      <p className={styled.description}>
        Diese Website verwendet Cookies und aehnliche Technologien, um Ihr Surferlebnis zu verbessern und Ihnen personalisierte Empfehlungen zu bieten.
        Durch die weitere Nutzung unserer Website stimmen Sie unserer{' '}
        <Link href="/datenschutzerklaerung">Datenschutzerklaerung</Link>
      </p>
      <div className={styled.buttons_container}>
        <Link href="/datenschutzerklaerung">
          <button className={styled.more_button}>Mehr lesen</button>
        </Link>
        <button className={styled.accept_button} onClick={handleAccept}>
          Alle akzeptieren
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
