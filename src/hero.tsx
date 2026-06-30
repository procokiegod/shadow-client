import { Button } from './ui.js';
import heroChar from './assets/hero-character.png';
import styles from './hero.module.css';

const PAYHIP_URL = 'https://payhip.com/b/FjhBD';

export function Hero() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles.glowRing} />
      <div className={styles.inner}>
        <div className={styles.copy}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} /> Undetected ghost client
          </div>
          <h1 className={styles.title}>
            Like steroids
            <br />
            for <span className={styles.titleAccent}>Minecraft.</span>
          </h1>
          <p className={styles.sub}>
            Gain an unfair advantage over your opponents while staying completely
            undetected. Built for closet cheating on practice servers — bypass anywhere.
          </p>
          <div className={styles.actions}>
            <Button href={PAYHIP_URL} large>Buy now — €20 lifetime</Button>
            <Button variant="ghost" href="#features" large>Learn more →</Button>
          </div>
        </div>
        <div className={styles.art}>
          <div className={styles.orb} />
          <img className={styles.char} src={heroChar} alt="Shadow Client character" />
        </div>
      </div>
    </header>
  );
}

