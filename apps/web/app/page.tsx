import Link from "next/link";
import styles from "./login.module.css";

export default function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.headerIcon}>🚑</div>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>Sign in to access your First Aid Assistant</p>
        
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input type="email" id="email" className={styles.input} placeholder="you@example.com" />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.label}>Password</label>
            <input type="password" id="password" className={styles.input} placeholder="••••••••" />
          </div>
          
          <Link href="/dashboard" className={styles.submitButton}>
            Sign In
          </Link>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            <Link href="/profile" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>
              View Profile
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
