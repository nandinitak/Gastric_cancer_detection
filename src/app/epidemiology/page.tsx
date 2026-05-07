'use client';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement,
  BarElement, ArcElement, Title, Tooltip, Legend, Filler,
} from 'chart.js';
import { globalIncidenceByYear, incidenceByRegion, indiaStateWise, survivalRateByStage, genderDistribution, highRiskCountries } from '@/data/epidemiology';
import styles from './page.module.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement, Title, Tooltip, Legend, Filler);

const chartOptions = (title: string) => ({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { labels: { color: '#94a3b8', font: { size: 12 } } },
    title: { display: false },
    tooltip: {
      backgroundColor: 'rgba(6,13,26,0.95)',
      borderColor: 'rgba(0,180,216,0.3)',
      borderWidth: 1,
      titleColor: '#e8ecf1',
      bodyColor: '#94a3b8',
    },
  },
  scales: {
    x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.04)' } },
    y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.04)' } },
  },
});

const donutOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { position: 'bottom' as const, labels: { color: '#94a3b8', padding: 20, font: { size: 12 } } },
    tooltip: {
      backgroundColor: 'rgba(6,13,26,0.95)',
      borderColor: 'rgba(0,180,216,0.3)',
      borderWidth: 1,
      titleColor: '#e8ecf1',
      bodyColor: '#94a3b8',
    },
  },
};

export default function EpidemiologyPage() {
  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">🌍 Epidemiology Dashboard</div>
          <h1>Global & India Cancer Data</h1>
          <p>Interactive visualizations of gastric cancer incidence, mortality, and prevalence — worldwide trends and India-specific data from GLOBOCAN 2024 and ICMR.</p>
        </div>
      </div>

      {/* GLOBAL QUICK STATS */}
      <section className={`section ${styles.quickStats}`}>
        <div className="container">
          <div className={styles.statsGrid}>
            {[
              { label: 'Global New Cases (2024)', value: '1,089,103', icon: '🌐', color: '#ef4444' },
              { label: 'Global Deaths (2024)', value: '768,793', icon: '📉', color: '#f59e0b' },
              { label: 'India New Cases', value: '57,394', icon: '🇮🇳', color: '#00b4d8' },
              { label: 'India Deaths', value: '51,529', icon: '📊', color: '#8b5cf6' },
              { label: 'Global Rank (Incidence)', value: '#5', icon: '🏷️', color: '#06d6a0' },
              { label: 'Male:Female Ratio', value: '2:1', icon: '⚖️', color: '#2d6bc4' },
            ].map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statIcon} style={{ color: s.color }}>{s.icon}</div>
                <div className={styles.statValue} style={{ color: s.color }}>{s.value}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INCIDENCE TREND CHART */}
      <section className={`section ${styles.chartSection}`}>
        <div className="container">
          <span className="section-tag">📈 Trend Analysis</span>
          <h2 className="section-title">Global & India Incidence Trends (2010–2024)</h2>
          <p className="section-subtitle">Year-over-year comparison of global new cases vs India-specific cases. Data sourced from GLOBOCAN and ICMR annual reports.</p>
          <div className={styles.chartCard}>
            <div className={styles.chartWrap} style={{ height: 360 }}>
              <Line data={globalIncidenceByYear} options={chartOptions('Global Incidence')} />
            </div>
            <p className={styles.chartSource}>Source: GLOBOCAN 2024, IARC; ICMR National Cancer Registry Programme</p>
          </div>
        </div>
      </section>

      {/* REGIONAL BAR */}
      <section className={`section ${styles.chartSection}`} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.twoCharts}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Incidence by World Region</h3>
              <div className={styles.chartCard}>
                <div className={styles.chartWrap} style={{ height: 300 }}>
                  <Bar data={incidenceByRegion} options={{ ...chartOptions('Regional'), scales: { x: { ticks: { color: '#64748b', font: { size: 10 } }, grid: { color: 'rgba(255,255,255,0.04)' } }, y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.04)' } } }, plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(6,13,26,0.95)', borderColor: 'rgba(0,180,216,0.3)', borderWidth: 1 } }, responsive: true, maintainAspectRatio: false }} />
                </div>
                <p className={styles.chartSource}>Age-standardized rate per 100,000 population — GLOBOCAN 2024</p>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Survival Rate by Stage</h3>
              <div className={styles.chartCard}>
                <div className={styles.chartWrap} style={{ height: 300 }}>
                  <Bar data={survivalRateByStage} options={{ ...chartOptions('Survival'), indexAxis: 'y' as const, scales: { x: { ticks: { color: '#64748b', callback: (v: unknown) => v + '%' }, grid: { color: 'rgba(255,255,255,0.04)' } }, y: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.04)' } } }, plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(6,13,26,0.95)', borderColor: 'rgba(0,180,216,0.3)', borderWidth: 1 } }, responsive: true, maintainAspectRatio: false }} />
                </div>
                <p className={styles.chartSource}>5-Year relative survival rates — SEER Database & NCRP India</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDIA STATE CHART */}
      <section className={`section ${styles.chartSection}`} style={{ paddingTop: 0 }}>
        <div className="container">
          <span className="section-tag">🇮🇳 India Focus</span>
          <h2 className="section-title">State-Wise Incidence in India</h2>
          <p className="section-subtitle">Northeast India has significantly higher gastric cancer rates, with Mizoram leading at 36.4 per 100,000 — among the highest in the world.</p>
          <div className={styles.chartCard}>
            <div className={styles.chartWrap} style={{ height: 380 }}>
              <Bar data={indiaStateWise} options={{
                ...chartOptions('India'),
                indexAxis: 'y' as const,
                scales: {
                  x: { ticks: { color: '#64748b' }, grid: { color: 'rgba(255,255,255,0.04)' } },
                  y: { ticks: { color: '#64748b', font: { size: 11 } }, grid: { color: 'rgba(255,255,255,0.04)' } },
                },
                plugins: { legend: { display: false }, tooltip: { backgroundColor: 'rgba(6,13,26,0.95)', borderColor: 'rgba(0,180,216,0.3)', borderWidth: 1, titleColor: '#e8ecf1', bodyColor: '#94a3b8' } },
              }} />
            </div>
            <p className={styles.chartSource}>Source: ICMR-NCRP; Population-based cancer registries (PBCR) India 2023</p>
          </div>
        </div>
      </section>

      {/* GENDER + HIGH RISK COUNTRIES */}
      <section className={`section ${styles.chartSection}`} style={{ paddingTop: 0 }}>
        <div className="container">
          <div className={styles.twoCharts}>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>Gender Distribution</h3>
              <div className={styles.chartCard}>
                <div className={styles.chartWrap} style={{ height: 280 }}>
                  <Doughnut data={genderDistribution} options={donutOptions} />
                </div>
                <p className={styles.chartSource}>Men are 2× more likely to develop gastric cancer</p>
              </div>
            </div>
            <div>
              <h3 style={{ marginBottom: '1rem' }}>High-Risk Countries</h3>
              <div className={styles.countryTable}>
                {highRiskCountries.map((c, i) => (
                  <div key={c.country} className={styles.countryRow}>
                    <span className={styles.countryRank}>{i + 1}</span>
                    <span className={styles.countryName}>{c.country}</span>
                    <span className={styles.countryCont}>{c.continent}</span>
                    <div className={styles.countryBarWrap}>
                      <div className={styles.countryBar} style={{ width: `${(c.rate / 60) * 100}%` }} />
                    </div>
                    <span className={styles.countryRate}>{c.rate}</span>
                  </div>
                ))}
              </div>
              <p className={styles.chartSource}>Age-standardized rate per 100,000 — GLOBOCAN 2024</p>
            </div>
          </div>
        </div>
      </section>

      {/* DATA SOURCES */}
      <section className={`section ${styles.sourcesSection}`}>
        <div className="container">
          <span className="section-tag">📚 Data Sources</span>
          <h2 className="section-title">Where This Data Comes From</h2>
          <div className="grid-3">
            {[
              { name: 'GLOBOCAN 2024', org: 'IARC / WHO', desc: 'Global cancer incidence, mortality and prevalence estimates for 36 cancer types in 185 countries.', url: 'https://gco.iarc.fr/' },
              { name: 'ICMR-NCRP', org: 'Indian Council of Medical Research', desc: 'National Cancer Registry Programme — population-based cancer registry data across all Indian states.', url: 'https://main.icmr.nic.in/' },
              { name: 'SEER Database', org: 'National Cancer Institute (USA)', desc: 'Surveillance, Epidemiology, and End Results program — cancer statistics and survival data.', url: 'https://seer.cancer.gov/' },
              { name: 'PubMed / NCBI', org: 'National Library of Medicine', desc: 'Peer-reviewed literature on gastric cancer epidemiology, molecular biology and clinical trials.', url: 'https://pubmed.ncbi.nlm.nih.gov/' },
              { name: 'WHO Cancer Unit', org: 'World Health Organization', desc: 'Global cancer prevention guidelines, screening recommendations and policy resources.', url: 'https://www.who.int/cancer' },
              { name: 'TCGA / PanCancer Atlas', org: 'NCI Genomic Data Commons', desc: 'The Cancer Genome Atlas — molecular profiling of 33 cancer types including gastric adenocarcinoma.', url: 'https://www.cancer.gov/tcga' },
            ].map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="card" style={{ textDecoration: 'none' }}>
                <h4 style={{ color: 'var(--teal-primary)', marginBottom: '0.25rem' }}>{s.name}</h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>{s.org}</p>
                <p style={{ fontSize: '0.85rem' }}>{s.desc}</p>
                <span style={{ fontSize: '0.78rem', color: 'var(--teal-primary)', marginTop: '0.75rem', display: 'block' }}>Visit →</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
