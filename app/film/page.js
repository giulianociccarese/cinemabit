import Link from 'next/link';
import { films, categorie } from '@/lib/films';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Poster from '@/components/Poster';

export const metadata = {
  title: 'Tutti i film',
  description: 'Il catalogo di CinemaBit: storie scelte per la loro frequenza. Filtra per categoria e trova dove vederle.'
};

export default function Catalogo() {
  return (
    <>
      <SiteHeader />
      <section className="page-head">
        <div className="wrap">
          <h1>Tutti i film</h1>
          <p>Il catalogo di CinemaBit: storie scelte per la loro frequenza. Filtra per categoria e trova dove vederle.</p>
          <div className="filters">
            {categorie.map((c, i) => (
              <a key={i} className={i === 0 ? 'on' : ''}>{c}</a>
            ))}
          </div>
        </div>
      </section>
      <div className="wrap">
        <div className="catalog">
          {films.map(f => (
            <Link key={f.slug} href={`/film/${f.slug}`} className="film">
              <div className="film-poster">
                <span className="tag">{f.categoria}</span>
                <Poster imdb={f.imdb} titolo={f.titolo} />
              </div>
              <div className="film-body">
                <h3>{f.titolo}</h3>
                <span className="where">▶ {f.dove.map(d => d.nome).join(' · ')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <SiteFooter />
    </>
  );
}
