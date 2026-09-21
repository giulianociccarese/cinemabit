// Rubriche temporali. Ogni voce può avere un "imdb" per la locandina
// e un "link" verso la scheda se il film è nel catalogo.
export const rubriche = {
  'un-anno-fa': {
    titolo: 'Un anno fa al cinema',
    ico: '⏳',
    intro: '2025 — i film dai buoni sentimenti usciti dodici mesi fa, da riscoprire oggi in streaming o in DVD. Selezionati per la loro frequenza.',
    nota: 'I titoli si aggiorneranno automaticamente ogni mese: mostreranno sempre i film usciti esattamente un anno prima.',
    film: [
      { titolo: 'Inside Out 2', tag: 'Animazione · Pixar', imdb: 'tt22022452', testo: 'Il ritorno nel mondo delle emozioni di Riley, ora adolescente: arrivano Ansia e nuove emozioni. Educazione emotiva allo stato puro.', why: 'Insegna la consapevolezza delle emozioni, con delicatezza e profondità.' },
      { titolo: 'Gli eroi del Natale', tag: 'Animazione · Natale', imdb: 'tt4587656', link: '/film/gli-eroi-del-natale', testo: 'La Natività raccontata dagli animali che accompagnarono Maria e Giuseppe. Una favola gioiosa sul valore di ogni creatura.', why: 'Fede, speranza e i più piccoli protagonisti.' }
    ]
  },
  'dieci-anni-fa': {
    titolo: '10 anni fa al cinema',
    ico: '🎬',
    intro: '2015 — i titoli che hanno segnato un decennio e che, rivisti oggi con occhi nuovi, brillano ancora per i loro valori. Un tuffo nella memoria che fa bene.',
    nota: 'I titoli si aggiorneranno automaticamente ogni anno: mostreranno sempre i film usciti esattamente dieci anni prima.',
    film: [
      { titolo: 'Inside Out', tag: 'Animazione · Pixar', imdb: 'tt2096673', link: '/film/inside-out', testo: 'Il capolavoro Pixar sulle emozioni di Riley. Dieci anni dopo resta un punto di riferimento assoluto per parlare di sentimenti ai bambini.', why: 'Consapevolezza emotiva pura. Già nel nostro catalogo.' },
      { titolo: 'Quando c\'era Marnie', tag: 'Animazione · Studio Ghibli', imdb: 'tt3398268', link: '/film/quando-cera-marnie', testo: 'Delicato film Ghibli sull\'amicizia e la scoperta di sé di una ragazzina solitaria. Un racconto sulla guarigione interiore.', why: 'Guarigione, amicizia e pace interiore.' },
      { titolo: 'Il viaggio di Arlo', tag: 'Avventura · Pixar', imdb: 'tt1979388', testo: 'La Pixar racconta il legame tra un giovane dinosauro pauroso e un bambino. Una storia sul coraggio e il superare le proprie paure.', why: 'Coraggio e crescita, il superamento della paura.' }
    ]
  },
  'trenta-anni-fa': {
    titolo: '30 anni fa al cinema',
    ico: '📽️',
    intro: '1995 — i grandi classici senza tempo. Storie che i genitori hanno amato da ragazzi e che oggi possono far scoprire ai propri figli. Il cinema che non invecchia.',
    nota: 'I titoli si aggiorneranno automaticamente ogni anno: mostreranno sempre i film usciti esattamente trent\'anni prima.',
    film: [
      { titolo: 'Toy Story', tag: 'Animazione · Pixar', imdb: 'tt0114709', testo: 'Il primo film interamente in computer grafica della storia. L\'amicizia tra Woody e Buzz Lightyear insegna la lealtà e l\'accettazione dell\'altro.', why: 'Amicizia, lealtà e accettazione. Un classico per ogni generazione.' },
      { titolo: 'Babe, maialino coraggioso', tag: 'Famiglia · Avventura', imdb: 'tt0112431', testo: 'Un maialino gentile che sogna di diventare un cane da pastore, contro ogni pregiudizio. Una favola dolcissima sulla gentilezza.', why: 'La gentilezza che vince i pregiudizi, credere nei propri sogni.' },
      { titolo: 'I grandi maestri del cinema', tag: 'Formazione · Classico', imdb: 'tt0087538', link: '/film/karate-kid', testo: 'Gli anni \'80-\'90 ci hanno regalato figure di maestri indimenticabili, come Miyagi di Karate Kid: storie di crescita, disciplina e rispetto.', why: 'Il valore del mentore, la forza che nasce dall\'autocontrollo.' }
    ]
  }
};

export function getRubrica(periodo) {
  return rubriche[periodo];
}
export function getRubricaSlugs() {
  return Object.keys(rubriche);
}
