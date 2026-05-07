'use client';
import { useState } from 'react';
import styles from './page.module.css';

const questions = [
  {
    id: 1,
    question: 'What is your age group?',
    icon: '🎂',
    options: [
      { label: 'Under 40', score: 0 },
      { label: '40–50', score: 1 },
      { label: '51–60', score: 2 },
      { label: '61–70', score: 3 },
      { label: 'Above 70', score: 4 },
    ],
  },
  {
    id: 2,
    question: 'What is your gender?',
    icon: '⚧️',
    options: [
      { label: 'Female', score: 0 },
      { label: 'Male', score: 2 },
      { label: 'Prefer not to say', score: 1 },
    ],
  },
  {
    id: 3,
    question: 'Have you been tested positive for H. pylori (Helicobacter pylori)?',
    icon: '🦠',
    options: [
      { label: 'No / Never tested', score: 0 },
      { label: 'Yes, and treated', score: 1 },
      { label: 'Yes, untreated', score: 4 },
      { label: 'Unknown', score: 2 },
    ],
  },
  {
    id: 4,
    question: 'How would you describe your diet?',
    icon: '🍱',
    options: [
      { label: 'Fresh vegetables/fruits daily, low salt', score: 0 },
      { label: 'Moderate processed foods, some salt', score: 1 },
      { label: 'High in salted, pickled, or smoked foods', score: 3 },
      { label: 'Frequent fast food / processed meat', score: 3 },
    ],
  },
  {
    id: 5,
    question: 'Do you smoke or use tobacco?',
    icon: '🚬',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Former smoker (quit > 5 years ago)', score: 1 },
      { label: 'Occasional smoker', score: 2 },
      { label: 'Daily smoker', score: 3 },
    ],
  },
  {
    id: 6,
    question: 'Any family history of gastric cancer?',
    icon: '🧬',
    options: [
      { label: 'None', score: 0 },
      { label: 'Distant relatives', score: 1 },
      { label: 'First-degree relative (parent/sibling)', score: 3 },
      { label: 'Multiple family members', score: 4 },
    ],
  },
  {
    id: 7,
    question: 'Do you experience any of these symptoms persistently (> 2 weeks)?',
    icon: '🩺',
    options: [
      { label: 'None of the below', score: 0 },
      { label: 'Indigestion / heartburn', score: 1 },
      { label: 'Bloating after small meals', score: 2 },
      { label: 'Nausea, loss of appetite, or weight loss', score: 3 },
      { label: 'Black stools or vomiting blood', score: 5 },
    ],
  },
  {
    id: 8,
    question: 'How often do you consume alcohol?',
    icon: '🍺',
    options: [
      { label: 'Never', score: 0 },
      { label: 'Occasionally (< once a week)', score: 1 },
      { label: 'Weekly', score: 2 },
      { label: 'Daily', score: 3 },
    ],
  },
  {
    id: 9,
    question: 'Have you had a previous stomach ulcer or gastric surgery?',
    icon: '🔪',
    options: [
      { label: 'No', score: 0 },
      { label: 'Gastric ulcer treated > 10 years ago', score: 1 },
      { label: 'Previous partial gastrectomy', score: 3 },
      { label: 'Chronic gastritis or pernicious anemia', score: 3 },
    ],
  },
  {
    id: 10,
    question: 'When did you last have a gastric check-up (endoscopy/screening)?',
    icon: '📅',
    options: [
      { label: 'Within the last 1 year', score: 0 },
      { label: '1–3 years ago', score: 1 },
      { label: 'More than 3 years ago', score: 2 },
      { label: 'Never', score: 3 },
    ],
  },
];

function getRiskLevel(score: number) {
  if (score <= 5) return { level: 'Low Risk', color: '#06d6a0', icon: '✅', action: 'Maintain a healthy diet, stay active, and schedule regular check-ups. Continue annual health screenings.' };
  if (score <= 12) return { level: 'Moderate Risk', color: '#f59e0b', icon: '⚠️', action: 'Consider consulting a gastroenterologist. Get tested for H. pylori. Reduce processed food and salt intake. Schedule an endoscopy if over 50.' };
  if (score <= 18) return { level: 'High Risk', color: '#f97316', icon: '🔶', action: 'Consult a doctor or oncologist promptly. Request an upper GI endoscopy and H. pylori testing. Significant lifestyle and dietary changes are strongly advised.' };
  return { level: 'Very High Risk', color: '#ef4444', icon: '🚨', action: 'Seek immediate medical evaluation. Your symptoms and risk profile require urgent assessment. Do NOT delay — contact a gastroenterologist or oncologist today.' };
}

export default function SymptomCheckerPage() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
  const maxScore = questions.reduce((a, q) => a + Math.max(...q.options.map((o) => o.score)), 0);
  const progress = ((current) / questions.length) * 100;

  const handleSelect = (score: number, optIdx: number) => {
    setSelectedOption(optIdx);
    setAnswers((prev) => ({ ...prev, [current]: score }));
  };

  const handleNext = () => {
    if (current < questions.length - 1) {
      setCurrent((c) => c + 1);
      setSelectedOption(null);
    } else {
      setFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setAnswers({});
    setSelectedOption(null);
    setFinished(false);
  };

  const risk = getRiskLevel(totalScore);
  const q = questions[current];

  return (
    <>
      <div className="page-hero">
        <div className="page-hero-content">
          <div className="page-hero-tag section-tag">🩺 Interactive Tool</div>
          <h1>Gastric Cancer Symptom Checker</h1>
          <p>A 10-question risk assessment quiz. Answer honestly — the tool calculates your risk profile and provides personalized guidance. <strong>This is not a medical diagnosis.</strong></p>
        </div>
      </div>

      <section className={`section ${styles.checker}`}>
        <div className="container">
          <div className="alert alert-warning" style={{ maxWidth: 800, margin: '0 auto 2rem' }}>
            <span>⚠️</span>
            <div><strong>Medical Disclaimer:</strong> This tool is for educational awareness only. It does NOT replace professional medical advice, diagnosis, or treatment. Always consult a qualified physician.</div>
          </div>

          {!finished ? (
            <div className={styles.quizCard}>
              {/* Progress */}
              <div className={styles.progressBar}>
                <div className={styles.progressFill} style={{ width: `${progress}%` }} />
              </div>
              <div className={styles.progressLabel}>
                <span>Question {current + 1} of {questions.length}</span>
                <span>{Math.round(progress)}% Complete</span>
              </div>

              {/* Question */}
              <div className={styles.questionBlock}>
                <div className={styles.qIcon}>{q.icon}</div>
                <h2 className={styles.qText}>{q.question}</h2>
              </div>

              {/* Options */}
              <div className={styles.options}>
                {q.options.map((opt, i) => (
                  <button
                    key={i}
                    className={`${styles.option} ${selectedOption === i ? styles.selected : ''}`}
                    onClick={() => handleSelect(opt.score, i)}
                  >
                    <span className={styles.optCheck}>{selectedOption === i ? '✓' : ''}</span>
                    {opt.label}
                  </button>
                ))}
              </div>

              <button
                className={`btn btn-teal ${styles.nextBtn}`}
                onClick={handleNext}
                disabled={selectedOption === null}
              >
                {current < questions.length - 1 ? 'Next Question →' : 'See My Results →'}
              </button>
            </div>
          ) : (
            <div className={styles.result}>
              <div className={styles.resultIcon} style={{ color: risk.color }}>{risk.icon}</div>
              <h2 className={styles.resultLevel} style={{ color: risk.color }}>{risk.level}</h2>
              <div className={styles.scoreDisplay}>
                <span>Your Score: <strong style={{ color: risk.color }}>{totalScore}</strong> / {maxScore}</span>
              </div>

              <div className={styles.scoreBar}>
                <div className={styles.scoreFill} style={{ width: `${(totalScore / maxScore) * 100}%`, background: risk.color }} />
              </div>

              <div className={styles.zones}>
                <span style={{ color: '#06d6a0' }}>Low</span>
                <span style={{ color: '#f59e0b' }}>Moderate</span>
                <span style={{ color: '#f97316' }}>High</span>
                <span style={{ color: '#ef4444' }}>Very High</span>
              </div>

              <div className={styles.recommendation} style={{ borderColor: `${risk.color}44`, background: `${risk.color}11` }}>
                <strong>Recommended Action:</strong>
                <p>{risk.action}</p>
              </div>

              <div className={styles.resultActions}>
                <button className="btn btn-ghost" onClick={handleRestart}>↺ Retake Quiz</button>
                <a href="/early-detection" className="btn btn-teal">Learn About Symptoms →</a>
                <a href="/prevention-treatment" className="btn btn-outline">Prevention Guide →</a>
              </div>

              <div className={styles.answerSummary}>
                <h4>Your Answers Summary</h4>
                {questions.map((q, i) => (
                  <div key={i} className={styles.summaryRow}>
                    <span className={styles.summaryQ}>{q.question}</span>
                    <span className={styles.summaryA}>
                      {answers[i] !== undefined
                        ? q.options.find((o) => o.score === answers[i])?.label ?? '—'
                        : '—'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
