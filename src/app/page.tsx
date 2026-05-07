'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function StatCard({ value, label, suffix, color, delay }: { value: number; label: string; suffix: string; color: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(value, 2200, visible);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.statCard} style={{ animationDelay: `${delay}ms`, borderColor: `${color}33` }}>
      <div className={styles.statValue} style={{ color }}>{count.toLocaleString()}{suffix}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

const quickLinks = [
  { href: '/about', icon: '🧬', title: 'What is Gastric Cancer?', desc: 'Pathophysiology, types, cellular mechanisms and H. pylori connection.', color: '#2d6bc4' },
  { href: '/epidemiology', icon: '🌍', title: 'Global & India Data', desc: 'Interactive charts of worldwide incidence, mortality trends and state-wise India data.', color: '#00b4d8' },
  { href: '/early-detection', icon: '🔍', title: 'Early Detection', desc: 'Recognize symptoms early, understand risk factors and screening protocols.', color: '#06d6a0' },
  { href: '/diagnosis-staging', icon: '🏥', title: 'Diagnosis & Staging', desc: 'Endoscopy, biopsy, TNM staging explained with survival rate charts.', color: '#8b5cf6' },
  { href: '/prevention-treatment', icon: '💊', title: 'Prevention & Treatment', desc: 'Evidence-based prevention, surgery, immunotherapy and targeted therapy.', color: '#f59e0b' },
  { href: '/symptom-checker', icon: '🩺', title: 'Symptom Checker', desc: 'Interactive risk assessment quiz — know your symptoms and risk level.', color: '#ef4444' },
  { href: '/research-hub', icon: '📄', title: 'Research Hub', desc: 'LPU research papers, patents, and predictive ML models.', color: '#06d6a0' },
  { href: '/resources', icon: '📚', title: 'Resources', desc: 'Searchable library of datasets, guidelines, and downloadable PDFs.', color: '#00b4d8' },
];

const riskFactors = [
  { icon: '🦠', name: 'H. pylori Infection', risk: 'Very High', pct: 89 },
  { icon: '🧂', name: 'High Salt Diet', risk: 'High', pct: 72 },
  { icon: '🚬', name: 'Smoking', risk: 'High', pct: 68 },
  { icon: '🧬', name: 'Genetic Syndromes', risk: 'Moderate', pct: 45 },
  { icon: '🍺', name: 'Alcohol Consumption', risk: 'Moderate', pct: 38 },
  { icon: '⚖️', name: 'Obesity / BMI', risk: 'Moderate', pct: 35 },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.orb1} />
          <div className={styles.orb2} />
          <div className={styles.orb3} />
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>
            <span>🔬</span> Global Gastric Cancer Research & Awareness Portal
          </div>
          <h1 className={styles.heroTitle}>
            Fighting Gastric Cancer with{' '}
            <span className="gradient-text">Knowledge, Data & Innovation</span>
          </h1>
          <p className={styles.heroDesc}>
            The 5th most common cancer worldwide. Over <strong>1 million new cases</strong> every year.
            Early detection can increase survival rate from <strong>6% to 68%</strong>. This portal brings together
            global epidemiology, cutting-edge research, and AI-driven tools to make a difference.
          </p>
          <div className={styles.heroCtas}>
            <Link href="/symptom-checker" className="btn btn-teal">
              🩺 Check Your Symptoms
            </Link>
            <Link href="/research-hub" className="btn btn-outline">
              📄 View Our Research
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className={styles.statsSection}>
        <div className="container">
          <div className={styles.statsGrid}>
            <StatCard value={1089} label="New Cases Per Year (thousands)" suffix="K+" color="#ef4444" delay={0} />
            <StatCard value={768} label="Deaths Per Year (thousands)" suffix="K+" color="#f59e0b" delay={100} />
            <StatCard value={68} label="Early-Stage 5-Year Survival" suffix="%" color="#06d6a0" delay={200} />
            <StatCard value={57394} label="New Cases in India (2024)" suffix="" color="#00b4d8" delay={300} />
          </div>
        </div>
      </section>

      {/* QUICK NAV */}
      <section className={`section ${styles.quickNav}`}>
        <div className="container">
          <span className="section-tag">📋 Navigate the Portal</span>
          <h2 className="section-title">Everything You Need to Know</h2>
          <p className="section-subtitle">
            From basic science to advanced clinical data — explore every facet of gastric cancer research and awareness.
          </p>
          <div className={styles.quickGrid}>
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href} className={styles.quickCard}>
                <div className={styles.quickIcon} style={{ background: `${item.color}22`, color: item.color }}>
                  {item.icon}
                </div>
                <h3 className={styles.quickTitle}>{item.title}</h3>
                <p className={styles.quickDesc}>{item.desc}</p>
                <span className={styles.quickArrow} style={{ color: item.color }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* RISK FACTORS PREVIEW */}
      <section className={`section ${styles.riskSection}`}>
        <div className="container">
          <div className={styles.riskInner}>
            <div className={styles.riskLeft}>
              <span className="section-tag">⚠️ Risk Factors</span>
              <h2>Know What Increases Your Risk</h2>
              <p>
                Gastric cancer development is strongly linked to environmental, dietary, and genetic factors.
                Understanding these risks is the first step toward prevention.
              </p>
              <Link href="/early-detection" className="btn btn-teal" style={{ marginTop: '1.5rem' }}>
                Learn More About Risk Factors →
              </Link>
            </div>
            <div className={styles.riskRight}>
              {riskFactors.map((rf, i) => (
                <div key={i} className={styles.riskItem}>
                  <div className={styles.riskTop}>
                    <span className={styles.riskIcon}>{rf.icon}</span>
                    <span className={styles.riskName}>{rf.name}</span>
                    <span className={`badge ${rf.pct > 70 ? 'badge-red' : rf.pct > 50 ? 'badge-amber' : 'badge-blue'}`}>
                      {rf.risk}
                    </span>
                  </div>
                  <div className={styles.riskBar}>
                    <div className={styles.riskFill} style={{ width: `${rf.pct}%`, opacity: rf.pct / 100 * 0.5 + 0.5 }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALERT BANNER */}
      <section className={styles.alertBanner}>
        <div className="container">
          <div className={styles.alertInner}>
            <div className={styles.alertIcon}>🚨</div>
            <div className={styles.alertText}>
              <strong>Early Detection Saves Lives</strong>
              <p>70% of gastric cancer cases are diagnosed at Stage III or IV — when survival rates drop below 20%. Use our Symptom Checker to assess your risk today.</p>
            </div>
            <Link href="/symptom-checker" className="btn btn-primary" style={{ flexShrink: 0 }}>
              Take the Quiz →
            </Link>
          </div>
        </div>
      </section>

      {/* LPU RESEARCH TEASER */}
      <section className={`section ${styles.researchTeaser}`}>
        <div className="container">
          <div className={styles.teaserGrid}>
            <div>
              <span className="section-tag">🎓 LPU Research</span>
              <h2>Innovation by Badal & Nandini</h2>
              <p>
                Final semester researchers at Lovely Professional University, we are dedicated to advancing gastric cancer detection and prevention through machine learning, clinical data analysis, and novel biomarker research.
              </p>
              <div className={styles.teaserStats}>
                <div className={styles.teaserStat}><span>3</span><label>Research Papers</label></div>
                <div className={styles.teaserStat}><span>2</span><label>Patent Filings</label></div>
                <div className={styles.teaserStat}><span>3</span><label>ML Models</label></div>
              </div>
              <Link href="/research-hub" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                View Research Hub →
              </Link>
            </div>
            <div className={styles.teaserCards}>
              <div className="card">
                <div className="badge badge-green" style={{ marginBottom: '0.75rem' }}>94.3% Accuracy</div>
                <h4>GastricNet-v2</h4>
                <p style={{ fontSize: '0.88rem', marginTop: '0.5rem' }}>CNN model for endoscopic image classification — detecting gastric lesions in real-time.</p>
              </div>
              <div className="card">
                <div className="badge badge-blue" style={{ marginBottom: '0.75rem' }}>Patent Filed</div>
                <h4>AI Detection System</h4>
                <p style={{ fontSize: '0.88rem', marginTop: '0.5rem' }}>AI-powered endoscopic image analysis system — Filed as IN202411045892.</p>
              </div>
              <div className="card">
                <div className="badge badge-amber" style={{ marginBottom: '0.75rem' }}>Published 2024</div>
                <h4>Early Detection Paper</h4>
                <p style={{ fontSize: '0.88rem', marginTop: '0.5rem' }}>ML-Based analysis of endoscopic images for early gastric cancer detection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
