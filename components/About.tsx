import styles from './About.module.css';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '30+', label: 'Happy Clients' },
  { value: '10+', label: 'Open Source Contributions' },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.imageArea}>
          <div className={styles.imageCard}>
            <div className={styles.imageInner}>
              <div className={styles.codeBlock}>
                <div className={styles.codeLine}>
                  <span className={styles.keyword}>const</span>
                  <span className={styles.variable}> developer</span>
                  <span> = {'{'}</span>
                </div>
                <div className={`${styles.codeLine} ${styles.indent}`}>
                  <span className={styles.prop}>name</span>
                  <span>: </span>
                  <span className={styles.string}>&apos;Alex Johnson&apos;</span>
                  <span>,</span>
                </div>
                <div className={`${styles.codeLine} ${styles.indent}`}>
                  <span className={styles.prop}>role</span>
                  <span>: </span>
                  <span className={styles.string}>&apos;Full Stack Dev&apos;</span>
                  <span>,</span>
                </div>
                <div className={`${styles.codeLine} ${styles.indent}`}>
                  <span className={styles.prop}>location</span>
                  <span>: </span>
                  <span className={styles.string}>&apos;San Francisco, CA&apos;</span>
                  <span>,</span>
                </div>
                <div className={`${styles.codeLine} ${styles.indent}`}>
                  <span className={styles.prop}>available</span>
                  <span>: </span>
                  <span className={styles.bool}>true</span>
                </div>
                <div className={styles.codeLine}>
                  <span>{'}'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.statGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statValue}>{stat.value}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.textArea}>
          <div className={styles.sectionTag}>About Me</div>
          <h2 className={styles.heading}>
            Passionate About Building
            <span className={styles.highlight}> Great Things</span>
          </h2>
          <p className={styles.paragraph}>
            I&apos;m a Full Stack Developer with over 5 years of experience creating
            web applications that are both beautiful and functional. I specialize in
            React, Next.js, Node.js, and cloud technologies.
          </p>
          <p className={styles.paragraph}>
            My journey started with a love for problem-solving and has evolved into
            a career building products that help businesses grow. I&apos;m committed
            to writing clean, maintainable code and creating seamless user experiences.
          </p>
          <p className={styles.paragraph}>
            When I&apos;m not coding, you can find me contributing to open-source
            projects, writing technical articles, or exploring the latest trends in
            web development.
          </p>
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📍 Location</span>
              <span className={styles.infoValue}>San Francisco, CA</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>📧 Email</span>
              <span className={styles.infoValue}>alex@example.com</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>🎓 Degree</span>
              <span className={styles.infoValue}>B.S. Computer Science</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>💼 Status</span>
              <span className={`${styles.infoValue} ${styles.available}`}>Available for work</span>
            </div>
          </div>
          <a href="/resume.pdf" className={styles.resumeBtn} download>
            Download Resume
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
