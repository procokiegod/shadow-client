import { useEffect, useState } from 'react';
import { Button } from './ui.js';
import logo from './assets/logo.png';
import styles from './navbar.module.css';

const PAYHIP_URL = 'https://payhip.com/b/FjhBD';
const DISCORD_URL = 'https://discord.gg/shadowclient';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>
        <a className={styles.logo} href="#top">
          <img className={styles.logoImg} src={logo} alt="Shadow Client logo" />
          SHADOW<span className={styles.logoAccent}>CLIENT</span>
        </a>
        <div className={styles.links}>
          <a href="#features">Features</a>
          <a href="#closer">Showcase</a>
          <a href="#pricing">Pricing</a>
          <a href={DISCORD_URL} target="_blank" rel="noreferrer">Discord</a>
        </div>
        <Button href={PAYHIP_URL}>Buy now</Button>
      </div>
    </nav>
  );
}

