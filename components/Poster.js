'use client';
import { useState, useEffect } from 'react';

const OMDB_KEY = 'ca60a789';
const cache = {};

// Poster: mostra la locandina ufficiale del film via OMDb.
// Finché carica (o se non c'è), mostra un fallback col titolo.
export default function Poster({ imdb, titolo, className = '', fallbackClass = 'ph' }) {
  const [url, setUrl] = useState(cache[imdb] || null);

  useEffect(() => {
    if (!imdb || cache[imdb] !== undefined && cache[imdb] !== null) {
      if (cache[imdb]) setUrl(cache[imdb]);
      return;
    }
    let alive = true;
    fetch(`https://www.omdbapi.com/?i=${imdb}&apikey=${OMDB_KEY}`)
      .then(r => r.json())
      .then(d => {
        const p = d && d.Poster && d.Poster !== 'N/A' ? d.Poster : null;
        cache[imdb] = p;
        if (alive && p) setUrl(p);
      })
      .catch(() => {});
    return () => { alive = false; };
  }, [imdb]);

  if (url) {
    return <img src={url} alt={`Locandina di ${titolo}`} loading="lazy" />;
  }
  return <div className={fallbackClass}>{titolo}</div>;
}
