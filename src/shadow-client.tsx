import { Routes, Route } from 'react-router-dom';
import { Navbar } from './navbar.js';
import { Hero } from './hero.js';
import { Modules } from './modules.js';
import { Exclusive } from './exclusive.js';
import { CloserLook } from './closer-look.js';
import { Pricing } from './pricing.js';
import { CtaFooter } from './cta-footer.js';

import './theme.module.css';
import styles from './styles.module.css';

function LandingPage() {
  return (
    <div className={styles.page}>
      <div className={styles.ambient}>
        <div className={`${styles.blob} ${styles.blob1}`} />
        <div className={`${styles.blob} ${styles.blob2}`} />
        <div className={`${styles.blob} ${styles.blob3}`} />
      </div>

      <div className={styles.content}>
        <Navbar />
        <Hero />
        <Modules />
        <Exclusive />
        <CloserLook />
        <Pricing />
        <CtaFooter />
      </div>
    </div>
  );
}

export function ShadowClient() {
  return (
    <Routes>
      <Route path="*" element={<LandingPage />} />
    </Routes>
  );
}