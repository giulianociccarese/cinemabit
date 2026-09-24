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
