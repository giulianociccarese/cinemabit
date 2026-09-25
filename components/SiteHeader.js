'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const chiudi = () => setOpen(false);

  return (
    <header>
      <div className="wrap nav">
        <Link href="/" className="brand" onClick={chiudi}>Cinema<span>Bit</span></Link>

        <button
          className="menu-toggle"
          aria-label="Apri il menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? '✕' : '☰'}
        </button>

        <nav className={'menu' + (open ? ' open' : '')}>
          <Link href="/" onClick={chiudi}>Home</Link>
          <Link href="/film" onClick={chiudi}>Film</Link>
          <Link href="/serie" onClick={chiudi}>Serie</Link>
          <Link href="/metodo" onClick={chiudi}>Il nostro metodo</Link>
          <Link href="/#community" onClick={chiudi}>Community</Link>
        </nav>

        <Link href="/#community" className="nav-cta" onClick={chiudi}>Unisciti</Link>
      </div>
    </header>
  );
}
