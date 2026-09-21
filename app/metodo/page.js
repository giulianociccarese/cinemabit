import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export const metadata = {
  title: 'Il nostro metodo',
  description: 'Come CinemaBit sceglie i film: per la loro frequenza, l\'energia e ciò che lasciano dentro chi li guarda.'
};

export default function Metodo() {
  return (
    <>
      <SiteHeader />
      <section className="page-head">
        <div className="wrap" style={{ maxWidth: 720 }}>
          <span className="eyebrow" style={{ color: 'var(--oro-soft)' }}>Il nostro metodo</span>
          <h1>Non tutti i film ti lasciano uguale</h1>
          <p>C'è un cinema che ti apre e uno che ti chiude. Noi scegliamo il primo — e ti aiutiamo a riconoscerlo.</p>
        </div>
      </section>
      <div className="man-body">
        <p>Ogni storia che guardi entra in te. Le immagini, i suoni, le emozioni di un film non scivolano via: lasciano una traccia, cambiano — anche solo un poco — come ti senti e come guardi il mondo dopo.</p>
        <div className="pull">"Ciò che consumi, ti consuma."</div>
        <p>Da questa idea semplice nasce CinemaBit. Non catalogiamo tutti i film esistenti: <strong>scegliamo</strong> quelli che fanno bene a chi li guarda. Li scegliamo per la loro <em>frequenza</em> — l'energia, il tono, ciò che lasciano dentro.</p>
        <h2>Come scegliamo un film</h2>
        <div className="man-steps">
          <div className="man-step"><div className="n">01</div><h4>Cosa racconta</h4><p>Una storia che parla di gentilezza, coraggio, speranza — non di cinismo o violenza fine a sé stessa.</p></div>
          <div className="man-step"><div className="n">02</div><h4>Come ti lascia</h4><p>Dopo la visione ti senti più aperto, più presente, più vicino agli altri. Non svuotato.</p></div>
          <div className="man-step"><div className="n">03</div><h4>Per chi è</h4><p>Storie che una famiglia può vivere insieme, con qualcosa di buono di cui parlare dopo.</p></div>
        </div>
        <h2>La frequenza, spiegata semplice</h2>
        <p>Su ogni scheda film trovi un indicatore di <strong>frequenza</strong>: è il nostro modo di dirti quanto quel film eleva. Non è un voto sulla qualità tecnica — quella la trovi ovunque. È qualcosa di più personale: quanto quel film <em>ti fa bene</em>. È il cuore di CinemaBit, e non lo trovi da nessun'altra parte.</p>
        <p style={{ marginTop: 30 }}><Link href="/film" className="sec-link">Sfoglia i film selezionati →</Link></p>
      </div>
      <SiteFooter />
    </>
  );
}
