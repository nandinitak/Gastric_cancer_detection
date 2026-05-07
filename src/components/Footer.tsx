import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
  'Medical Info': [
    { href: '/about', label: 'About Gastric Cancer' },
    { href: '/early-detection', label: 'Early Detection' },
    { href: '/diagnosis-staging', label: 'Diagnosis & Staging' },
    { href: '/prevention-treatment', label: 'Prevention & Treatment' },
  ],
  'Data & Research': [
    { href: '/epidemiology', label: 'Global Epidemiology' },
    { href: '/research-hub', label: 'Research Hub' },
    { href: '/resources', label: 'Resources & Datasets' },
    { href: '/symptom-checker', label: 'Symptom Checker' },
  ],
  'External Links': [
    { href: 'https://gco.iarc.fr/', label: 'GLOBOCAN / IARC' },
    { href: 'https://www.who.int/cancer', label: 'WHO Cancer Unit' },
    { href: 'https://main.icmr.nic.in/', label: 'ICMR India' },
    { href: 'https://pubmed.ncbi.nlm.nih.gov/', label: 'PubMed' },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <span>🔬</span>
              <span className={styles.logoText}>Gastric Cancer Hub</span>
            </div>
            <p className={styles.tagline}>
              A comprehensive medical research and awareness hub dedicated to gastric cancer.
              Built by researchers Badal Gupta &amp; Nandini Tak at Lovely Professional University.
            </p>
            <div className={styles.madeBy}>
              <span className={styles.madeByLabel}>Made by</span>
              <div className={styles.makers}>
                <Link href="/research-hub" className={styles.makerChip}>
                  👨‍💻 Badal Gupta
                </Link>
                <Link href="/research-hub" className={styles.makerChip}>
                  👩‍💻 Nandini Tak
                </Link>
              </div>
              <span className={styles.madeByInstitute}>B.Tech Final Sem · LPU</span>
            </div>
            <div className={styles.disclaimer}>
              ⚠️ For educational purposes only. Always consult a qualified medical professional.
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className={styles.linkGroup}>
              <h4 className={styles.groupTitle}>{section}</h4>
              <ul className={styles.linkList}>
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.footerLink} target={l.href.startsWith('http') ? '_blank' : undefined}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>© 2025 Gastric Cancer Hub — Made by <strong>Badal Gupta</strong> &amp; <strong>Nandini Tak</strong>, LPU</p>
          <p>Data Sources: GLOBOCAN 2024, ICMR, WHO, PubMed</p>
        </div>
      </div>
    </footer>
  );
}
