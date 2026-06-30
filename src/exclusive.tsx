import { Button, Reveal, SectionLabel } from './ui.js';
import styles from './exclusive.module.css';

export function Exclusive() {
  return (
    <section className={styles.section} id="features">
      <div className={styles.container}>
        <Reveal>
          <SectionLabel>Shadow</SectionLabel>
          <h2 className={styles.heading}>Exclusive Features</h2>
          <p className={styles.sub}>Unique to the Shadow Client experience.</p>
        </Reveal>
        <Reveal>
          <div className={styles.row}>
            <div className={styles.textCol}>
              <h3 className={styles.featureTitle}>Public Profiles</h3>
              <p className={styles.featureText}>Browse trusted profiles made by the community to match your playstyle.</p>
              <ul className={styles.list}>
                <li>Find the best profiles based on reviews</li>
                <li>Upload your own profile to the community</li>
                <li>Privately share a profile with close friends</li>
              </ul>
              <Button>Learn more →</Button>
            </div>
            <div className={styles.mockProfiles}>
              <div className={styles.mockHead}>Public Profiles</div>
              <div className={styles.profileCard}>
                <div className={styles.profileAvatar} />
                <div>
                  <div className={styles.profileName}>Ghost Setup</div>
                  <div className={styles.profileMeta}>Most popular</div>
                </div>
                <span className={styles.like}>👍 1.5K</span>
              </div>
              <div className={styles.profileRow} />
              <div className={styles.profileRow} />
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className={`${styles.row} ${styles.rowReverse}`}>
            <div className={styles.mockInventory}>
              <div className={styles.mockHead}>Bedwars Inventory</div>
              <div className={styles.invGrid}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={styles.invSlot} />
                ))}
              </div>
              <div className={styles.invBar}><span>INVENTORY PRESETS</span></div>
              <div className={styles.invPreset} />
            </div>
            <div className={styles.textCol}>
              <h3 className={styles.featureTitle}>Inventory Manager</h3>
              <p className={styles.featureText}>Automatically manage your inventory.</p>
              <ul className={styles.list}>
                <li>Pick your desired hotbar item setup</li>
                <li>Use enhanced item selection to specify exact items</li>
                <li>Drop unneeded items with inventory filters</li>
              </ul>
              <Button>Learn more →</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

