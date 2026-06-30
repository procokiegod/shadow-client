import { Button, Reveal } from './ui.js';
import heroChar from './assets/hero-character.png';
import logo from './assets/logo.png';
import styles from './cta-footer.module.css';

const PAYHIP_URL = 'https://payhip.com/b/FjhBD';
const DISCORD_URL = 'https://discord.gg/shadowclient';

export function CtaFooter() {
  return (
    <>
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.cta}>
              <div className={styles.ctaCopy}>
                <h2 className={styles.ctaTitle}>Like Steroids for Minecraft</h2>
                <p className={styles.ctaText}>
                  Gain an unfair advantage over your opponents while remaining completely undetected. €20, one time, yours for life.
                </p>
                <Button href={PAYHIP_URL} large>Get started →</Button>
              </div>
              <img className={styles.ctaImg} src={heroChar} alt="Shadow Client character" />
            </div>
          </Reveal>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footInner}>
          <div className={styles.footBrand}>
            <div className={styles.logo}>
              <img className={styles.footLogoImg} src={logo} alt="Shadow Client logo" />
              SHADOW<span className={styles.logoAccent}>CLIENT</span>
            </div>
            <p className={styles.footTag}>The undetected ghost client. Since 2019.</p>
            <a className={styles.discordBtn} href={DISCORD_URL} target="_blank" rel="noreferrer">
              <span className={styles.discordIcon}>◆</span> Join our Discord
            </a>
          </div>
          <div className={styles.footCols}>
            <div className={styles.footCol}>
              <span className={styles.footHead}>Product</span>
              <a href="#top">Home</a>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
            </div>
            <div className={styles.footCol}>
              <span className={styles.footHead}>Account</span>
              <a href={PAYHIP_URL}>Buy now</a>
              <a href={PAYHIP_URL}>Download</a>
              <a href="#closer">Showcase</a>
            </div>
            <div className={styles.footCol}>
              <span className={styles.footHead}>Community</span>
              <a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord</a>
              <a href={PAYHIP_URL}>Support</a>
            </div>
            <div className={styles.footCol}>
              <span className={styles.footHead}>Legal</span>
              <a href="#">Terms of Service</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          © {new Date().getFullYear()} Shadow Client. All rights reserved.
        </div>
      </footer>
    </>
  );
}

