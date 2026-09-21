'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import Poster from '@/components/Poster';

// Database film interattivo: ricerca + filtri per categoria, lato client.
export default function Catalogo({ films, categorie }) {
  const [q, setQ] = useState('');
  const [cat, setCat] = useState('Tutti');

  const risultati = useMemo(() => {
    const query = q.trim().toLowerCase();
    return films.filter(f => {
      const okCat = cat === 'Tutti' || (f.categorie && f.categorie.includes(cat));
      const okQ = !query
        || f.titolo.toLowerCase().includes(query)
        || (f.regia && f.regia.toLowerCase().includes(query))
        || (f.categorie && f.categorie.some(c => c.toLowerCase().includes(query)))
        || (f.chips && f.chips.some(c => c.toLowerCase().includes(query)));
      return okCat && okQ;
    });
  }, [q, cat, films]);

  return (
    <>
      <section className="page-head">
        <div className="wrap">
          <h1>Database film</h1>
          <p>Cerca per titolo, tema o valore. Filtra per categoria e trova dove vedere ogni storia.</p>
          <div className="db-search">
            <input
              type="text"
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Cerca un film, un tema, un valore…"
              aria-label="Cerca un film"
            />
            {q && <button className="db-clear" onClick={() => setQ('')} aria-label="Cancella ricerca">×</button>}
          </div>
          <div className="filters">
            {categorie.map((c, i) => (
              <button
                key={i}
                className={c === cat ? 'on' : ''}
                onClick={() => setCat(c)}
              >{c}</button>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap">
        <p className="db-count">{risultati.length} {risultati.length === 1 ? 'film trovato' : 'film trovati'}{cat !== 'Tutti' ? ` in "${cat}"` : ''}{q ? ` per "${q}"` : ''}</p>

        {risultati.length > 0 ? (
          <div className="catalog">
            {risultati.map(f => (
              <Link key={f.slug} href={`/film/${f.slug}`} className="film">
                <div className="film-poster">
                  <span className="tag">{f.categorie[0]}</span>
                  <Poster imdb={f.imdb} titolo={f.titolo} />
                </div>
                <div className="film-body">
                  <h3>{f.titolo}</h3>
                  <span className="where">▶ {f.dove.map(d => d.nome).join(' · ')}</span>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="db-empty">
            <p>Nessun film trovato con questi criteri.</p>
            <button onClick={() => { setQ(''); setCat('Tutti'); }}>Azzera la ricerca</button>
          </div>
        )}
      </div>
    </>
  );
}
