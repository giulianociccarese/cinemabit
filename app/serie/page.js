import Link from 'next/link';
import { serie } from '@/lib/serie';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Poster from '@/components/Poster';

export const metadata = {
  title: 'Serie e telefilm',
  description: 'Le serie TV dai buoni sentimenti selezionate da CinemaBit: storie lunghe da vivere in famiglia, con valori positivi e cristiani.'
};

export default function SerieCatalogo() {
  return (
    <>
      <SiteHeader />
      <section className="page-head">
        <div className="wrap">
          <h1>Serie e telefilm</h1>
          <p>Storie lunghe da vivere in famiglia, un episodio alla volta. Serie dai valori positivi, che scaldano il cuore e fanno riflettere.</p>
        </div>
      </section>

      <div className="wrap">
        <p className="db-count">{serie.length} {serie.length === 1 ? 'serie disponibile' : 'serie disponibili'}</p>
        <div className="catalog">
          {serie.map(s => (
            <Link key={s.slug} href={`/serie/${s.slug}`} className="film">
              <div className="film-poster">
                <span className="tag">{s.categorie[0]}</span>
                <Poster imdb={s.imdb} titolo={s.titolo} />
              </div>
              <div className="film-body">
                <h3>{s.titolo}</h3>
                <span className="where">▶ {s.dove.map(d => d.nome).join(' · ')}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
