'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { GoogleAnalytics } from '@next/third-parties/google';

const GA_ID = 'G-HPR1JGBK1R';

export default function CookieConsent() {
  // stato: null = non deciso, 'yes' = accettato, 'no' = rifiutato
  const [scelta, setScelta] = useState(undefined);

  useEffect(() => {
    try {
      const salvato = localStorage.getItem('cinemabit-cookie-consent');
      setScelta(salvato);
    } catch {
      setScelta(null);
    }
  }, []);

  const decidi = (valore) => {
    try { localStorage.setItem('cinemabit-cookie-consent', valore); } catch {}
    setScelta(valore);
  };

  // finché non sappiamo la scelta salvata, non mostriamo nulla (evita lampeggìo)
  if (scelta === undefined) return null;

  return (
    <>
      {/* Google Analytics parte SOLO se l'utente ha accettato */}
      {scelta === 'yes' && <GoogleAnalytics gaId={GA_ID} />}

      {/* Banner: visibile solo se l'utente non ha ancora deciso */}
      {!scelta && (
        <div className="cookie-banner">
          <div className="cookie-inner">
            <p>
              Usiamo cookie tecnici e, con il tuo consenso, cookie di statistica (Google Analytics)
              per capire come viene usato il sito e migliorarlo. Puoi accettare o rifiutare.
              {' '}<Link href="/privacy">Informativa privacy e cookie</Link>.
            </p>
            <div className="cookie-actions">
              <button className="cookie-no" onClick={() => decidi('no')}>Rifiuta</button>
              <button className="cookie-yes" onClick={() => decidi('yes')}>Accetta</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
