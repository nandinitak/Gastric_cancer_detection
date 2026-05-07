'use client';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import styles from './page.module.css';

type EntryType = 'paper' | 'patent' | 'model';

interface FormData {
  type: EntryType;
  title: string;
  authors: string;
  journal: string;
  year: string;
  tags: string;
  doi: string;
  status: string;
  filingNumber: string;
  jurisdiction: string;
  filingDate: string;
  category: string;
  modelType: string;
  accuracy: string;
  auc: string;
  dataset: string;
  datasetSize: string;
  features: string;
  githubUrl: string;
  linkedPaperId: string;
}

const emptyForm: FormData = {
  type: 'paper', title: '', authors: 'Badal Gupta, Nandini Tak', journal: '',
  year: new Date().getFullYear().toString(), tags: '', doi: '', status: 'published',
  filingNumber: '', jurisdiction: 'India', filingDate: '', category: '',
  modelType: '', accuracy: '', auc: '', dataset: '', datasetSize: '',
  features: '', githubUrl: '', linkedPaperId: '',
};

export default function AdminPage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [form, setForm] = useState<FormData>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (status === 'unauthenticated') router.replace('/admin/login');
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ color: 'var(--text-muted)' }}>⏳ Verifying access…</p>
      </div>
    );
  }

  if (!session) return null;

  const handleChange = (field: keyof FormData, value: string) =>
    setForm((f) => ({ ...f, [field]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleReset = () => { setForm(emptyForm); setSubmitted(false); };

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">⚙️ Admin Panel</div>
          <h1>Research Entry Manager</h1>
          <p>Welcome, <strong style={{ color: 'var(--teal-primary)' }}>{session.user?.name ?? session.user?.email}</strong>. Add or manage research papers, patents, and ML models.</p>
        </div>
      </div>

      <section className={`section ${styles.adminSection}`}>
        <div className="container">
          <div className={styles.sessionBanner}>
            <span>✅ Authenticated as <strong>{session.user?.email}</strong></span>
          </div>

          <div className={styles.adminGrid}>
            {/* FORM */}
            <div className={styles.formPanel}>
              {submitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIcon}>✅</div>
                  <h2>Entry Submitted!</h2>
                  <p>Copy the JSON below and paste it into <code>src/data/research.ts</code> under the appropriate array.</p>
                  <div className={styles.successData}>
                    <strong>Generated JSON:</strong>
                    <pre>{JSON.stringify(form, null, 2)}</pre>
                  </div>
                  <button className="btn btn-teal" onClick={handleReset} style={{ marginTop: '1.5rem' }}>+ Add Another Entry</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 className={styles.formTitle}>New Research Entry</h3>

                  <div className="form-group">
                    <label className="form-label">Entry Type</label>
                    <div className="tabs" style={{ width: '100%' }}>
                      {(['paper', 'patent', 'model'] as EntryType[]).map((t) => (
                        <button key={t} type="button"
                          className={`tab-btn ${form.type === t ? 'active' : ''}`}
                          style={{ flex: 1, textAlign: 'center' }}
                          onClick={() => handleChange('type', t)}>
                          {t === 'paper' ? '📄 Paper' : t === 'patent' ? '⚖️ Patent' : '🤖 Model'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Title *</label>
                    <input className="form-input" placeholder="Full title" value={form.title} onChange={(e) => handleChange('title', e.target.value)} required />
                  </div>

                  <div className={styles.twoCol}>
                    <div className="form-group">
                      <label className="form-label">Author(s) *</label>
                      <input className="form-input" value={form.authors} onChange={(e) => handleChange('authors', e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Year *</label>
                      <input className="form-input" type="number" min="2020" max="2030" value={form.year} onChange={(e) => handleChange('year', e.target.value)} required />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Tags (comma separated)</label>
                    <input className="form-input" placeholder="CNN, Endoscopy, Deep Learning" value={form.tags} onChange={(e) => handleChange('tags', e.target.value)} />
                  </div>

                  {form.type === 'paper' && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Journal / Conference *</label>
                        <input className="form-input" placeholder="Journal of Cancer Research..." value={form.journal} onChange={(e) => handleChange('journal', e.target.value)} required />
                      </div>
                      <div className={styles.twoCol}>
                        <div className="form-group">
                          <label className="form-label">DOI</label>
                          <input className="form-input" placeholder="10.1007/..." value={form.doi} onChange={(e) => handleChange('doi', e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Status</label>
                          <select className="form-select" value={form.status} onChange={(e) => handleChange('status', e.target.value)}>
                            <option value="published">Published</option>
                            <option value="accepted">Accepted</option>
                            <option value="under-review">Under Review</option>
                            <option value="preprint">Preprint</option>
                          </select>
                        </div>
                      </div>
                    </>
                  )}

                  {form.type === 'patent' && (
                    <>
                      <div className={styles.twoCol}>
                        <div className="form-group">
                          <label className="form-label">Filing Number *</label>
                          <input className="form-input" placeholder="IN20241XXXXXXX" value={form.filingNumber} onChange={(e) => handleChange('filingNumber', e.target.value)} required />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Jurisdiction</label>
                          <select className="form-select" value={form.jurisdiction} onChange={(e) => handleChange('jurisdiction', e.target.value)}>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="International">International (PCT)</option>
                          </select>
                        </div>
                      </div>
                      <div className={styles.twoCol}>
                        <div className="form-group">
                          <label className="form-label">Filing Date</label>
                          <input className="form-input" type="date" value={form.filingDate} onChange={(e) => handleChange('filingDate', e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Status</label>
                          <select className="form-select" value={form.status} onChange={(e) => handleChange('status', e.target.value)}>
                            <option value="filed">Filed</option>
                            <option value="pending">Pending</option>
                            <option value="granted">Granted</option>
                          </select>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Category</label>
                        <input className="form-input" placeholder="Medical Device / AI" value={form.category} onChange={(e) => handleChange('category', e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Description *</label>
                        <textarea className="form-textarea" placeholder="Patent description..." value={form.journal} onChange={(e) => handleChange('journal', e.target.value)} required rows={4} />
                      </div>
                    </>
                  )}

                  {form.type === 'model' && (
                    <>
                      <div className="form-group">
                        <label className="form-label">Model Architecture *</label>
                        <input className="form-input" placeholder="CNN, YOLOv11, Transformer..." value={form.modelType} onChange={(e) => handleChange('modelType', e.target.value)} required />
                      </div>
                      <div className={styles.threeCol}>
                        <div className="form-group">
                          <label className="form-label">Accuracy (%)</label>
                          <input className="form-input" type="number" step="0.1" placeholder="94.3" value={form.accuracy} onChange={(e) => handleChange('accuracy', e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">AUC-ROC</label>
                          <input className="form-input" type="number" step="0.01" placeholder="0.97" value={form.auc} onChange={(e) => handleChange('auc', e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Dataset Size</label>
                          <input className="form-input" type="number" placeholder="12450" value={form.datasetSize} onChange={(e) => handleChange('datasetSize', e.target.value)} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Dataset Name</label>
                        <input className="form-input" placeholder="Kvasir-SEG, TCGA-STAD..." value={form.dataset} onChange={(e) => handleChange('dataset', e.target.value)} />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Features (comma separated)</label>
                        <input className="form-input" placeholder="Endoscopic Images, Attention Maps..." value={form.features} onChange={(e) => handleChange('features', e.target.value)} />
                      </div>
                      <div className={styles.twoCol}>
                        <div className="form-group">
                          <label className="form-label">GitHub URL</label>
                          <input className="form-input" placeholder="https://github.com/..." value={form.githubUrl} onChange={(e) => handleChange('githubUrl', e.target.value)} />
                        </div>
                        <div className="form-group">
                          <label className="form-label">Linked Paper ID</label>
                          <input className="form-input" placeholder="p1 or p2" value={form.linkedPaperId} onChange={(e) => handleChange('linkedPaperId', e.target.value)} />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Description *</label>
                        <textarea className="form-textarea" placeholder="Model description, methodology..." value={form.journal} onChange={(e) => handleChange('journal', e.target.value)} required rows={4} />
                      </div>
                    </>
                  )}

                  <button type="submit" className="btn btn-teal" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                    {submitting ? '⏳ Processing…' : '✅ Submit Entry'}
                  </button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div className={styles.helpPanel}>
              <h4 className={styles.helpTitle}>📖 Instructions</h4>
              <div className={styles.helpSteps}>
                {[
                  { step: '1', text: 'Choose entry type — Paper, Patent, or Model' },
                  { step: '2', text: 'Fill required fields and submit' },
                  { step: '3', text: 'Copy the JSON from the output preview' },
                  { step: '4', text: 'Paste into src/data/research.ts in the correct array' },
                  { step: '5', text: 'Push changes to GitHub — Vercel auto-deploys' },
                ].map((s) => (
                  <div key={s.step} className={styles.helpStep}>
                    <span className={styles.helpStepNum}>{s.step}</span>
                    <p>{s.text}</p>
                  </div>
                ))}
              </div>
              <div className="divider" />
              <div className="alert alert-info">
                <span>📁</span>
                <div><strong>PDF Upload:</strong> Place PDFs in <code>public/papers/</code> and add <code>pdfFile</code> to the paper entry.</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
