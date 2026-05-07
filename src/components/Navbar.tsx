'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useSession, signOut } from 'next-auth/react';
import styles from './Navbar.module.css';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About GC' },
  { href: '/epidemiology', label: 'Epidemiology' },
  { href: '/early-detection', label: 'Early Detection' },
  { href: '/diagnosis-staging', label: 'Diagnosis' },
  { href: '/prevention-treatment', label: 'Treatment' },
  { href: '/symptom-checker', label: 'Symptom Checker' },
  { href: '/research-hub', label: 'Research Hub' },
  { href: '/resources', label: 'Resources' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { data: session } = useSession();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoIcon}>🔬</span>
          <span className={styles.logoText}>
            <span className={styles.logoMain}>Gastric Cancer</span>
            <span className={styles.logoSub}>Hub</span>
          </span>
        </Link>

        <ul className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`${styles.link} ${pathname === l.href ? styles.active : ''}`}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            {session ? (
              <button onClick={() => signOut({ callbackUrl: '/' })} className={styles.adminBtn}>Sign Out</button>
            ) : (
              <Link href="/admin" className={styles.adminBtn}>Admin</Link>
            )}
          </li>
        </ul>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen1 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen2 : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barOpen3 : ''}`} />
        </button>
      </div>
    </nav>
  );
}
