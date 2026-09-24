import Link from 'next/link';

export default function SiteHeader() {
  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="brand">Cinema<span>Bit</span></Link>
        <nav className="menu">
          <Link href="/">Home</Link>
          <Link href="/film">Film</Link>
          <Link href="/serie">Serie</Link>
          <Link href="/metodo">Il nostro metodo</Link>
          <Link href="/#community">Community</Link>
        </nav>
        <Link href="/#community" className="nav-cta">Unisciti</Link>
      </div>
    </header>
  );
}
