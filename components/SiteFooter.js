import Link from 'next/link';

export default function SiteFooter() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot">
          <Link href="/" className="brand">Cinema<span style={{ color: 'var(--oro)' }}>Bit</span></Link>
          <nav className="foot-links">
            <Link href="/">Home</Link>
            <Link href="/film">Film</Link>
            <Link href="/serie">Serie</Link>
            <Link href="/privacy">Privacy e Cookie</Link>
            <Link href="/metodo">Il nostro metodo</Link>
            <Link href="/#community">Community</Link>
          </nav>
          <span>© 2026 CinemaBit</span>
        </div>
        <p className="aff-note">CinemaBit partecipa al Programma Affiliazione Amazon: alcuni link possono generare una commissione, senza costi aggiuntivi per te.</p>
      </div>
    </footer>
  );
}
