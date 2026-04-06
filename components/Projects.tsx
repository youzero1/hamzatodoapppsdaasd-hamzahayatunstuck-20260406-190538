'use client';

import { useState } from 'react';
import styles from './Projects.module.css';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  category: string;
  color: string;
  emoji: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured online store with React, Node.js, and Stripe payments. Includes admin dashboard, inventory management, and real-time analytics.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
    category: 'fullstack',
    color: '#6c63ff',
    emoji: '🛒',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 2,
    title: 'AI Task Manager',
    description: 'Intelligent project management tool with AI-powered task prioritization, natural language processing, and team collaboration features.',
    tags: ['Next.js', 'OpenAI', 'TypeScript', 'Prisma'],
    category: 'fullstack',
    color: '#ff6584',
    emoji: '🤖',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 3,
    title: 'Real-Time Chat App',
    description: 'Scalable messaging platform supporting 10k+ concurrent users with WebSockets, end-to-end encryption, and file sharing.',
    tags: ['Socket.io', 'React', 'Node.js', 'MongoDB'],
    category: 'fullstack',
    color: '#43e97b',
    emoji: '💬',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 4,
    title: 'Analytics Dashboard',
    description: 'Beautiful data visualization dashboard with interactive charts, customizable widgets, and CSV export functionality.',
    tags: ['React', 'D3.js', 'TypeScript', 'REST API'],
    category: 'frontend',
    color: '#f7971e',
    emoji: '📊',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 5,
    title: 'DevOps Pipeline Tool',
    description: 'CLI tool for automating deployment pipelines with Docker, Kubernetes integration, and multi-cloud support.',
    tags: ['Node.js', 'Docker', 'Kubernetes', 'AWS'],
    category: 'backend',
    color: '#2196f3',
    emoji: '🚀',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
  {
    id: 6,
    title: 'Design System Library',
    description: 'Comprehensive UI component library with 50+ components, dark/light themes, accessibility support, and Storybook documentation.',
    tags: ['React', 'TypeScript', 'Storybook', 'CSS'],
    category: 'frontend',
    color: '#9c27b0',
    emoji: '🎨',
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
  },
];

const filters = ['all', 'fullstack', 'frontend', 'backend'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionTag}>Portfolio</div>
          <h2 className={styles.heading}>Featured Projects</h2>
          <p className={styles.subheading}>
            A selection of projects I&apos;ve built — from concept to deployment
          </p>
        </div>

        <div className={styles.filters}>
          {filters.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filtered.map((project) => (
            <div key={project.id} className={`${styles.card} ${project.featured ? styles.featured : ''}`}>
              <div className={styles.cardTop} style={{ background: `linear-gradient(135deg, ${project.color}22, ${project.color}11)` }}>
                <span className={styles.cardEmoji}>{project.emoji}</span>
                {project.featured && <span className={styles.featuredBadge}>Featured</span>}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.description}</p>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                  ))}
                </div>
                <div className={styles.cardLinks}>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className={styles.liveBtn}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
                    </svg>
                    Live Demo
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className={styles.githubBtn}>
                    <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                      <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.09.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                    </svg>
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.more}>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={styles.moreBtn}>
            View All Projects on GitHub
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
