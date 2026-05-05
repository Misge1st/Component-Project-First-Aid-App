import Link from "next/link";
import styles from "./page.module.css";

export default function Profile() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Your Profile</h1>
        <Link href="/" className={styles.backLink}>
          &larr; Back to Home
        </Link>
      </div>
      <div className={styles.card}>
        <div className={styles.avatar}>👤</div>
        <h2 className={styles.name}>John Doe</h2>
        <p className={styles.email}>john.doe@example.com</p>
        <div className={styles.details}>
          <div className={styles.detailItem}>
            <strong>Role:</strong> First Aid Responder
          </div>
          <div className={styles.detailItem}>
            <strong>Certifications:</strong> CPR, Basic First Aid
          </div>
          <div className={styles.detailItem}>
            <strong>Joined:</strong> January 2024
          </div>
        </div>
      </div>
    </div>
  );
}
