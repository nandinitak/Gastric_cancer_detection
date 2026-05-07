'use client';
import { useState } from 'react';
import Image from 'next/image';
import { researchPapers, patents, predictiveModels } from '@/data/research';
import { useSession, signOut } from 'next-auth/react';
import styles from './page.module.css';

type Tab = 'papers' | 'patents' | 'models';

export default function ResearchHubPage() {
  const [activeTab, setActiveTab] = useState<Tab>('papers');
  const { data: session } = useSession();

  // Find model linked to a paper
  const getLinkedModel = (paperId: string) =>
    predictiveModels.find((m) => m.linkedPaperId === paperId);

  // Find paper linked to a model
  const getLinkedPaper = (modelId: string) =>
    researchPapers.find((p) => p.linkedModelId === modelId);

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">🎓 LPU Research</div>
          <h1>Research & Innovation Hub</h1>
          <p>Peer-reviewed publications, patent filings, and AI/ML models developed by <strong>Badal Gupta</strong> &amp; <strong>Nandini Tak</strong> — Final Semester B.Tech Researchers at Lovely Professional University.</p>
        </div>
      </div>

      {/* RESEARCHER PROFILES */}
      <section className={`section ${styles.profiles}`}>
        <div className="container">
          <span className="section-tag">👥 Meet the Researchers</span>
          <h2 className="section-title">The Team Behind the Research</h2>
          <div className={styles.profileGrid}>

            {/* BADAL */}
            <div className={styles.profileCard}>
              <div className={styles.profileImgWrap}>
                <Image src="/badal.png" alt="Badal Gupta" width={120} height={120} className={styles.profileImg} />
                <div className={styles.profileBadge}>👨‍💻</div>
              </div>
              <h3 className={styles.profileName}>Badal Gupta</h3>
              <p className={styles.profileRole}>B.Tech Final Semester · LPU</p>
              <div className={styles.profileTags}>
                <span className="badge badge-blue">Machine Learning</span>
                <span className="badge badge-green">Deep Learning</span>
                <span className="badge badge-purple">Android Dev</span>
                <span className="badge badge-amber">Researcher</span>
              </div>
              <div className={styles.profileBio}>
                <p>Machine Learning &amp; Deep Learning engineer specializing in medical image analysis and computer vision. Android developer with experience building production-level applications. Researcher focused on applying AI to early gastric cancer detection, including developing the Hybrid CNN-Transformer and YOLOv11 models.</p>
              </div>
              <div className={styles.profileSkills}>
                {['Python', 'PyTorch', 'TensorFlow', 'Android (Kotlin)', 'YOLOv11', 'Vision Transformer'].map(s => (
                  <span key={s} className={styles.skill}>{s}</span>
                ))}
              </div>
            </div>

            {/* NANDINI */}
            <div className={styles.profileCard}>
              <div className={styles.profileImgWrap}>
                <Image src="/nandini.png" alt="Nandini Tak" width={120} height={120} className={styles.profileImg} />
                <div className={styles.profileBadge}>👩‍💻</div>
              </div>
              <h3 className={styles.profileName}>Nandini Tak</h3>
              <p className={styles.profileRole}>B.Tech Final Semester · LPU</p>
              <div className={styles.profileTags}>
                <span className="badge badge-blue">Full Stack Dev</span>
                <span className="badge badge-green">Android Dev</span>
                <span className="badge badge-amber">Researcher</span>
              </div>
              <div className={styles.profileBio}>
                <p>Full Stack Developer &amp; Android Developer with expertise in building end-to-end research and data-driven applications. Researcher in gastric cancer epidemiology and clinical data analysis. Co-developer on both research papers and AI models, contributing to dataset curation, model evaluation, and result analysis.</p>
              </div>
              <div className={styles.profileSkills}>
                {['React', 'Next.js', 'Node.js', 'Android (Kotlin)', 'Python', 'Data Analysis'].map(s => (
                  <span key={s} className={styles.skill}>{s}</span>
                ))}
              </div>
            </div>

            {/* STATS PANEL */}
            <div className={styles.statsPanel}>
              <h4 className={styles.statsPanelTitle}>Research Impact</h4>
              {[
                { icon: '📄', label: 'Research Papers', value: '2' },
                { icon: '⚖️', label: 'Patent Filings', value: '2' },
                { icon: '🤖', label: 'ML Models Built', value: '2' },
                { icon: '📊', label: 'Datasets Used', value: '4' },
                { icon: '🎓', label: 'Institution', value: 'LPU' },
                { icon: '📅', label: 'Research Since', value: '2024' },
              ].map((s) => (
                <div key={s.label} className={styles.impactRow}>
                  <span className={styles.impactIcon}>{s.icon}</span>
                  <span className={styles.impactLabel}>{s.label}</span>
                  <span className={styles.impactValue}>{s.value}</span>
                </div>
              ))}

              {session && (
                <div className={styles.adminNote}>
                  <p>✅ Signed in as <strong>{session.user?.email}</strong></p>
                  <button className="btn btn-ghost" style={{ width: '100%', marginTop: '0.5rem', fontSize: '0.82rem' }}
                    onClick={() => signOut({ callbackUrl: '/' })}>
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className={`section ${styles.tabSection}`}>
        <div className="container">
          <div className={styles.tabsRow}>
            <div className="tabs">
              <button className={`tab-btn ${activeTab === 'papers' ? 'active' : ''}`} onClick={() => setActiveTab('papers')}>📄 Research Papers ({researchPapers.length})</button>
              <button className={`tab-btn ${activeTab === 'patents' ? 'active' : ''}`} onClick={() => setActiveTab('patents')}>⚖️ Patents ({patents.length})</button>
              <button className={`tab-btn ${activeTab === 'models' ? 'active' : ''}`} onClick={() => setActiveTab('models')}>🤖 ML Models ({predictiveModels.length})</button>
            </div>
            {session && (
              <a href="/admin" className="btn btn-teal" style={{ fontSize: '0.85rem' }}>+ Add New Entry</a>
            )}
          </div>

          {/* PAPERS */}
          {activeTab === 'papers' && (
            <div className={styles.papersGrid}>
              {researchPapers.map((p) => {
                const model = getLinkedModel(p.id);
                return (
                  <div key={p.id} className={styles.paperCard}>
                    <div className={styles.paperHeader}>
                      <span className={`badge ${p.status === 'published' ? 'badge-green' : p.status === 'accepted' ? 'badge-green' : p.status === 'under-review' ? 'badge-amber' : 'badge-blue'}`}>
                        {p.status === 'published' ? '✅ Published' : p.status === 'accepted' ? '✅ Accepted' : p.status === 'under-review' ? '🕐 Under Review' : '📋 Preprint'}
                      </span>
                      <span className={styles.paperYear}>{p.year}</span>
                    </div>
                    <h3 className={styles.paperTitle}>{p.title}</h3>
                    <p className={styles.paperAuthors}>By: {p.authors.join(', ')}</p>
                    <p className={styles.paperJournal}>📰 {p.journal}</p>
                    <div className={styles.paperTags}>
                      {p.tags.map((t) => <span key={t} className="badge badge-blue">{t}</span>)}
                    </div>
                    {/* Linked model badge */}
                    {model && (
                      <div className={styles.linkedModel}>
                        <span className={styles.linkedLabel}>🤖 Model developed from this paper:</span>
                        <button className={`badge badge-purple ${styles.linkedBadge}`}
                          onClick={() => setActiveTab('models')}>
                          {model.name} — {model.accuracy}% Accuracy →
                        </button>
                      </div>
                    )}
                    <div className={styles.paperActions}>
                      {p.doi && <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>🔗 DOI</a>}
                      {p.pdfFile && <a href={`/papers/${p.pdfFile}`} target="_blank" className="btn btn-teal" style={{ fontSize: '0.82rem', padding: '0.4rem 1rem' }}>📥 PDF</a>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* PATENTS */}
          {activeTab === 'patents' && (
            <div className={styles.patentsGrid}>
              {patents.map((pat) => (
                <div key={pat.id} className={styles.patentCard}>
                  <div className={styles.patentHeader}>
                    <span className={`badge ${pat.status === 'granted' ? 'badge-green' : pat.status === 'filed' ? 'badge-blue' : 'badge-amber'}`}>
                      {pat.status === 'granted' ? '✅ Granted' : pat.status === 'filed' ? '📋 Filed' : '🕐 Pending'}
                    </span>
                    <span className={styles.paperYear}>{pat.jurisdiction}</span>
                  </div>
                  <div className={styles.patentIconWrap}><span className={styles.patentBigIcon}>⚖️</span></div>
                  <h3 className={styles.patentTitle}>{pat.title}</h3>
                  <div className={styles.patentMeta}>
                    <div><span className={styles.metaLabel}>Filing No.</span><span className={styles.metaVal}>{pat.filingNumber}</span></div>
                    <div><span className={styles.metaLabel}>Filed On</span><span className={styles.metaVal}>{pat.filingDate}</span></div>
                    <div><span className={styles.metaLabel}>Inventors</span><span className={styles.metaVal}>{pat.inventors.join(', ')}</span></div>
                    <div><span className={styles.metaLabel}>Category</span><span className={styles.metaVal}>{pat.category}</span></div>
                  </div>
                  <p className={styles.patentDesc}>{pat.description}</p>
                </div>
              ))}
            </div>
          )}

          {/* MODELS */}
          {activeTab === 'models' && (
            <div className={styles.modelsGrid}>
              {predictiveModels.map((m) => {
                const paper = getLinkedPaper(m.id);
                return (
                  <div key={m.id} className={styles.modelCard}>
                    <div className={styles.modelHeader}>
                      <span className={styles.modelIcon}>🤖</span>
                      <div>
                        <h3 className={styles.modelName}>{m.name}</h3>
                        <p className={styles.modelType}>{m.type}</p>
                      </div>
                    </div>
                    <div className={styles.modelMetrics}>
                      <div className={styles.metric}>
                        <span className={styles.metricVal} style={{ color: '#06d6a0' }}>{m.accuracy}%</span>
                        <span className={styles.metricLabel}>Accuracy</span>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricVal} style={{ color: '#00b4d8' }}>{m.auc}</span>
                        <span className={styles.metricLabel}>AUC-ROC</span>
                      </div>
                      <div className={styles.metric}>
                        <span className={styles.metricVal} style={{ color: '#f59e0b' }}>{m.datasetSize.toLocaleString()}</span>
                        <span className={styles.metricLabel}>Samples</span>
                      </div>
                    </div>
                    <div className={styles.accuracyBar}>
                      <div style={{ width: `${m.accuracy}%`, background: 'var(--gradient-teal)' }} className={styles.accFill} />
                    </div>
                    <p className={styles.modelDesc}>{m.description}</p>
                    <p style={{ fontSize: '0.82rem', marginBottom: '0.5rem' }}>
                      <span className={styles.metaLabel}>Dataset: </span>
                      <span style={{ color: 'var(--teal-light)' }}>{m.dataset}</span>
                    </p>
                    <div className={styles.modelFeatures}>
                      {m.features.map((f) => <span key={f} className="badge badge-blue">{f}</span>)}
                    </div>
                    <div className={styles.modelTags}>
                      {m.tags.map((t) => <span key={t} className="badge badge-purple">{t}</span>)}
                    </div>
                    {/* Linked paper */}
                    {paper && (
                      <div className={styles.linkedModel} style={{ marginTop: '1rem' }}>
                        <span className={styles.linkedLabel}>📄 Published in:</span>
                        <button className={`badge badge-green ${styles.linkedBadge}`}
                          onClick={() => setActiveTab('papers')}>
                          {paper.title.length > 60 ? paper.title.slice(0, 60) + '…' : paper.title} →
                        </button>
                      </div>
                    )}
                    {m.githubUrl && (
                      <a href={m.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.82rem', marginTop: '1rem' }}>
                        🔗 GitHub Repository
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
