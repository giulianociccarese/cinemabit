// Rubriche temporali DINAMICHE.
// Ogni rubrica calcola l'anno target dalla data odierna (anno corrente - scarto)
// e pesca dal catalogo i film più vicini a quell'anno. Si aggiornano da sole.
import { films } from '@/lib/films';

const config = {
  'un-anno-fa':     { titolo: 'Un anno fa al cinema',   ico: '⏳', scarto: 1 },
  'dieci-anni-fa':  { titolo: '10 anni fa al cinema',   ico: '🎬', scarto: 10 },
  'trenta-anni-fa': { titolo: '30 anni fa al cinema',   ico: '📽️', scarto: 30 }
};

// Restituisce i film del catalogo più vicini all'anno target, max n.
function filmVicini(annoTarget, n = 4) {
  return [...films]
    .map(f => ({ f, dist: Math.abs(f.anno - annoTarget) }))
    .sort((a, b) => a.dist - b.dist)
    .slice(0, n)
    .map(x => x.f);
}

export function getRubrica(periodo) {
  const c = config[periodo];
  if (!c) return null;
  const annoCorrente = new Date().getFullYear();
  const annoTarget = annoCorrente - c.scarto;
  const selezione = filmVicini(annoTarget, 4);

  return {
    titolo: c.titolo,
    ico: c.ico,
    annoTarget,
    intro: `${annoTarget} — i film dai buoni sentimenti di quell'epoca, selezionati dal catalogo di CinemaBit per la loro frequenza. La selezione si aggiorna da sola con il passare del tempo.`,
    nota: `Questa rubrica è dinamica: l'anno di riferimento (${annoTarget}) si aggiorna automaticamente e mostra i film del catalogo più vicini a quel periodo.`,
    film: selezione.map(f => ({
      titolo: f.titolo,
      tag: `${f.anno} · ${f.genere}`,
      imdb: f.imdb,
      link: `/film/${f.slug}`,
      testo: f.tagline,
      why: f.perche
    }))
  };
}

export function getRubricaSlugs() {
  return Object.keys(config);
}
