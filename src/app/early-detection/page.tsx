import type { Metadata } from 'next';
import styles from './page.module.css';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Early Detection of Gastric Cancer — GastricCancer Portal',
  description: 'Learn how to detect gastric cancer early — symptoms, risk factors, screening guidelines, and warning signs that every person should know.',
};

const symptoms = [
  { icon: '😮‍💨', name: 'Persistent Indigestion', stage: 'Early', desc: 'Burning or discomfort in the upper abdomen lasting more than 2 weeks, not relieved by antacids.' },
  { icon: '🤢', name: 'Nausea / Vomiting', stage: 'Early–Mid', desc: 'Unexplained nausea or vomiting, particularly after meals, without a clear cause.' },
  { icon: '🍽️', name: 'Bloating After Meals', stage: 'Early', desc: 'Feeling full after eating a very small amount of food — even a light meal causes discomfort.' },
  { icon: '⚖️', name: 'Unexplained Weight Loss', stage: 'Mid–Late', desc: 'Losing more than 5% of body weight within 6 months without dieting or increased exercise.' },
  { icon: '😰', name: 'Loss of Appetite', stage: 'Early–Mid', desc: 'Sudden or progressive loss of interest in food, not explained by depression or other conditions.' },
  { icon: '💉', name: 'Blood in Stool', stage: 'Mid–Late', desc: 'Black, tarry stools (melena) indicating blood from the upper GI tract — requires urgent evaluation.' },
  { icon: '😫', name: 'Abdominal Pain', stage: 'Mid–Late', desc: 'Dull ache or sharp pain in the stomach region, particularly after eating.' },
  { icon: '😴', name: 'Fatigue / Weakness', stage: 'Mid–Late', desc: 'Persistent tiredness often linked to anemia caused by chronic internal bleeding.' },
];

const riskFactors = [
  { factor: 'H. pylori Infection', risk: 'Very High', icon: '🦠', detail: 'Present in 78% of non-cardia GC patients. A Group 1 IARC carcinogen. Eradication reduces risk by up to 42%.' },
  { factor: 'High-Salt Diet', risk: 'High', icon: '🧂', detail: 'Salted fish, pickled vegetables, and preserved meats damage the gastric mucosa. Dietary salt is an independent risk factor.' },
  { factor: 'Smoking / Tobacco', risk: 'High', icon: '🚬', detail: 'Smokers have 1.5–2× the risk of gastric cancer. Tobacco carcinogens concentrate in gastric mucus.' },
  { factor: 'Family History', risk: 'High', icon: '🧬', detail: 'First-degree relatives of GC patients have 2–3× increased risk. Lynch syndrome increases risk by 10–19%.' },
  { factor: 'Previous Gastric Surgery', risk: 'Moderate', icon: '🔪', detail: 'Partial gastrectomy (especially Billroth II) increases risk 3–4× due to bile reflux and altered mucosal environment.' },
  { factor: 'Alcohol Consumption', risk: 'Moderate', icon: '🍺', detail: 'Heavy drinking associated with 12–17% increased gastric cancer risk, particularly cardia tumors.' },
  { factor: 'Obesity / High BMI', risk: 'Moderate', icon: '⚖️', detail: 'Strongly linked to gastric cardia adenocarcinoma via gastroesophageal reflux and chronic inflammation.' },
  { factor: 'Pernicious Anemia', risk: 'Moderate', icon: '🩸', detail: 'Autoimmune condition causing achlorhydria and atrophic gastritis — 2-3× increased GC risk.' },
];

const screeningGuidelines = [
  { country: 'Japan', program: 'National Screening Program', method: 'Annual Upper GI Endoscopy for age ≥ 50; photofluorography in remote areas', color: '#ef4444' },
  { country: 'South Korea', program: 'National Cancer Screening Program', method: 'Upper GI endoscopy or UGI series every 2 years for age ≥ 40', color: '#f59e0b' },
  { country: 'China', program: 'High-Risk Region Program', method: 'Endoscopy every 2–3 years in high-risk provinces. H. pylori test-and-treat for age 40–60', color: '#f97316' },
  { country: 'India (ICMR)', program: 'No National Screening', method: 'Opportunistic screening recommended. H. pylori testing for symptomatic patients. Focus on NE India.', color: '#00b4d8' },
  { country: 'USA / UK', program: 'No National Screening', method: 'Upper endoscopy only for symptomatic or high-risk individuals. Lynch syndrome surveillance every 3–5 years.', color: '#8b5cf6' },
  { country: 'WHO Global', program: 'H. pylori Test-and-Treat', method: 'Recommended in high-prevalence regions for individuals > 40 years as primary prevention strategy', color: '#06d6a0' },
];

export default function EarlyDetectionPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">🔍 Early Detection</div>
          <h1>Early Detection Saves Lives</h1>
          <p>The 5-year survival rate jumps from 6% to 68% when gastric cancer is caught early. Know the symptoms, understand your risks, and get screened.</p>
        </div>
      </div>

      {/* KEY FACT */}
      <section className={`section ${styles.keyFact}`}>
        <div className="container">
          <div className={styles.factGrid}>
            {[
              { num: '70%', label: 'of patients diagnosed at Stage III–IV', icon: '😰', color: '#ef4444' },
              { num: '< 20%', label: 'global early-stage detection rate', icon: '🔍', color: '#f59e0b' },
              { num: '11×', label: 'higher survival with Stage I vs Stage IV', icon: '📈', color: '#06d6a0' },
              { num: '2 wks', label: 'threshold — see a doctor if symptoms persist', icon: '📅', color: '#00b4d8' },
            ].map((f) => (
              <div key={f.label} className={styles.factCard} style={{ borderColor: `${f.color}33` }}>
                <div className={styles.factIcon}>{f.icon}</div>
                <div className={styles.factNum} style={{ color: f.color }}>{f.num}</div>
                <div className={styles.factLabel}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section className={`section ${styles.symptomsSection}`}>
        <div className="container">
          <span className="section-tag">🩺 Warning Signs</span>
          <h2 className="section-title">Know the Symptoms</h2>
          <p className="section-subtitle">
            Early-stage gastric cancer is often asymptomatic. When symptoms do appear, they mimic common digestive issues.
            <strong style={{ color: 'var(--accent-red)' }}> Do not ignore symptoms that persist for more than 2 weeks.</strong>
          </p>
          <div className="grid-2">
            {symptoms.map((s) => (
              <div key={s.name} className={styles.symptomCard}>
                <div className={styles.sIcon}>{s.icon}</div>
                <div className={styles.sContent}>
                  <div className={styles.sHeader}>
                    <h4 className={styles.sName}>{s.name}</h4>
                    <span className={`badge ${s.stage.includes('Late') ? 'badge-red' : s.stage.includes('Mid') ? 'badge-amber' : 'badge-green'}`}>{s.stage}</span>
                  </div>
                  <p className={styles.sDesc}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="alert alert-danger" style={{ marginTop: '2rem' }}>
            <span>🚨</span>
            <div>
              <strong>Red Flag Symptoms — Seek Immediate Care:</strong> Vomiting blood, black tarry stools, sudden severe weight loss, or a palpable abdominal mass. These require urgent endoscopic evaluation.
            </div>
          </div>
        </div>
      </section>

      {/* RISK FACTORS */}
      <section className={`section ${styles.riskSection}`}>
        <div className="container">
          <span className="section-tag">⚠️ Risk Factors</span>
          <h2 className="section-title">Who Is at Higher Risk?</h2>
          <p className="section-subtitle">Gastric cancer risk is shaped by a combination of environmental, dietary, genetic, and infectious factors.</p>
          <div className="grid-2">
            {riskFactors.map((r) => (
              <div key={r.factor} className={styles.riskCard}>
                <div className={styles.riskLeft}>
                  <span className={styles.riskIcon}>{r.icon}</span>
                  <div>
                    <div className={styles.riskHead}>
                      <h4>{r.factor}</h4>
                      <span className={`badge ${r.risk === 'Very High' ? 'badge-red' : r.risk === 'High' ? 'badge-amber' : 'badge-blue'}`}>{r.risk}</span>
                    </div>
                    <p className={styles.riskDetail}>{r.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCREENING */}
      <section className={`section ${styles.screeningSection}`}>
        <div className="container">
          <span className="section-tag">📋 Screening Guidelines</span>
          <h2 className="section-title">Global Screening Protocols</h2>
          <p className="section-subtitle">Screening programs differ vastly by country. Only a few high-incidence nations have formal national programs.</p>
          <div className={styles.screeningList}>
            {screeningGuidelines.map((sg) => (
              <div key={sg.country} className={styles.screeningRow}>
                <div className={styles.screeningCountry} style={{ borderLeft: `4px solid ${sg.color}` }}>
                  <strong style={{ color: sg.color }}>{sg.country}</strong>
                  <span>{sg.program}</span>
                </div>
                <div className={styles.screeningMethod}>{sg.method}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={`section ${styles.ctaSection}`}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2>Not Sure About Your Risk Level?</h2>
            <p>Take our interactive 10-question symptom checker to get a personalized risk assessment and actionable recommendations.</p>
            <Link href="/symptom-checker" className="btn btn-teal">🩺 Take the Symptom Checker →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
