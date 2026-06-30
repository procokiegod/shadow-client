import { useState } from 'react';
import { Button, Reveal } from './ui.js';
import styles from './modules.module.css';

const MODULES = [
  { name: 'Combat', key: false },
  { name: 'AutoClicker', key: 'S' },
  { name: 'AimAssist', key: 'Q', active: true },
  { name: 'SilentAura', key: false },
  { name: 'HitSelect', key: false },
  { name: 'Reach', key: 'R' },
];

export function Modules() {
  const [active, setActive] = useState('AimAssist');

  return (
    <section className={styles.section} id="modules">
      <div className={styles.container}>
        <Reveal>
          <div className={styles.panel}>
            <h2 className={styles.title}>Undetected Ghost Modules</h2>
            <p className={styles.subtitle}>Built for practice servers. Bypass anywhere.</p>
            <div className={styles.grid}>
              <div className={styles.promo}>
                <span className={styles.promoIcon}>◆</span>
                <h3 className={styles.promoTitle}>Made for Closet Cheating</h3>
                <p className={styles.promoText}>
                  Shadow Client is designed specifically for the closet cheater, giving
                  you undetectable advantages in combat without ever getting flagged.
                </p>
                <Button>Explore all features</Button>
              </div>
              <div className={styles.moduleList}>
                <div className={styles.moduleHead}>Combat ▾</div>
                {MODULES.slice(1).map((m) => (
                  <button
                    key={m.name}
                    type="button"
                    className={`${styles.moduleRow} ${active === m.name ? styles.moduleRowActive : ''}`}
                    onClick={() => setActive(m.name)}
                  >
                    <span>{m.name}</span>
                    {m.key && <span className={styles.key}>{m.key}</span>}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
        <div className={styles.cards}>
          <Reveal delay={100}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>⚔️</div>
              <h4>Dependable combat modules.</h4>
              <p>All combat modules are designed to last, built to work in any environment without relying on temporary bypasses.</p>
              <span className={`${styles.tag} ${styles.tagPurple}`}>AimAssist</span>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>🎯</div>
              <h4>Silent aiming.</h4>
              <p>Enhance your performance with super-human aiming on multiple modules, while retaining full control of your cursor.</p>
              <span className={`${styles.tag} ${styles.tagMagenta}`}>SilentAura</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

