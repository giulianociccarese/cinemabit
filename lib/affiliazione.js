// ============================================================
//  CONFIGURAZIONE AFFILIAZIONE CINEMABIT
//  Cambia qui il tag Amazon: vale per tutto il sito.
// ============================================================

// Il tuo tag affiliato Amazon Associates (es. "cinemabit-21")
export const AMAZON_TAG = 'cinemabit-21';

// Costruisce un link di ricerca Amazon.it affiliato per un titolo.
// Cerca "<titolo> dvd" così l'utente trova DVD e Blu-ray.
export function amazonLink(titolo, anno) {
  const query = encodeURIComponent(`${titolo} ${anno || ''} dvd`.trim());
  return `https://www.amazon.it/s?k=${query}&tag=${AMAZON_TAG}`;
}
