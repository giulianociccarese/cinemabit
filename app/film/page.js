import { films, categorie } from '@/lib/films';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import Catalogo from '@/components/Catalogo';

export const metadata = {
  title: 'Database film',
  description: 'Il database di CinemaBit: cerca per titolo, tema o valore, filtra per categoria e scopri dove vedere ogni film dai buoni sentimenti.'
};

export default function CatalogoPage() {
  return (
    <>
      <SiteHeader />
      <Catalogo films={films} categorie={categorie} />
      <SiteFooter />
    </>
  );
}
