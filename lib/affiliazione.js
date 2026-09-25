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

// Genera il link giusto per ogni piattaforma di streaming.
// Prime Video usa il tag affiliato Amazon; le altre puntano alla loro ricerca.
export function streamingLink(piattaforma, titolo) {
  const t = encodeURIComponent(titolo);
  const nome = piattaforma.toLowerCase();
  if (nome.includes('prime')) {
    return `https://www.amazon.it/s?k=${encodeURIComponent(titolo)}&i=instant-video&tag=${AMAZON_TAG}`;
  }
  if (nome.includes('netflix')) return `https://www.netflix.com/search?q=${t}`;
  if (nome.includes('disney')) return `https://www.disneyplus.com/search?q=${t}`;
  if (nome.includes('now')) return `https://www.nowtv.it/`;
  // Fallback: ricerca generica su Google per "titolo + piattaforma"
  return `https://www.google.com/search?q=${t}+${encodeURIComponent(piattaforma)}+streaming`;
}

// Dice se un link di piattaforma è affiliato (per l'attributo rel corretto)
export function isAffiliato(piattaforma) {
  return piattaforma.toLowerCase().includes('prime');
}
