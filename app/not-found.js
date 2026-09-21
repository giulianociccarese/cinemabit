import Link from 'next/link';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <section className="page-head">
        <div className="wrap">
          <h1>Pagina non trovata</h1>
          <p>La pagina che cerchi non esiste o è stata spostata.</p>
          <div className="filters"><Link href="/" className="on">Torna alla home</Link><Link href="/film">Vedi i film</Link></div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
