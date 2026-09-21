import { films } from '@/lib/films';
import { getRubricaSlugs } from '@/lib/rubriche';

export default function sitemap() {
  const base = 'https://www.cinemabit.com';
  const statiche = ['', '/film', '/metodo'].map(p => ({ url: base + p, lastModified: new Date() }));
  const schede = films.map(f => ({ url: `${base}/film/${f.slug}`, lastModified: new Date() }));
  const rub = getRubricaSlugs().map(s => ({ url: `${base}/rubriche/${s}`, lastModified: new Date() }));
  return [...statiche, ...schede, ...rub];
}
