import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Diagnosis & Staging — GastricCancer Portal',
  description: 'Complete guide to gastric cancer diagnosis: endoscopy, biopsy, CT scans, PET scans, and the TNM staging system explained.',
};

const diagnosticTests = [
  {
    name: 'Upper GI Endoscopy (EGD)',
    icon: '🔭',
    type: 'Primary',
    color: '#2d6bc4',
    desc: 'Gold standard for diagnosis. A flexible tube with a camera is passed through the mouth into the stomach. Allows direct visualization of lesions and biopsy collection.',
    indications: ['Persistent dyspepsia > 4 weeks', 'Unexplained weight loss', 'Dysphagia', 'GI bleeding'],
    sensitivity: '92%',
    specificity: '97%',
  },
  {
    name: 'Endoscopic Ultrasound (EUS)',
    icon: '📡',
    type: 'Staging',
    color: '#00b4d8',
    desc: 'Combines endoscopy with ultrasound imaging. Crucial for T-staging (tumor depth) and N-staging (lymph node assessment). Superior to CT for local staging.',
    indications: ['Pre-operative staging', 'Assess T and N stage', 'Evaluate resectability'],
    sensitivity: '85%',
    specificity: '90%',
  },
  {
    name: 'Biopsy & Histopathology',
    icon: '🔬',
    type: 'Definitive',
    color: '#06d6a0',
    desc: 'Multiple biopsies (≥6) taken during endoscopy for histological confirmation. WHO classification determines tumor grade, subtype, and molecular profile.',
    indications: ['Confirm malignancy', 'Determine histological type', 'Molecular profiling for treatment'],
    sensitivity: '98%',
    specificity: '99%',
  },
  {
    name: 'CT Scan (Chest/Abdomen/Pelvis)',
    icon: '💻',
    type: 'Staging',
    color: '#8b5cf6',
    desc: 'Standard imaging for M-staging (distant metastasis). Identifies liver metastases, peritoneal spread, and enlarged lymph nodes. Limitation: poor sensitivity for peritoneal carcinomatosis.',
    indications: ['M-staging', 'Surgical planning', 'Monitor treatment response'],
    sensitivity: '77%',
    specificity: '88%',
  },
  {
    name: 'PET/CT Scan',
    icon: '☢️',
    type: 'Advanced',
    color: '#f59e0b',
    desc: 'Functional imaging detecting metabolically active tissue. Useful for detecting occult metastases not visible on CT. Not used for all subtypes — diffuse type and mucinous cancers may be PET-negative.',
    indications: ['Occult metastases', 'Treatment response assessment', 'Recurrence detection'],
    sensitivity: '74%',
    specificity: '95%',
  },
  {
    name: 'Diagnostic Laparoscopy',
    icon: '🔑',
    type: 'Staging',
    color: '#ef4444',
    desc: 'Surgical staging procedure to rule out peritoneal metastases before planned curative surgery. Detects peritoneal disease missed by CT in 20–30% of cases. Peritoneal cytology performed.',
    indications: ['Locally advanced tumors', 'Pre-operative staging', 'Rule out peritoneal spread'],
    sensitivity: '96%',
    specificity: '98%',
  },
];

const tnmStages = [
  { t: 'T1a', n: 'N0', m: 'M0', stage: 'IA', survival: '>85%', color: '#06d6a0' },
  { t: 'T1b', n: 'N0', m: 'M0', stage: 'IB', survival: '72%', color: '#00b4d8' },
  { t: 'T2', n: 'N0', m: 'M0', stage: 'IB', survival: '65%', color: '#00b4d8' },
  { t: 'T3', n: 'N0', m: 'M0', stage: 'IIA', survival: '50%', color: '#3b82f6' },
  { t: 'T2', n: 'N2', m: 'M0', stage: 'IIB', survival: '33%', color: '#8b5cf6' },
  { t: 'T4a', n: 'N1', m: 'M0', stage: 'IIIA', survival: '22%', color: '#f59e0b' },
  { t: 'T4b', n: 'N2', m: 'M0', stage: 'IIIC', survival: '12%', color: '#f97316' },
  { t: 'Any T', n: 'Any N', m: 'M1', stage: 'IV', survival: '<6%', color: '#ef4444' },
];

export default function DiagnosisStagingPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">🏥 Diagnosis & Staging</div>
          <h1>How Gastric Cancer is Diagnosed & Staged</h1>
          <p>From initial suspicion to definitive staging — a complete guide to the diagnostic tools, biopsy procedures, and the TNM classification system used by oncologists worldwide.</p>
        </div>
      </div>

      {/* DIAGNOSTIC TOOLS */}
      <section className={`section ${styles.diagSection}`}>
        <div className="container">
          <span className="section-tag">🔬 Diagnostic Procedures</span>
          <h2 className="section-title">Diagnostic Tools & Tests</h2>
          <p className="section-subtitle">A hierarchical approach — starting with endoscopy and biopsy for confirmation, followed by staging investigations.</p>
          <div className="grid-2">
            {diagnosticTests.map((d) => (
              <div key={d.name} className={styles.diagCard} style={{ borderLeft: `3px solid ${d.color}` }}>
                <div className={styles.diagHeader}>
                  <span className={styles.diagIcon} style={{ background: `${d.color}22`, color: d.color }}>{d.icon}</span>
                  <div>
                    <h3 className={styles.diagName}>{d.name}</h3>
                    <span className={`badge ${d.type === 'Primary' ? 'badge-green' : d.type === 'Definitive' ? 'badge-blue' : d.type === 'Advanced' ? 'badge-amber' : 'badge-purple'}`}>{d.type}</span>
                  </div>
                </div>
                <p className={styles.diagDesc}>{d.desc}</p>
                <div className={styles.diagIndications}>
                  <strong>Indications:</strong>
                  <ul>{d.indications.map((i) => <li key={i}>{i}</li>)}</ul>
                </div>
                <div className={styles.diagMetrics}>
                  <div><span style={{ color: '#06d6a0' }}>{d.sensitivity}</span><label>Sensitivity</label></div>
                  <div><span style={{ color: '#00b4d8' }}>{d.specificity}</span><label>Specificity</label></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TNM */}
      <section className={`section ${styles.tnmSection}`}>
        <div className="container">
          <span className="section-tag">📊 TNM System</span>
          <h2 className="section-title">TNM Staging Classification</h2>
          <p className="section-subtitle">The AJCC/UICC TNM system is the universal language of cancer staging. It governs treatment decisions and predicts prognosis.</p>

          <div className={styles.tnmLegend}>
            <div className={styles.tnmDef}><strong style={{ color: '#ef4444' }}>T</strong> — Tumor depth (how far the tumor has grown into the stomach wall)</div>
            <div className={styles.tnmDef}><strong style={{ color: '#f59e0b' }}>N</strong> — Lymph Node involvement (how many regional nodes are affected)</div>
            <div className={styles.tnmDef}><strong style={{ color: '#8b5cf6' }}>M</strong> — Metastasis (whether cancer has spread to distant organs)</div>
          </div>

          <div className={styles.tnmTable}>
            <div className={styles.tnmHead}>
              <span>T (Tumor)</span>
              <span>N (Nodes)</span>
              <span>M (Mets)</span>
              <span>Stage</span>
              <span>5-Yr Survival</span>
            </div>
            {tnmStages.map((row, i) => (
              <div key={i} className={styles.tnmRow}>
                <span className={styles.tnmCell}>{row.t}</span>
                <span className={styles.tnmCell}>{row.n}</span>
                <span className={styles.tnmCell}>{row.m}</span>
                <span className={styles.tnmStage} style={{ color: row.color, background: `${row.color}18`, border: `1px solid ${row.color}44` }}>Stage {row.stage}</span>
                <span className={styles.tnmSurvival} style={{ color: row.color }}>{row.survival}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOLECULAR TESTING */}
      <section className={`section ${styles.molecularSection}`}>
        <div className="container">
          <span className="section-tag">🧬 Molecular Testing</span>
          <h2 className="section-title">Biomarker & Molecular Testing</h2>
          <p className="section-subtitle">Standard-of-care molecular tests that guide systemic therapy selection in gastric cancer.</p>
          <div className="grid-3">
            {[
              { name: 'HER2 (ERBB2)', method: 'IHC + FISH', result: '2+/3+ or FISH amplified', drug: 'Trastuzumab + chemotherapy (1st line)', icon: '🔑', color: '#ef4444' },
              { name: 'PD-L1 (CPS Score)', method: 'IHC', result: 'CPS ≥ 1 or CPS ≥ 5', drug: 'Nivolumab / Pembrolizumab', icon: '🛡️', color: '#00b4d8' },
              { name: 'MSI / MMR', method: 'PCR or IHC', result: 'MSI-H or dMMR', drug: 'Pembrolizumab (MSI-H)', icon: '🧩', color: '#8b5cf6' },
              { name: 'VEGFR-2', method: 'Assumed positive', result: 'Advanced GC', drug: 'Ramucirumab (2nd line)', icon: '🌊', color: '#06d6a0' },
              { name: 'FGFR2', method: 'NGS / FISH', result: 'Amplification', drug: 'Bemarituzumab (investigational)', icon: '📡', color: '#f59e0b' },
              { name: 'EBV Status', method: 'EBER ISH', result: 'EBV-positive', drug: 'High PD-L1 response — immunotherapy responsive', icon: '🦠', color: '#f97316' },
            ].map((t) => (
              <div key={t.name} className="card" style={{ borderLeft: `3px solid ${t.color}` }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '1.5rem' }}>{t.icon}</span>
                  <h4 style={{ color: t.color, fontFamily: 'var(--font-sans)' }}>{t.name}</h4>
                </div>
                <p style={{ fontSize: '0.82rem', marginBottom: '0.5rem' }}>Method: <strong style={{ color: 'var(--text-primary)' }}>{t.method}</strong></p>
                <p style={{ fontSize: '0.82rem', marginBottom: '0.5rem' }}>Positive Result: <strong style={{ color: 'var(--text-primary)' }}>{t.result}</strong></p>
                <p style={{ fontSize: '0.85rem', color: 'var(--teal-primary)', marginTop: '0.5rem' }}>→ {t.drug}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
