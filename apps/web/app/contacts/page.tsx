import Link from 'next/link';
import styles from './page.module.css';

export default function EmergencyContactsPage() {
  return (
    <div className={styles.contactsContainer}>
      <div className={styles.contactsCard}>
        <div className={styles.header}>
          <h1>Emergency Contacts</h1>
          <p>Quick access to essential emergency numbers.</p>
        </div>

        <div className={styles.contactList}>
          <div className={styles.contactItem}>
            <span className={styles.contactName}>General Emergency</span>
            <span className={styles.contactNumber}>911</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactName}>Poison Control</span>
            <span className={styles.contactNumber}>1-800-222-1222</span>
          </div>

          <div className={styles.contactItem}>
            <span className={styles.contactName}>Local Paramedics</span>
            <span className={styles.contactNumber}>555-0199</span>
          </div>
        </div>

        <Link href="/" className={styles.homeLink}>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
