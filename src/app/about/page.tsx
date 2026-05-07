import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'About Gastric Cancer — GastricCancer Portal',
  description: 'Understand what gastric cancer is — its types, pathophysiology, molecular mechanisms, H. pylori connection, and how it develops in the human stomach.',
};

const types = [
  {
    name: 'Adenocarcinoma',
    pct: '90–95%',
    icon: '🔬',
    color: '#ef4444',
    desc: 'The most common type. Originates from the glandular cells lining the stomach. Divided into intestinal-type (associated with H. pylori and environmental factors) and diffuse-type (more aggressive, genetic basis).',
  },
  {
    name: 'Gastrointestinal Stromal Tumor (GIST)',
    pct: '1–3%',
    icon: '🧬',
    color: '#f59e0b',
    desc: 'Arises from the interstitial cells of Cajal. Driven by KIT or PDGFRA mutations. Responds to targeted therapy (imatinib). Can range from benign to malignant.',
  },
  {
    name: 'Gastric Lymphoma (MALT)',
    pct: '1–5%',
    icon: '💧',
    color: '#8b5cf6',
    desc: 'Mucosa-associated lymphoid tissue (MALT) lymphoma. Strongly linked to H. pylori infection. Early-stage MALT lymphoma can regress with H. pylori eradication alone.',
  },
  {
    name: 'Carcinoid / Neuroendocrine',
    pct: '< 1%',
    icon: '⚡',
    color: '#00b4d8',
    desc: 'Develops from hormone-producing cells. Three types: Type I (associated with autoimmune gastritis), Type II (with Zollinger-Ellison syndrome), and Type III (sporadic, more aggressive).',
  },
];

const stages = [
  { stage: 'Stage 0', desc: 'Cancer cells in inner lining only (carcinoma in situ). Highest curability.', survival: '> 90%', color: '#06d6a0' },
  { stage: 'Stage I', desc: 'Tumor penetrates inner stomach layers. May involve nearby lymph nodes.', survival: '57–71%', color: '#00b4d8' },
  { stage: 'Stage II', desc: 'Tumor in muscle layer with more lymph node involvement.', survival: '33%', color: '#f59e0b' },
  { stage: 'Stage III', desc: 'Tumor spread to outer stomach wall and many lymph nodes.', survival: '18%', color: '#f97316' },
  { stage: 'Stage IV', desc: 'Metastatic cancer — spread to liver, lungs, peritoneum or distant organs.', survival: '< 6%', color: '#ef4444' },
];

const molecularPathways = [
  { name: 'HER2 Amplification', frequency: '10–30%', drug: 'Trastuzumab', icon: '🔑' },
  { name: 'PD-L1 Overexpression', frequency: '40–60%', drug: 'Nivolumab / Pembrolizumab', icon: '🛡️' },
  { name: 'MSI-High', frequency: '5–10%', drug: 'Checkpoint Inhibitors', icon: '🧩' },
  { name: 'FGFR2 Amplification', frequency: '5–10%', drug: 'Bemarituzumab', icon: '📡' },
  { name: 'MET Amplification', frequency: '2–10%', drug: 'Telisotuzumab', icon: '⚙️' },
  { name: 'VEGFR2', frequency: 'Expressed', drug: 'Ramucirumab', icon: '🌊' },
];

export default function AboutPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">🧬 Medical Knowledge Base</div>
          <h1>What is Gastric Cancer?</h1>
          <p>A comprehensive overview of gastric (stomach) cancer — from basic biology to molecular pathways, types, staging, and the H. pylori connection.</p>
        </div>
      </div>

      {/* DEFINITION */}
      <section className={`section ${styles.definition}`}>
        <div className="container">
          <div className={styles.defGrid}>
            <div className={styles.defText}>
              <span className="section-tag">📖 Definition</span>
              <h2>Understanding Stomach Cancer</h2>
              <p>
                <strong>Gastric cancer</strong>, also known as stomach cancer, is a malignancy that originates in the cells
                lining the stomach. The stomach is a muscular, J-shaped organ in the upper abdomen that breaks
                down food. Cancer can develop in any part of the stomach, though most cases (about 80%) arise in the
                body of the stomach and the antrum (lower portion).
              </p>
              <p style={{ marginTop: '1rem' }}>
                It is the <strong>5th most common cancer globally</strong> and the <strong>3rd leading cause of cancer-related death</strong>,
                responsible for approximately <strong>768,793 deaths annually</strong>. The high mortality is largely due to
                late-stage diagnosis — more than 70% of cases are diagnosed when the cancer has already spread.
              </p>
              <div className="alert alert-warning" style={{ marginTop: '1.5rem' }}>
                <span>⚠️</span>
                <div>
                  <strong>Why Early Detection Matters:</strong> Gastric cancer is nearly <em>silent</em> in its early stages.
                  Symptoms mimic common digestive problems, leading most patients to delay seeking care until Stage III or IV.
                </div>
              </div>
            </div>
            <div className={styles.defVisual}>
              <div className={styles.stomachDiagram}>
                <div className={styles.organLabel}>Human Stomach</div>
                <svg viewBox="0 0 200 250" className={styles.stomachSvg}>
                  <path d="M80 30 C40 30 20 60 20 100 C20 160 40 200 80 210 C100 215 130 215 150 210 C180 200 190 170 190 140 C190 100 175 70 160 50 C150 35 130 25 100 25 Z" fill="rgba(30,77,140,0.3)" stroke="#2d6bc4" strokeWidth="2"/>
                  <path d="M75 60 C65 80 65 120 70 160 C80 190 110 200 140 190 C165 180 175 155 175 130" fill="none" stroke="#00b4d8" strokeWidth="1.5" strokeDasharray="5,3"/>
                  <circle cx="90" cy="100" r="12" fill="rgba(239,68,68,0.4)" stroke="#ef4444" strokeWidth="1.5"/>
                  <text x="90" y="104" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">Lesion</text>
                  <text x="105" y="40" fill="#94a3b8" fontSize="7">Cardia</text>
                  <text x="30" y="90" fill="#94a3b8" fontSize="7">Fundus</text>
                  <text x="140" y="80" fill="#94a3b8" fontSize="7">Body</text>
                  <text x="130" y="160" fill="#94a3b8" fontSize="7">Antrum</text>
                  <text x="75" y="220" fill="#94a3b8" fontSize="7">Pylorus</text>
                </svg>
                <p className={styles.diagramCaption}>Most common locations: Antrum (50%), Body (30%), Cardia (20%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className={`section ${styles.typesSection}`}>
        <div className="container">
          <span className="section-tag">🔬 Classification</span>
          <h2 className="section-title">Types of Gastric Cancer</h2>
          <p className="section-subtitle">Gastric cancer is not a single disease — it encompasses several distinct subtypes with different biology, prognosis, and treatment approaches.</p>
          <div className="grid-2">
            {types.map((t) => (
              <div key={t.name} className="card" style={{ borderLeft: `3px solid ${t.color}` }}>
                <div className={styles.typeHeader}>
                  <span className={styles.typeIcon} style={{ background: `${t.color}22`, color: t.color }}>{t.icon}</span>
                  <div>
                    <h3 className={styles.typeName}>{t.name}</h3>
                    <span className="badge badge-blue">{t.pct} of cases</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.9rem' }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PATHOPHYSIOLOGY */}
      <section className={`section ${styles.pathoSection}`}>
        <div className="container">
          <span className="section-tag">⚗️ Pathophysiology</span>
          <h2 className="section-title">How Gastric Cancer Develops</h2>
          <p className="section-subtitle">The Correa Cascade — a well-established progression from normal mucosa to invasive cancer driven primarily by H. pylori infection.</p>
          <div className={styles.cascade}>
            {[
              { step: '1', label: 'Normal Gastric Mucosa', icon: '✅', color: '#06d6a0', desc: 'Healthy stomach lining with normal glandular architecture' },
              { step: '2', label: 'H. pylori Infection', icon: '🦠', color: '#f59e0b', desc: 'Chronic inflammation triggered by H. pylori colonization' },
              { step: '3', label: 'Chronic Active Gastritis', icon: '🔴', color: '#f97316', desc: 'Persistent inflammation causing mucosal damage and atrophy' },
              { step: '4', label: 'Atrophic Gastritis', icon: '📉', color: '#ef4444', desc: 'Loss of normal glands, reduced acid secretion' },
              { step: '5', label: 'Intestinal Metaplasia', icon: '🔄', color: '#dc2626', desc: 'Stomach cells replaced by intestinal-type cells (pre-malignant)' },
              { step: '6', label: 'Dysplasia', icon: '⚠️', color: '#b91c1c', desc: 'Abnormal cell growth — low grade and high grade' },
              { step: '7', label: 'Gastric Adenocarcinoma', icon: '🚨', color: '#7f1d1d', desc: 'Invasive malignant tumor breaching basement membrane' },
            ].map((item, i, arr) => (
              <div key={item.step} className={styles.cascadeItem}>
                <div className={styles.cascadeStep} style={{ background: `${item.color}22`, borderColor: item.color }}>
                  <span className={styles.cascadeStepNum} style={{ color: item.color }}>{item.step}</span>
                  <span className={styles.cascadeIcon}>{item.icon}</span>
                </div>
                <div className={styles.cascadeContent}>
                  <h4 style={{ color: item.color }}>{item.label}</h4>
                  <p>{item.desc}</p>
                </div>
                {i < arr.length - 1 && <div className={styles.cascadeArrow}>↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MOLECULAR */}
      <section className={`section ${styles.molecularSection}`}>
        <div className="container">
          <span className="section-tag">🧬 Molecular Biology</span>
          <h2 className="section-title">Key Molecular Pathways</h2>
          <p className="section-subtitle">Targeted therapies exploit specific molecular aberrations. These pathways guide treatment decisions in advanced gastric cancer.</p>
          <div className="grid-3">
            {molecularPathways.map((mp) => (
              <div key={mp.name} className="card">
                <div style={{ fontSize: '1.8rem', marginBottom: '0.75rem' }}>{mp.icon}</div>
                <h4 style={{ color: var_text, marginBottom: '0.4rem' }}>{mp.name}</h4>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '0.75rem' }}>
                  <span className="badge badge-blue">Freq: {mp.frequency}</span>
                </div>
                <p style={{ fontSize: '0.85rem' }}>Targeted by: <strong style={{ color: 'var(--teal-primary)' }}>{mp.drug}</strong></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAGING */}
      <section className={`section ${styles.stagingSection}`}>
        <div className="container">
          <span className="section-tag">📊 TNM Staging</span>
          <h2 className="section-title">Cancer Staging & Survival Rates</h2>
          <p className="section-subtitle">The TNM (Tumor, Node, Metastasis) system classifies gastric cancer severity. Stage at diagnosis is the single strongest predictor of outcome.</p>
          <div className={styles.stageList}>
            {stages.map((s) => (
              <div key={s.stage} className={styles.stageRow}>
                <div className={styles.stageBadge} style={{ background: `${s.color}22`, borderColor: s.color }}>
                  <span style={{ color: s.color, fontWeight: 700 }}>{s.stage}</span>
                </div>
                <div className={styles.stageDesc}>
                  <p style={{ margin: 0, fontSize: '0.95rem' }}>{s.desc}</p>
                </div>
                <div className={styles.stageSurvival}>
                  <span style={{ color: s.color, fontWeight: 700, fontSize: '1.2rem' }}>{s.survival}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>5-Year Survival</span>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-info" style={{ marginTop: '2rem' }}>
            <span>ℹ️</span>
            <div>
              <strong>TNM Classification:</strong> T = Tumor depth (T1–T4), N = Number of lymph nodes involved (N0–N3), M = Distant metastasis (M0 = absent, M1 = present). Combination determines the stage and guides treatment strategy.
            </div>
          </div>
        </div>
      </section>

      {/* H. PYLORI */}
      <section className={`section ${styles.pyloriSection}`}>
        <div className="container">
          <div className={styles.pyloriGrid}>
            <div>
              <span className="section-tag">🦠 H. pylori</span>
              <h2>The H. pylori Connection</h2>
              <p>
                <em>Helicobacter pylori</em> is a spiral-shaped bacterium that colonizes the stomach lining.
                It is classified as a <strong>Group 1 carcinogen</strong> by the International Agency for Research on Cancer (IARC)
                and is the primary causative agent for most non-cardia gastric cancers.
              </p>
              <div className={styles.pyloriStats}>
                <div className={styles.pyloriStat}><span>50%</span><label>World population infected</label></div>
                <div className={styles.pyloriStat}><span>78%</span><label>GC patients carry H. pylori</label></div>
                <div className={styles.pyloriStat}><span>42%</span><label>Risk reduction with eradication</label></div>
              </div>
              <div className="alert alert-success" style={{ marginTop: '1.5rem' }}>
                <span>✅</span>
                <div>
                  <strong>Good News:</strong> H. pylori can be detected with a simple breath test or blood test and eradicated with a 10–14 day antibiotic regimen. Early eradication significantly reduces gastric cancer risk.
                </div>
              </div>
            </div>
            <div className={styles.pyloriMechanisms}>
              <h4 style={{ marginBottom: '1.25rem', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>How H. pylori Causes Cancer</h4>
              {[
                { num: '01', text: 'Produces CagA and VacA toxins that damage gastric epithelium' },
                { num: '02', text: 'Triggers chronic NF-κB inflammation pathway activation' },
                { num: '03', text: 'Induces oxidative DNA damage and promotes mutagenesis' },
                { num: '04', text: 'Disrupts epithelial tight junctions and mucosal barrier' },
                { num: '05', text: 'Promotes epigenetic silencing of tumor suppressor genes' },
                { num: '06', text: 'Initiates Correa cascade → intestinal metaplasia → cancer' },
              ].map((m) => (
                <div key={m.num} className={styles.mechanism}>
                  <span className={styles.mechNum}>{m.num}</span>
                  <p>{m.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const var_text = 'var(--text-primary)';
