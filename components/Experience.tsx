import styles from './Experience.module.css';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  skills: string[];
  type: 'work' | 'education';
}

const experiences: ExperienceItem[] = [
  {
    type: 'work',
    role: 'Senior Full Stack Developer',
    company: 'TechCorp Inc.',
    period: '2022 – Present',
    location: 'San Francisco, CA',
    description: [
      'Led development of a microservices architecture serving 500K+ daily users',
      'Reduced page load times by 60% through performance optimizations',
      'Mentored 4 junior developers and established code review practices',
    ],
    skills: ['React', 'Node.js', 'AWS', 'Kubernetes'],
  },
  {
    type: 'work',
    role: 'Full Stack Developer',
    company: 'StartupXYZ',
    period: '2020 – 2022',
    location: 'Remote',
    description: [
      'Built and shipped 3 major product features from concept to production',
      'Designed and implemented a real-time notification system using WebSockets',
      'Integrated 10+ third-party APIs including payment gateways and analytics tools',
    ],
    skills: ['Vue.js', 'Python', 'PostgreSQL', 'Docker'],
  },
  {
    type: 'work',
    role: 'Frontend Developer',
    company: 'Digital Agency Co.',
    period: '2019 – 2020',
    location: 'New York, NY',
    description: [
      'Developed responsive web applications for 15+ clients across various industries',
      'Collaborated with design team to implement pixel-perfect UI components',
      'Improved accessibility scores to 98+ for all client websites',
    ],
    skills: ['React', 'CSS', 'JavaScript', 'WordPress'],
  },
  {
    type: 'education',
    role: 'B.S. Computer Science',
    company: 'University of California, Berkeley',
    period: '2015 – 2019',
    location: 'Berkeley, CA',
    description: [
      'Graduated with honors, GPA 3.8/4.0',
      'Focused on software engineering, algorithms, and distributed systems',
      'President of the Web Development Club',
    ],
    skills: ['Algorithms', 'Data Structures', 'Systems', 'ML'],
  },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionTag}>My Journey</div>
          <h2 className={styles.heading}>Experience & Education</h2>
          <p className={styles.subheading}>
            My professional timeline and academic background
          </p>
        </div>

        <div className={styles.timeline}>
          {experiences.map((exp, idx) => (
            <div key={idx} className={`${styles.item} ${exp.type === 'education' ? styles.education : ''}`}>
              <div className={styles.marker}>
                <div className={styles.dot}>
                  {exp.type === 'work'
                    ? <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2zM4 9h16v2H4V9zm0 4h4v4H4v-4zm6 0h10v4H10v-4z"/></svg>
                    : <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zM5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/></svg>
                  }
                </div>
              </div>
              <div className={styles.content}>
                <div className={styles.contentHeader}>
                  <div>
                    <h3 className={styles.role}>{exp.role}</h3>
                    <div className={styles.company}>
                      <span className={styles.companyName}>{exp.company}</span>
                      <span className={styles.separator}>•</span>
                      <span className={styles.location}>{exp.location}</span>
                    </div>
                  </div>
                  <span className={styles.period}>{exp.period}</span>
                </div>
                <ul className={styles.descList}>
                  {exp.description.map((d, i) => (
                    <li key={i} className={styles.descItem}>
                      <span className={styles.bullet}>▸</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className={styles.skills}>
                  {exp.skills.map((skill) => (
                    <span key={skill} className={styles.skill}>{skill}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
