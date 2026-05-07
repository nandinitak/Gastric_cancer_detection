'use client';
import { useState } from 'react';
import styles from './page.module.css';

const resources = [
  { id: 1, title: 'GLOBOCAN 2024 — Global Cancer Statistics', type: 'Dataset', source: 'IARC / WHO', year: 2024, tags: ['Epidemiology', 'Global', 'Statistics'], url: 'https://gco.iarc.fr/', format: 'Web/Interactive' },
  { id: 2, title: 'ICMR-NCRP Cancer Registry Data 2023', type: 'Dataset', source: 'ICMR India', year: 2023, tags: ['India', 'Registry', 'Epidemiology'], url: 'https://main.icmr.nic.in/', format: 'PDF/Excel' },
  { id: 3, title: 'SEER Database — Gastric Cancer Module', type: 'Dataset', source: 'NCI USA', year: 2024, tags: ['Survival', 'USA', 'SEER'], url: 'https://seer.cancer.gov/', format: 'Database' },
  { id: 4, title: 'TCGA-STAD — Gastric Adenocarcinoma Genomics', type: 'Dataset', source: 'NCI Genomic Data Commons', year: 2023, tags: ['Genomics', 'TCGA', 'Molecular'], url: 'https://portal.gdc.cancer.gov/', format: 'Database/FASTQ' },
  { id: 5, title: 'Kvasir-SEG Endoscopy Dataset', type: 'Dataset', source: 'SimulaMet', year: 2023, tags: ['Endoscopy', 'AI/ML', 'Images'], url: 'https://datasets.simula.no/kvasir-seg/', format: 'Images/JSON' },
  { id: 6, title: 'NCCN Clinical Practice Guidelines — Gastric Cancer v2024', type: 'Guideline', source: 'National Comprehensive Cancer Network', year: 2024, tags: ['Clinical', 'Treatment', 'Guidelines'], url: 'https://www.nccn.org/', format: 'PDF' },
  { id: 7, title: 'ESMO Clinical Practice Guidelines — Gastric Cancer', type: 'Guideline', source: 'European Society for Medical Oncology', year: 2023, tags: ['Europe', 'Clinical', 'Treatment'], url: 'https://www.esmo.org/', format: 'PDF' },
  { id: 8, title: 'WHO Classification of Tumours — Digestive System', type: 'Guideline', source: 'World Health Organization', year: 2022, tags: ['Classification', 'WHO', 'Pathology'], url: 'https://www.who.int/', format: 'Book/PDF' },
  { id: 9, title: 'CheckMate 649 Trial — Nivolumab + Chemo in GC', type: 'Paper', source: 'NEJM 2021', year: 2021, tags: ['Immunotherapy', 'Clinical Trial', 'Phase III'], url: 'https://pubmed.ncbi.nlm.nih.gov/34311938/', format: 'Paper' },
  { id: 10, title: 'ToGA Trial — Trastuzumab in HER2+ Gastric Cancer', type: 'Paper', source: 'Lancet 2010', year: 2010, tags: ['HER2', 'Targeted Therapy', 'Phase III'], url: 'https://pubmed.ncbi.nlm.nih.gov/20728210/', format: 'Paper' },
  { id: 11, title: 'FLOT4 Trial — Perioperative FLOT vs ECF in GC', type: 'Paper', source: 'NEJM 2019', year: 2019, tags: ['Chemotherapy', 'Surgery', 'Phase III'], url: 'https://pubmed.ncbi.nlm.nih.gov/31018085/', format: 'Paper' },
  { id: 12, title: 'Correa Cascade — H. pylori to Gastric Cancer Pathway', type: 'Paper', source: 'Cancer Research', year: 2017, tags: ['H. pylori', 'Pathophysiology', 'Review'], url: 'https://pubmed.ncbi.nlm.nih.gov/27799239/', format: 'Paper' },
  { id: 13, title: 'GastricNet-v2 — LPU ML Model (Badal & Nandini)', type: 'Model', source: 'LPU Research', year: 2024, tags: ['AI/ML', 'CNN', 'LPU Research'], url: '#', format: 'GitHub/Code' },
  { id: 14, title: 'GastricRisk-ML — Clinical Risk Prediction Model', type: 'Model', source: 'LPU Research', year: 2025, tags: ['XGBoost', 'Risk Prediction', 'LPU Research'], url: '#', format: 'GitHub/Code' },
  { id: 15, title: 'H. pylori Urea Breath Test — Clinical Protocol', type: 'Tool', source: 'IARC', year: 2022, tags: ['Diagnosis', 'H. pylori', 'Screening'], url: 'https://www.iarc.fr/', format: 'PDF Protocol' },
];

const allTypes = ['All', 'Dataset', 'Guideline', 'Paper', 'Model', 'Tool'];
const typeColors: Record<string, string> = { Dataset: 'badge-blue', Guideline: 'badge-green', Paper: 'badge-amber', Model: 'badge-purple', Tool: 'badge-red' };

export default function ResourcesPage() {
  const [search, setSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('All');

  const filtered = resources.filter((r) => {
    const matchType = typeFilter === 'All' || r.type === typeFilter;
    const matchSearch = !search || r.title.toLowerCase().includes(search.toLowerCase()) || r.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchType && matchSearch;
  });

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">📚 Resources Library</div>
          <h1>Research Resources & Datasets</h1>
          <p>A curated, searchable library of datasets, clinical guidelines, landmark papers, AI models, and tools related to gastric cancer — for researchers and clinicians.</p>
        </div>
      </div>

      <section className={`section ${styles.resourcesSection}`}>
        <div className="container">
          <div className={styles.controls}>
            <input
              type="text"
              className={`form-input ${styles.searchInput}`}
              placeholder="🔍 Search resources, tags, keywords..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="tabs">
              {allTypes.map((t) => (
                <button key={t} className={`tab-btn ${typeFilter === t ? 'active' : ''}`} onClick={() => setTypeFilter(t)}>{t}</button>
              ))}
            </div>
          </div>

          <div className={styles.resultsInfo}>
            Showing <strong>{filtered.length}</strong> of {resources.length} resources
          </div>

          <div className={styles.resourceGrid}>
            {filtered.map((r) => (
              <a key={r.id} href={r.url} target="_blank" rel="noopener noreferrer" className={styles.resourceCard}>
                <div className={styles.resourceHeader}>
                  <span className={`badge ${typeColors[r.type] || 'badge-blue'}`}>{r.type}</span>
                  <span className={styles.resourceYear}>{r.year}</span>
                </div>
                <h4 className={styles.resourceTitle}>{r.title}</h4>
                <p className={styles.resourceSource}>{r.source}</p>
                <div className={styles.resourceFooter}>
                  <div className={styles.resourceTags}>
                    {r.tags.slice(0, 3).map((t) => <span key={t} className={styles.tag}>{t}</span>)}
                  </div>
                  <span className={styles.resourceFormat}>📄 {r.format}</span>
                </div>
                <div className={styles.resourceArrow}>→ Access Resource</div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className={styles.noResults}>
              <span>🔍</span>
              <p>No resources match your search. Try a different keyword or filter.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
