import styles from "./page.module.css";

const firstAidTopics = [
  { title: "CPR", description: "Cardiopulmonary resuscitation steps", icon: "🫀" },
  { title: "Bleeding", description: "How to stop excessive bleeding", icon: "🩸" },
  { title: "Burns", description: "Treating minor and major burns", icon: "🔥" },
  { title: "Choking", description: "Heimlich maneuver for choking", icon: "🫁" },
  { title: "Heart Attack", description: "Recognizing and responding", icon: "⚕️" },
  { title: "Poisoning", description: "Immediate steps for poisoning", icon: "🧪" },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerIcon}>🚑</div>
        <h1 className={styles.title}>First Aid Assistant</h1>
        <p className={styles.subtitle}>Quick and reliable actions for emergency situations</p>
      </header>

      <main className={styles.main}>
        <section className={styles.emergencySection}>
          <div className={styles.emergencyPulse}></div>
          <a href="tel:911" className={`${styles.button} ${styles.emergencyButton}`}>
            <span className={styles.phoneIcon}>📞</span>
            CALL 911
          </a>
        </section>

        <section className={styles.topicsSection}>
          <h2 className={styles.sectionTitle}>Common Emergencies</h2>
          <div className={styles.grid}>
            {firstAidTopics.map((topic) => (
              <div key={topic.title} className={styles.card}>
                <div className={styles.cardIcon}>{topic.icon}</div>
                <div className={styles.cardContent}>
                  <h3>{topic.title}</h3>
                  <p>{topic.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
