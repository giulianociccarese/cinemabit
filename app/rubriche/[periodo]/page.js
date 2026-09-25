import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getRubrica, getRubricaSlugs } from '@/lib/rubriche';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Poster from '@/components/Poster';

export const revalidate = 86400; // ricalcola la data ogni 24 ore

export function generateStaticParams() {
  return getRubricaSlugs().map(periodo => ({ periodo }));
}

export function generateMetadata({ params }) {
  const r = getRubrica(params.periodo);
  if (!r) return {};
  return { title: r.titolo, description: r.intro };
}

export default function RubricaPage({ params }) {
  const r = getRubrica(params.periodo);
  if (!r) notFound();

  return (
    <>
      <SiteHeader />
      <div className="crumb">
        <div className="wrap"><Link href="/">Home</Link> › <Link href="/#rubriche">Rubriche</Link> › <strong>{r.titolo}</strong></div>
      </div>
      <section className="page-head">
        <div className="wrap">
          <h1>{r.ico} {r.titolo}</h1>
          <p>{r.intro}</p>
        </div>
      </section>
      <div className="wrap" style={{ padding: '52px 0' }}>
        <div className="listfilm">
          {r.film.map((f, i) => {
            const inner = (
              <>
                <div className="lf-poster"><Poster imdb={f.imdb} titolo={f.titolo} /></div>
                <div className="lf-body">
                  <span className="lf-tag">{f.tag}</span>
                  <h3>{f.titolo}</h3>
                  <p>{f.testo}</p>
                  <span className="lf-why">✦ Perché è CinemaBit: {f.why}{f.link ? ' → apri la scheda.' : ''}</span>
                </div>
              </>
            );
            return f.link
              ? <Link key={i} href={f.link} className="lf" style={{ cursor: 'pointer' }}>{inner}</Link>
              : <article key={i} className="lf">{inner}</article>;
          })}
        </div>
        <p className="listnote">{r.nota} Le schede complete arriveranno man mano.</p>
      </div>
      <SiteFooter />
    </>
  );
}
