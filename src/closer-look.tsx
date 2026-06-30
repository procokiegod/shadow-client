import { Reveal, SectionLabel } from './ui.js';
import styles from './closer-look.module.css';

const ITEMS = [
  { icon: '🛠️', title: 'Legit mod menu', text: 'Contains all your favorite core HUD mods and ground client enhancements, including banned mods like FreeLook and NoClickDelay.' },
  { icon: '👥', title: 'Friends', text: 'Connect and collab with your friends using Shadow Client profiles and shared setups.' },
  { icon: '💉', title: 'Injectable client', text: 'Run Shadow Client any mode and different launchers without any extra configuration from you.' },
  { icon: '🔀', title: 'Multi version support', text: 'Includes the same experience you can expect from Shadow across popular game versions such as 1.8.9, 1.7 and more.' },
  { icon: '💬', title: 'Active support.', text: 'Whatever the issue may be, we are here to help you solve the issue fast.' },
  { icon: '🛡️', title: 'Trusted provider.', text: 'We have been your leading and most trusted ghost client provider since 2019.' },
];

export function CloserLook() {
  return (
    <section className={styles.section} id="closer">
      <div className={styles.container}>
        <Reveal>
          <SectionLabel>Shadow</SectionLabel>
          <h2 className={styles.heading}>Take a closer look.</h2>
          <p className={styles.sub}>A few more things we have to offer.</p>
        </Reveal>
        <div className={styles.grid}>
          {ITEMS.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 120}>
              <div className={styles.card}>
                <div className={styles.icon}>{item.icon}</div>
                <h4 className={styles.cardTitle}>{item.title}</h4>
                <p className={styles.cardText}>{item.text}</p>
                <a className={styles.learn} href="#pricing">Learn more →</a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

