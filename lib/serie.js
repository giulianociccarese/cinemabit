// ============================================================
//  DATABASE SERIE TV DI CINEMABIT
//  Struttura pensata per le serie: stagioni, episodi, cast ricorrente.
//  Lo "slug" diventa l'indirizzo: /serie/<slug>
// ============================================================

export const serie = [
  {
    slug: 'the-chosen',
    titolo: 'The Chosen',
    anno: 2017,
    stagioni: '4 stagioni (in corso)',
    genere: 'Drammatico / Storico-religioso',
    creatore: 'Dallas Jenkins',
    imdb: 'tt5622316',
    colore: 'chosen',
    categorie: ['Valori e spirito', 'Buoni sentimenti', 'Famiglia'],
    frequenza: 'Molto alta',
    tagline: 'La storia più grande di sempre, raccontata attraverso gli occhi di chi Lo ha incontrato.',
    chips: ['Valori cristiani', 'Fede', 'Serie TV', 'Basata sui Vangeli'],
    dove: [
      { nome: 'The Chosen App', tipo: 'streaming gratuito' },
      { nome: 'Prime Video', tipo: 'streaming' }
    ],
    storia: [
      'The Chosen è la prima serie televisiva mai realizzata sulla vita di Gesù di Nazareth, raccontata in modo innovativo: non dal punto di vista di Gesù stesso, ma attraverso gli occhi delle persone che Lo hanno incontrato e la cui vita è stata trasformata dall\'incontro con Lui — i discepoli, Maria Maddalena, Nicodemo, Matteo il pubblicano.',
      'Prodotta grazie al più grande crowdfunding della storia dell\'intrattenimento (finanziata direttamente dagli spettatori), la serie unisce rigore storico e profondità emotiva. Ogni personaggio è tratteggiato con umanità e realismo, rendendo i racconti dei Vangeli vivi, vicini e accessibili a credenti e non. Un fenomeno mondiale che ha commosso milioni di famiglie.'
    ],
    frasi: [
      { testo: 'Abituati a scenari differenti.', chi: 'Gesù' },
      { testo: 'Io ero cieco, e ora ci vedo.', chi: 'Un guarito' }
    ],
    canzoni: [
      { titolo: 'The Chosen (Main Theme)', artista: 'Dan Haseltine & Matt Nelson' },
      { titolo: 'Walk On The Water', artista: 'dalla colonna sonora' }
    ],
    frequenzaTesto: 'Una serie che eleva lo spirito e riunisce la famiglia: dopo ogni episodio ci si sente più vicini, più speranzosi.',
    perche: 'Racconta i Vangeli in modo autentico e umano, adatto a tutta la famiglia. Avvicina i più giovani alla fede senza forzature, e commuove gli adulti riscoprendo storie note sotto una luce nuova. Un raro esempio di intrattenimento di qualità e valori insieme.',
    curiosita: 'The Chosen ha stabilito il record del più grande progetto di crowdfunding per un film o serie mai realizzato. È distribuita gratuitamente attraverso la sua app, secondo la volontà del creatore Dallas Jenkins di renderla accessibile a chiunque nel mondo.',
    cast: [
      { ruolo: 'Gesù', attore: 'Jonathan Roumie' },
      { ruolo: 'Simon Pietro', attore: 'Shahar Isaac' },
      { ruolo: 'Maria Maddalena', attore: 'Elizabeth Tabish' },
      { ruolo: 'Matteo', attore: 'Paras Patel' }
    ],
    scheda: [
      ['Creatore', 'Dallas Jenkins'],
      ['Prima stagione', '2019'],
      ['Stagioni', '4 (in corso)'],
      ['Genere', 'Drammatico / Religioso'],
      ['Distribuzione', 'App gratuita + streaming']
    ]
  },
  {
    slug: "superbook",
    titolo: "Superbook",
    anno: 2011,
    stagioni: "5 stagioni",
    genere: "Animazione / Famiglia",
    creatore: "CBN (Christian Broadcasting Network)",
    imdb: "tt1740717",
    colore: "superbook",
    categorie: ["Valori e spirito", "Buoni sentimenti", "Famiglia"],
    frequenza: "Molto alta",
    tagline: "Un libro straordinario che porta i bambini dentro le più grandi storie della Bibbia.",
    chips: ["Valori cristiani", "Bibbia per bambini", "Animazione", "Serie TV"],
    dove: [
      { nome: "Superbook App", tipo: "streaming gratuito" },
      { nome: "YouTube", tipo: "streaming" }
    ],
    storia: [
      "Superbook racconta le avventure di Chris, della sua amica Joy e del robot Gizmo, che grazie a un libro magico — il Superbook — vengono trasportati indietro nel tempo per vivere in prima persona le grandi storie della Bibbia: da Noè a Davide, da Giona a Gesù.",
      "Ad ogni viaggio, i protagonisti imparano una lezione di vita che li aiuta ad affrontare i loro problemi quotidiani. Con animazione moderna in 3D e un tono avventuroso, Superbook rende i racconti biblici vivi, comprensibili e coinvolgenti per i più piccoli, unendo divertimento e valori."
    ],
    frasi: [
      { testo: "Non aver paura, perché Dio è sempre con te.", chi: "Il messaggio ricorrente" }
    ],
    canzoni: [
      { titolo: "Superbook Theme Song", artista: "sigla della serie" }
    ],
    frequenzaTesto: "Una serie che educa e rassicura i bambini: dopo ogni episodio hanno imparato qualcosa di buono, con il sorriso.",
    perche: "È il modo ideale per avvicinare i bambini alle storie della Bibbia: avventurose, colorate e con una morale chiara. Ogni episodio collega un racconto biblico a una situazione reale che i piccoli vivono, rendendo i valori concreti e vicini.",
    curiosita: "Superbook nasce come serie animata giapponese negli anni ottanta, poi rilanciata nel 2011 dalla CBN con animazione 3D moderna. È tradotta in decine di lingue e distribuita gratuitamente in tutto il mondo attraverso la sua app.",
    cast: [
      { ruolo: "Chris", attore: "protagonista" },
      { ruolo: "Joy", attore: "amica di Chris" },
      { ruolo: "Gizmo", attore: "il robot" }
    ],
    scheda: [
      ["Produzione", "CBN"],
      ["Reboot", "2011"],
      ["Stagioni", "5"],
      ["Genere", "Animazione / Famiglia"],
      ["Distribuzione", "App gratuita + YouTube"]
    ]
  }
];

// Categorie per i filtri del catalogo serie
export const categorieSerie = ['Tutti', 'Valori e spirito', 'Buoni sentimenti', 'Famiglia'];

// Funzioni di comodo
export function getSerie(slug) {
  return serie.find(s => s.slug === slug);
}
export function getAllSerieSlugs() {
  return serie.map(s => s.slug);
}
