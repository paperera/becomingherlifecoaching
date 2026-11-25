import { useState, type ReactNode } from 'react';
import { Link, useLocation } from 'wouter';
import { ArrowRight, Menu, X } from 'lucide-react';

const pages = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Melanie' },
  { href: '/coaching', label: 'Coaching' },
  { href: '/faq', label: 'Questions' },
  { href: '/contact', label: 'Contact' },
];

export function SiteShell({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const closeMenu = () => setMenuOpen(false);
  return (
    <div className="site">
      <div className="announcement">A space for your next chapter · Becoming Her Life Coaching</div>
      <header className="header">
        <Link href="/" className="brand" aria-label="Becoming Her Life Coaching home" onClick={closeMenu} data-testid="link-brand-home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span className="brand-name">Becoming Her<small>with Melanie Abney</small></span>
        </Link>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)} data-testid="button-menu-toggle">
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={`nav${menuOpen ? ' open' : ''}`} id="main-navigation" aria-label="Main navigation">
          {pages.map((page) => <Link key={page.href} href={page.href} onClick={closeMenu} aria-current={location === page.href ? 'page' : undefined} data-testid={`link-nav-${page.href === '/' ? 'home' : page.href.slice(1)}`}>{page.label}</Link>)}
          <Link href="/contact" className="nav-cta" onClick={closeMenu} data-testid="link-nav-contact-cta">Find your next step <ArrowRight size={14} /></Link>
        </nav>
      </header>
      {children}
      <footer className="footer">
        <Link href="/" className="brand" aria-label="Becoming Her Life Coaching home" data-testid="link-footer-home">
          <span className="brand-mark" aria-hidden="true">B</span>
          <span className="brand-name">Becoming Her<small>with Melanie Abney</small></span>
        </Link>
        <span className="footer-copy">A thoughtful space for women considering what comes next.</span>
        <Link className="footer-top" href="/" data-testid="link-footer-top">Back to the beginning</Link>
      </footer>
      <span className="sr-only" aria-live="polite">{menuOpen ? 'Navigation menu open' : ''}</span>
    </div>
  );
}
