import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getSerie, getAllSerieSlugs } from '@/lib/serie';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Poster from '@/components/Poster';
import { amazonLink, streamingLink, isAffiliato } from '@/lib/affiliazione';

export function generateStaticParams() {
  return getAllSerieSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }) {
  const s = getSerie(params.slug);
  if (!s) return {};
  return {
    title: `${s.titolo} (${s.anno})`,
    description: `${s.titolo}: ${s.perche} Scopri dove vederla su CinemaBit.`,
    openGraph: {
      title: `${s.titolo} — CinemaBit`,
      description: s.tagline,
      type: 'video.tv_show'
    }
  };
}

export default function SeriePage({ params }) {
  const s = getSerie(params.slug);
  if (!s) notFound();

  return (
    <>
      <SiteHeader />
      <div className="crumb">
        <div className="wrap">
          <Link href="/">Home</Link> › <Link href="/serie">Serie</Link> › <strong>{s.titolo}</strong>
        </div>
      </div>

      <section className="film-hero">
        <div className="wrap">
          <div className="poster"><Poster imdb={s.imdb} titolo={s.titolo} /></div>
          <div className="fh-body">
            <h1>{s.titolo}</h1>
            <p className="meta">{s.anno} · {s.stagioni} · {s.genere} · di {s.creatore}</p>
            <p className="tagline">"{s.tagline}"</p>
            <div className="chips">
              {s.chips.map((c, i) => (
                <span key={i} className={'chip' + (i === 0 ? ' gold' : '')}>{c}</span>
              ))}
            </div>
            <div className="watch">
              {s.dove.map((d, i) => (
                <a key={i} href={streamingLink(d.nome, s.titolo)} target="_blank" rel={isAffiliato(d.nome) ? "sponsored noopener noreferrer" : "noopener noreferrer"}>▶ {d.nome}</a>
              ))}
              <a className="buy" href={amazonLink(s.titolo, s.anno)} target="_blank" rel="sponsored noopener noreferrer">🛒 DVD su Amazon</a>
            </div>
          </div>
        </div>
      </section>

      <div className="wrap">
        <div className="layout">
          <div className="content">
            <h2>La storia</h2>
            {s.storia.map((p, i) => <p key={i}>{p}</p>)}

            {s.frasi.length > 0 && (
              <>
                <h2>Frasi e messaggi</h2>
                <div className="frasi">
                  {s.frasi.map((fr, i) => (
                    <div key={i} className="frase">
                      <p>"{fr.testo}"</p>
                      <span className="who">{fr.chi}</span>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="freq">
              <div className="dial"><span>{s.frequenza}</span></div>
              <div className="txt">
                <strong>La frequenza di {s.titolo}</strong>
                <p>{s.frequenzaTesto}</p>
              </div>
            </div>

            <div className="why">
              <h3>Da vedere in famiglia perché…</h3>
              <p>{s.perche}</p>
            </div>

            {s.canzoni.length > 0 && (
              <>
                <h2>Musiche della serie</h2>
                <div className="songs">
                  {s.canzoni.map((c, i) => (
                    <div key={i} className="song">
                      <div className="ic">♪</div>
                      <div className="info"><strong>{c.titolo}</strong><span>{c.artista}</span></div>
                    </div>
                  ))}
                </div>
              </>
            )}

            <h2>Curiosità</h2>
            <p>{s.curiosita}</p>
          </div>

          <aside className="side">
            <div className="card">
              <h3>Scheda</h3>
              {s.scheda.map(([k, v], i) => (
                <div key={i} className="spec"><span className="k">{k}</span><span className="v">{v}</span></div>
              ))}
            </div>
            <div className="card">
              <h3>Cast principale</h3>
              {s.cast.map((c, i) => (
                <div key={i} className="cast-row"><span className="role">{c.ruolo}</span><span className="actor">{c.attore}</span></div>
              ))}
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </>
  );
}
