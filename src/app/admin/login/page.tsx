'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';
import styles from './page.module.css';

function LoginContent() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const params = useSearchParams();
  const error = params.get('error');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') router.replace('/admin');
  }, [status, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });

    if (res?.ok) {
      router.replace('/admin');
    } else {
      router.replace('/admin/login?error=CredentialsSignin');
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginWrap}>
      <div className={styles.loginCard}>
        <div className={styles.lockIcon}>🔐</div>
        <h1 className={styles.loginTitle}>Admin Access</h1>
        <p className={styles.loginSub}>Gastric Cancer Hub — Research Panel</p>
        <p className={styles.loginDesc}>
          Restricted to authorised researchers only.<br />
          Sign in with your email and password.
        </p>

        {error === 'AccessDenied' && (
          <div className={styles.errorBox}>
            ⛔ You are not authorised to access this panel.
          </div>
        )}
        {error === 'CredentialsSignin' && (
          <div className={styles.errorBox}>
            ⚠️ Invalid email or password.
          </div>
        )}

        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input 
            type="email" 
            placeholder="Your Email" 
            className="form-input" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginBottom: '1rem' }}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="form-input" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginBottom: '1.5rem' }}
          />
          <button
            type="submit"
            className="btn btn-teal"
            style={{ width: '100%', justifyContent: 'center' }}
            disabled={loading || status === 'loading'}
          >
            {loading || status === 'loading' ? 'Checking…' : 'Sign In'}
          </button>
        </form>

        <p className={styles.hint}>
          🔒 Access restricted to:<br />
          <code>nandinitak298@gmail.com</code><br />
          <code>badal333611@gmail.com</code>
        </p>
      </div>
    </div>
  );
}

export default function AdminLoginPage() {
  return (
    <Suspense>
      <LoginContent />
    </Suspense>
  );
}
