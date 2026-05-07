import type { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Prevention & Treatment of Gastric Cancer — GastricCancer Portal',
  description: 'Comprehensive guide to gastric cancer prevention strategies and treatment options: surgery, chemotherapy, immunotherapy, targeted therapy, and palliative care.',
};

const preventionSteps = [
  { icon: '🦠', title: 'Treat H. pylori', priority: 'Highest', color: '#06d6a0', desc: 'Get tested and treated. A 10–14 day antibiotic regimen (triple therapy) eradicates H. pylori and reduces gastric cancer risk by up to 42%. Especially important for people over 40 in high-risk regions.' },
  { icon: '🥦', title: 'Diet Rich in Fruits & Vegetables', priority: 'High', color: '#00b4d8', desc: 'High antioxidant diets (vitamins C and E, beta-carotene) protect the gastric mucosa. Mediterranean diet is associated with 30–40% reduced gastric cancer risk.' },
  { icon: '🧂', title: 'Reduce Salt & Processed Foods', priority: 'High', color: '#f59e0b', desc: 'Limit pickled, salted, and smoked foods. WHO recommends < 5g salt per day. These foods cause direct gastric mucosal damage and promote carcinogenesis.' },
  { icon: '🚭', title: 'Quit Smoking', priority: 'High', color: '#ef4444', desc: 'Smoking doubles gastric cancer risk. Quitting reduces risk toward baseline within 10 years. Tobacco carcinogens directly damage gastric DNA.' },
  { icon: '🍺', title: 'Limit Alcohol', priority: 'Moderate', color: '#8b5cf6', desc: 'Heavy drinking (>3 drinks/day) significantly increases gastric cardia cancer risk. Limit to 1 drink/day for women, 2 for men.' },
  { icon: '📋', title: 'Regular Endoscopic Screening', priority: 'High', color: '#2d6bc4', desc: 'For high-risk individuals (family history, chronic gastritis, H. pylori+), endoscopy every 1–3 years enables detection at pre-malignant stages (intestinal metaplasia, dysplasia).' },
];

const treatments = [
  {
    name: 'Endoscopic Resection',
    icon: '🔭',
    stage: 'Stage I only',
    color: '#06d6a0',
    description: 'For early-stage (T1a/T1b) tumors without lymph node involvement. Endoscopic Mucosal Resection (EMR) or Endoscopic Submucosal Dissection (ESD) — minimally invasive, organ-preserving with 5-year survival >95%.',
    sideEffects: ['Minimal — outpatient procedure', 'Rare bleeding or perforation'],
    standard: true,
  },
  {
    name: 'Surgery (Gastrectomy)',
    icon: '🔪',
    stage: 'Stage I–III',
    color: '#2d6bc4',
    description: 'Gold standard curative treatment. Subtotal gastrectomy (60–80% stomach removal) for distal tumors. Total gastrectomy for proximal tumors. D2 lymphadenectomy (removal of regional lymph nodes) is the standard surgical approach.',
    sideEffects: ['Dumping syndrome', 'Vitamin B12 deficiency', 'Nutritional malabsorption', 'Anastomotic leak'],
    standard: true,
  },
  {
    name: 'Perioperative Chemotherapy',
    icon: '💉',
    stage: 'Stage II–III',
    color: '#00b4d8',
    description: 'FLOT (5-FU, leucovorin, oxaliplatin, docetaxel) protocol — 4 cycles before and 4 cycles after surgery. FLOT improves overall survival by 7.9 months vs ECF (FLOT4 trial). Standard for resectable, locally advanced GC.',
    sideEffects: ['Nausea', 'Neuropathy', 'Neutropenia', 'Fatigue', 'Hair loss'],
    standard: true,
  },
  {
    name: 'Targeted Therapy (HER2+)',
    icon: '🎯',
    stage: 'Stage IV (HER2+)',
    color: '#8b5cf6',
    description: 'Trastuzumab (Herceptin) + chemotherapy for HER2-positive advanced gastric cancer. ToGA trial: median OS improved from 11.1 to 13.8 months. Trastuzumab deruxtecan (T-DXd) for HER2-low as 2nd/3rd line therapy.',
    sideEffects: ['Cardiotoxicity', 'Infusion reactions', 'Diarrhea', 'Fatigue'],
    standard: true,
  },
  {
    name: 'Immunotherapy (PD-1/PD-L1)',
    icon: '🛡️',
    stage: 'Stage IV',
    color: '#f59e0b',
    description: 'Nivolumab + chemotherapy: 1st line for HER2-negative advanced GC (CheckMate 649). Pembrolizumab for MSI-H tumors (2nd line). Combination significantly improves OS in PD-L1 CPS ≥ 5 patients.',
    sideEffects: ['Immune-related adverse events', 'Colitis', 'Pneumonitis', 'Thyroid dysfunction'],
    standard: true,
  },
  {
    name: 'Radiation Therapy',
    icon: '☢️',
    stage: 'Adjuvant / Palliative',
    color: '#f97316',
    description: 'Not routinely used in Asia due to D2 surgery adequacy. Used as adjuvant therapy post-surgery in R1 (positive margin) resection. Palliative role for bleeding control, obstruction, and bone metastases.',
    sideEffects: ['Fatigue', 'Nausea', 'Radiation gastritis', 'Long-term stricture'],
    standard: false,
  },
];

export default function PreventionTreatmentPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">💊 Prevention & Treatment</div>
          <h1>Prevention, Treatment & Care</h1>
          <p>Evidence-based prevention strategies and a complete overview of current treatment modalities — from endoscopic resection to immunotherapy, surgery, and palliative care.</p>
        </div>
      </div>

      {/* PREVENTION */}
      <section className={`section ${styles.preventionSection}`}>
        <div className="container">
          <span className="section-tag">🛡️ Prevention</span>
          <h2 className="section-title">Evidence-Based Prevention Strategies</h2>
          <p className="section-subtitle">Gastric cancer is largely preventable. These strategies, backed by Level I evidence, can significantly reduce your lifetime risk.</p>
          <div className="grid-2">
            {preventionSteps.map((p) => (
              <div key={p.title} className={styles.prevCard} style={{ borderLeft: `3px solid ${p.color}` }}>
                <div className={styles.prevHeader}>
                  <span className={styles.prevIcon} style={{ background: `${p.color}22`, color: p.color }}>{p.icon}</span>
                  <div>
                    <h3 className={styles.prevTitle}>{p.title}</h3>
                    <span className={`badge ${p.priority === 'Highest' ? 'badge-green' : p.priority === 'High' ? 'badge-amber' : 'badge-blue'}`}>
                      {p.priority} Priority
                    </span>
                  </div>
                </div>
                <p className={styles.prevDesc}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT */}
      <section className={`section ${styles.treatmentSection}`}>
        <div className="container">
          <span className="section-tag">🏥 Treatment</span>
          <h2 className="section-title">Treatment Modalities</h2>
          <p className="section-subtitle">Treatment is stage-dependent and multidisciplinary. A tumor board review involving oncology, surgery, radiology and pathology is standard of care.</p>
          <div className={styles.treatGrid}>
            {treatments.map((t) => (
              <div key={t.name} className={styles.treatCard}>
                <div className={styles.treatHeader}>
                  <div className={styles.treatIconWrap} style={{ background: `${t.color}22`, color: t.color }}>{t.icon}</div>
                  <div>
                    <h3 className={styles.treatName}>{t.name}</h3>
                    <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                      <span className="badge badge-blue">{t.stage}</span>
                      {t.standard && <span className="badge badge-green">Standard of Care</span>}
                    </div>
                  </div>
                </div>
                <div className={styles.treatDivider} style={{ borderColor: `${t.color}33` }} />
                <p className={styles.treatDesc}>{t.description}</p>
                <div className={styles.sideEffects}>
                  <strong>Side Effects:</strong>
                  <div className={styles.seList}>
                    {t.sideEffects.map((se) => (
                      <span key={se} className="badge badge-red">{se}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENT FLOW */}
      <section className={`section ${styles.flowSection}`}>
        <div className="container">
          <span className="section-tag">🔄 Decision Algorithm</span>
          <h2 className="section-title">Treatment Decision Flowchart</h2>
          <p className="section-subtitle">A simplified decision pathway for newly diagnosed gastric cancer — based on NCCN Guidelines v2024.</p>
          <div className={styles.flowChart}>
            {[
              { label: 'Diagnosed with Gastric Cancer', icon: '🔬', children: ['Stage I (T1a/T1b)', 'Stage II–III Resectable', 'Stage IV (Metastatic)'] },
            ].map((node) => (
              <div key={node.label} className={styles.flowRoot}>
                <div className={styles.flowNode} style={{ background: 'var(--gradient-blue)' }}>
                  <span>{node.icon}</span>
                  <span>{node.label}</span>
                </div>
                <div className={styles.flowBranches}>
                  {[
                    { label: 'Stage I (T1a/T1b)', icon: '🔭', next: 'Endoscopic Resection (EMR/ESD)\n→ Surveillance every 6 months', color: '#06d6a0' },
                    { label: 'Stage II–III (Resectable)', icon: '🔪', next: 'Perioperative FLOT Chemo\n→ Surgery (D2 Gastrectomy)\n→ Adjuvant Therapy', color: '#00b4d8' },
                    { label: 'Stage IV (Metastatic)', icon: '💊', next: 'Biomarker Testing (HER2/PD-L1/MSI)\n→ Targeted/Immuno + Chemo\n→ Palliative Care', color: '#f59e0b' },
                  ].map((b) => (
                    <div key={b.label} className={styles.flowBranch}>
                      <div className={styles.flowBranchNode} style={{ borderColor: b.color, color: b.color }}>
                        <span>{b.icon}</span> {b.label}
                      </div>
                      <div className={styles.flowNextStep}>{b.next.split('\n').map((l, i) => <p key={i}>{l}</p>)}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PALLIATIVE */}
      <section className={`section ${styles.palliativeSection}`}>
        <div className="container">
          <div className="alert alert-info">
            <span>💙</span>
            <div>
              <strong>Palliative & Supportive Care:</strong> For patients with unresectable or metastatic gastric cancer, the goal shifts to quality of life. This includes nutritional support, pain management, management of obstruction (stenting), psychological support, and hospice care. Palliative chemotherapy may extend survival by 4–6 months and significantly improves quality of life vs best supportive care alone.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
