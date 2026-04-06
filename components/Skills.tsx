import styles from './Skills.module.css';

interface Skill {
  name: string;
  level: number;
  color: string;
}

interface SkillCategory {
  category: string;
  icon: string;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React / Next.js', level: 95, color: '#61dafb' },
      { name: 'TypeScript', level: 90, color: '#3178c6' },
      { name: 'HTML & CSS', level: 95, color: '#e34f26' },
      { name: 'Vue.js', level: 75, color: '#42b883' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    skills: [
      { name: 'Node.js / Express', level: 88, color: '#68a063' },
      { name: 'Python / Django', level: 80, color: '#3776ab' },
      { name: 'PostgreSQL', level: 82, color: '#336791' },
      { name: 'GraphQL', level: 72, color: '#e535ab' },
    ],
  },
  {
    category: 'DevOps & Tools',
    icon: '🛠️',
    skills: [
      { name: 'Docker / Kubernetes', level: 78, color: '#2496ed' },
      { name: 'AWS / GCP', level: 75, color: '#ff9900' },
      { name: 'Git / GitHub', level: 92, color: '#f34f29' },
      { name: 'CI/CD Pipelines', level: 80, color: '#6c63ff' },
    ],
  },
];

const techStack = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python',
  'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'AWS',
  'GraphQL', 'REST APIs', 'Git', 'Linux', 'Figma',
];

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionTag}>My Skills</div>
          <h2 className={styles.heading}>Technologies I Work With</h2>
          <p className={styles.subheading}>
            A comprehensive overview of my technical expertise and proficiency levels
          </p>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((cat) => (
            <div key={cat.category} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{cat.icon}</span>
                <h3 className={styles.cardTitle}>{cat.category}</h3>
              </div>
              <div className={styles.skillList}>
                {cat.skills.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <div className={styles.skillMeta}>
                      <span className={styles.skillName}>{skill.name}</span>
                      <span className={styles.skillPercent}>{skill.level}%</span>
                    </div>
                    <div className={styles.barBg}>
                      <div
                        className={styles.barFill}
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}99, ${skill.color})`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.techSection}>
          <h3 className={styles.techTitle}>Tech Stack</h3>
          <div className={styles.techCloud}>
            {techStack.map((tech) => (
              <span key={tech} className={styles.techTag}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
