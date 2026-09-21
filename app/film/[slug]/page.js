import Link from 'next/link';
import { notFound } from 'next/navigation';
import { films, getFilm, getAllSlugs, correlati } from '@/lib/films';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Poster from '@/components/Poster';

// Genera una pagina statica per ogni film (ottimo per la SEO)
export function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }));
}

// SEO per ogni singolo film
export function generateMetadata({ params }) {
  const f = getFilm(params.slug);
  if (!f) return {};
  return {
    title: `${f.titolo} (${f.anno})`,
    description: `${f.titolo}: ${f.perche} Scopri dove vederlo e la sua frequenza su CinemaBit.`,
    openGraph: {
      title: `${f.titolo} (${f.anno}) — CinemaBit`,
      description: f.tagline,
      type: 'video.movie'
    }
  };
}

export default function FilmPage({ params }) {
  const f = getFilm(params.slug);
  if (!f) notFound();
  const altri = correlati(f.slug, 3);

  return (
    <>
      <SiteHeader />
      <div className="crumb">
        <div className="wrap">
          <Link href="/">Home</Link> › <Link href="/film">Film</Link> › <strong>{f.titolo}</strong>
        </div>
      </div>

      <section className="film-hero">
        <div className="wrap">
          <div className="poster"><Poster imdb={f.imdb} titolo={f.titolo} /></div>
          <div className="fh-body">
            <h1>{f.titolo}</h1>
            <p className="meta">{f.anno} · {f.durata} · {f.genere} · Regia di {f.regia}</p>
            <p className="tagline">"{f.tagline}"</p>
            <div className="chips">
              {f.chips.map((c, i) => (
                <span key={i} className={'chip' + (i === 0 ? ' gold' : '')}>{c}</span>
              ))}
            </div>
            <div className="watch">
              {f.dove.map((d, i) => (
                <a key={i}>▶ {d.nome}</a>
              ))}
              <a className="buy">🛒 DVD / Blu-ray su Amazon</a>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="layout">
          <div className="content">
            <h2>La storia</h2>
            {f.storia.map((p, i) => <p key={i}>{p}</p>)}

            {f.frasi.length > 0 && (
              <>
                <h2>Frasi e messaggi</h2>
                <div className="frasi">
                  {f.frasi.map((fr, i) => (
                    <div key={i} className="frase">
                      <p>"{fr.testo}"</p>
                      <span className="who">{fr.chi}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="freq">
              <div className="dial"><span>{f.frequenza}</span></div>
              <div className="txt">
                <strong>La frequenza di {f.titolo}</strong>
                <p>{f.frequenzaTesto}</p>
              </div>
            </div>

            <div className="why">
              <h3>Da vedere in famiglia perché…</h3>
              <p>{f.perche}</p>
            </div>

            {f.canzoni.length > 0 && (
              <>
                <h2>Canzoni del film</h2>
                <div className="songs">
                  {f.canzoni.map((c, i) => (
                    <div key={i} className="song">
                      <div className="ic">♪</div>
                      <div className="info"><strong>{c.titolo}</strong><span>{c.artista}</span></div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2>Curiosità</h2>
            <p>{f.curiosita}</p>
          </div>

          <aside className="side">
            <div className="card">
              <h3>Scheda tecnica</h3>
              {f.scheda.map(([k, v], i) => (
                <div key={i} className="spec"><span className="k">{k}</span><span className="v">{v}</span></div>
              ))}
            </div>
            <div className="card">
              <h3>Cast principale</h3>
              {f.cast.map((c, i) => (
                <div key={i} className="cast-row"><span className="role">{c.ruolo}</span><span className="actor">{c.attore}</span></div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <section className="related">
        <div className="wrap">
          <h2>Se ti è piaciuto {f.titolo}…</h2>
          <p className="lead">Altre storie che scaldano il cuore, scelte per te.</p>
          <div className="rel-grid">
            {altri.map(a => (
              <Link key={a.slug} href={`/film/${a.slug}`} className="rel">
                <div className="p"><Poster imdb={a.imdb} titolo={a.titolo} /></div>
                <div className="b"><h3>{a.titolo}</h3><p>{a.categorie[0]}</p></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
