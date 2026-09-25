// Rubriche temporali: film reali usciti a settembre dell'anno indicato,
// selezionati per i valori CinemaBit. Se un titolo ha una scheda nel
// catalogo, la pagina aggancia il link automaticamente; altrimenti mostra
// solo il titolo. Da aggiornare a mano ogni anno con le nuove uscite.
import { films } from '@/lib/films';

const config = {
  'un-anno-fa': {
    titolo: 'Un anno fa al cinema',
    ico: '⏳',
    anno: 2024,
    intro: 'Settembre 2024 — i film dai buoni sentimenti usciti un anno fa nelle sale, da riscoprire oggi in streaming o in DVD.',
    slugs: ['inside-out-2', 'il-robot-selvaggio', 'transformers-one']
  },
  'dieci-anni-fa': {
    titolo: '10 anni fa al cinema',
    ico: '🎬',
    anno: 2015,
    intro: 'Settembre 2015 — i titoli che dieci anni fa arrivarono al cinema e che, rivisti oggi, brillano ancora per i loro valori.',
    slugs: ['il-piccolo-principe', 'shaun-vita-da-pecora', 'inside-out']
  },
  'trenta-anni-fa': {
    titolo: '30 anni fa al cinema',
    ico: '📽️',
    anno: 1995,
    intro: 'Settembre 1995 — i grandi classici senza tempo, storie che i genitori hanno amato da ragazzi e che oggi possono far scoprire ai figli.',
    slugs: ['pocahontas', 'babe-maialino-coraggioso', 'casper']
  }
};

export function getRubrica(periodo) {
  const c = config[periodo];
  if (!c) return null;
  const lista = c.slugs.map(slug => {
    const f = films.find(x => x.slug === slug);
    if (!f) return null;
    return {
      titolo: f.titolo,
      tag: `${f.anno} · ${f.genere}`,
      imdb: f.imdb,
      link: `/film/${f.slug}`,
      testo: f.tagline,
      why: f.perche
    };
  }).filter(Boolean);

  return {
    titolo: c.titolo,
    ico: c.ico,
    intro: c.intro,
    nota: `Rubrica curata: una selezione di film dai valori CinemaBit usciti a settembre ${c.anno}.`,
    film: lista
  };
}

export function getRubricaSlugs() {
  return Object.keys(config);
}
