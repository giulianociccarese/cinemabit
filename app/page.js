import Link from 'next/link';
import { films } from '@/lib/films';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Poster from '@/components/Poster';

const catBox = [
  { ico: '🎬', t: 'Film', d: 'Al cinema, in streaming, DVD e Blu-ray.' },
  { ico: '📺', t: 'Serie e telefilm', d: 'Storie lunghe da vivere in famiglia.' },
  { ico: '✨', t: 'Cartoni animati', d: 'Animazione classica e nuove tecnologie.' },
  { ico: '⚡', t: 'Supereroi positivi', d: 'Eroi che ispirano con l\'esempio.' },
  { ico: '★', t: 'Grandi classici', d: 'I capolavori che non invecchiano.' },
  { ico: '✝️', t: 'Valori e spirito', d: 'Fede, speranza e crescita interiore.' },
  { ico: '👨‍👩‍👧‍👦', t: 'Per la famiglia', d: 'Da guardare tutti insieme.' },
  { ico: '🗂️', t: 'Database film', d: 'Cerca, filtra e trova dove vedere.' }
];

export default function Home() {
  const evidenza = films.slice(0, 4);
  return (
    <>
      <SiteHeader />

      <section className="hero">
        <div className="wrap">
          <div className="hero-inner">
            <div className="moon" aria-hidden="true"></div>
            <span className="eyebrow">Il cinema dei buoni sentimenti</span>
            <h1>Belle storie che <span className="soft">fanno crescere</span>. Le trovi tutte qui.</h1>
            <p>Film, serie e cartoni dai messaggi positivi — per la famiglia, che emozionano e fanno bene. Dai grandi classici ai titoli di oggi. Scegliamo il cinema per quello che lascia dentro chi lo guarda.</p>
            <div className="hero-tags">
              <Link href="/film">Famiglia</Link>
              <Link href="/film">Animazione</Link>
              <Link href="/film">Valori</Link>
              <Link href="/film">Supereroi positivi</Link>
              <Link href="/film">Grandi classici</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="wrap">
          <p>Ogni bella storia lascia qualcosa di buono in chi la guarda.</p>
          <span className="dash" aria-hidden="true"></span>
          <br /><Link className="link" href="/metodo">Scopri come scegliamo i film →</Link>
        </div>
      </section>

      <section className="films-sec">
        <div className="wrap">
          <div className="sec-head row">
            <div>
              <h2>I film della settimana</h2>
              <p>La nostra selezione di storie positive. Ogni scheda ti dice dove vederle.</p>
            </div>
            <Link className="sec-link" href="/film">Vedi tutti i film →</Link>
          </div>
          <div className="films">
            {evidenza.map(f => (
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
        </div>
      </section>

      <section id="rubriche">
        <div className="wrap">
          <div className="sec-head"><h2>Le rubriche di CinemaBit</h2><p>Appuntamenti fissi per chi ama il cinema che fa bene.</p></div>
          <div className="rubriche">
            <Link href="/rubriche/un-anno-fa" className="rubrica"><span className="ico">⏳</span><h3>Un anno fa al cinema</h3><p>Cosa usciva 12 mesi fa e vale la pena riscoprire oggi.</p><span className="go">Scopri →</span></Link>
            <Link href="/rubriche/dieci-anni-fa" className="rubrica"><span className="ico">🎬</span><h3>10 anni fa al cinema</h3><p>I titoli che hanno segnato un decennio, rivisti con occhi nuovi.</p><span className="go">Scopri →</span></Link>
            <Link href="/rubriche/trenta-anni-fa" className="rubrica"><span className="ico">📽️</span><h3>30 anni fa al cinema</h3><p>I grandi classici senza tempo, da far conoscere ai più giovani.</p><span className="go">Scopri →</span></Link>
          </div>
        </div>
      </section>

      <section className="cats-sec">
        <div className="wrap">
          <div className="sec-head"><h2>Cosa trovi su CinemaBit</h2><p>Un mondo di storie positive, in ogni formato e per ogni schermo.</p></div>
          <div className="cats">
            {catBox.map((c, i) => (
              <Link key={i} href="/film" className="cat"><div className="ico">{c.ico}</div><h3>{c.t}</h3><p>{c.d}</p></Link>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="community">
        <div className="wrap">
          <div className="cbox">
            <div>
              <h2>Entra nella community di CinemaBit</h2>
              <p>Ogni settimana i film da vedere, i nuovi trailer e i consigli su misura. Il primo passo verso la nostra community.</p>
            </div>
            <div className="signup">
              <label htmlFor="email">Ricevi i consigli di visione</label>
              <div className="field">
                <input id="email" type="email" placeholder="La tua email" aria-label="La tua email" />
                <button type="button">Iscrivimi</button>
              </div>
              <p className="note">Niente spam. Solo buon cinema, quando conta.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
