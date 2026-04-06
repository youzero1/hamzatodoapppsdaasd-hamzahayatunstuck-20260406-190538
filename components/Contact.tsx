'use client';

import { useState, FormEvent } from 'react';
import styles from './Contact.module.css';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const contactInfo = [
  {
    icon: '📍',
    label: 'Location',
    value: 'San Francisco, CA',
    sub: 'Open to remote work',
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'alex@example.com',
    sub: 'Reply within 24 hours',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+1 (555) 123-4567',
    sub: 'Mon-Fri, 9am-6pm PST',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((res) => setTimeout(res, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.sectionTag}>Get In Touch</div>
          <h2 className={styles.heading}>Let&apos;s Work Together</h2>
          <p className={styles.subheading}>
            Have a project in mind? Let&apos;s talk about how we can create something amazing.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoSection}>
            <div className={styles.infoCards}>
              {contactInfo.map((info) => (
                <div key={info.label} className={styles.infoCard}>
                  <span className={styles.infoIcon}>{info.icon}</span>
                  <div>
                    <div className={styles.infoLabel}>{info.label}</div>
                    <div className={styles.infoValue}>{info.value}</div>
                    <div className={styles.infoSub}>{info.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.availability}>
              <div className={styles.availDot} />
              <div>
                <div className={styles.availTitle}>Available for Work</div>
                <div className={styles.availDesc}>Currently accepting new projects and full-time opportunities</div>
              </div>
            </div>
          </div>

          <div className={styles.formSection}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  className={styles.resetBtn}
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }); }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={styles.input}
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className={styles.field}>
                    <label className={styles.label} htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className={styles.input}
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="subject">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    className={styles.input}
                    placeholder="Project Discussion"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.field}>
                  <label className={styles.label} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className={styles.textarea}
                    placeholder="Tell me about your project..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? (
                    <>
                      <span className={styles.spinner} />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
