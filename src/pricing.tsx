import { Button, Reveal, SectionLabel } from './ui.js';
import styles from './pricing.module.css';

const PAYHIP_URL = 'https://payhip.com/b/FjhBD';

const PERKS = [
  'Full access to all ghost combat modules',
  'Undetected on practice & bedwars servers',
  'Multi-version support (1.7 – latest)',
  'Inventory manager & public profiles',
  'Instant automatic file delivery',
  'Lifetime updates & active support',
];

export function Pricing() {
  return (
    <section className={styles.section} id="pricing">
      <div className={styles.container}>
        <Reveal>
          <SectionLabel>Pricing</SectionLabel>
          <h2 className={styles.heading}>One plan. Lifetime access.</h2>
          <p className={styles.sub}>No subscriptions, no recurring fees. Pay once and own Shadow Client forever.</p>
        </Reveal>
        <Reveal delay={120}>
          <div className={styles.cardWrap}>
            <div className={styles.cardGlow} />
            <div className={styles.card}>
              <div className={styles.badge}>Best & only deal</div>
              <div className={styles.planName}>Shadow Client</div>
              <div className={styles.priceRow}>
                <span className={styles.currency}>€</span>
                <span className={styles.price}>20</span>
                <span className={styles.period}>/ lifetime</span>
              </div>
              <p className={styles.priceNote}>One-time payment · instant delivery</p>
              <ul className={styles.perks}>
                {PERKS.map((p) => (
                  <li key={p}>
                    <span className={styles.check}>✓</span>
                    {p}
                  </li>
                ))}
              </ul>
              <Button href={PAYHIP_URL} large>Buy now with Payhip →</Button>
              <p className={styles.secure}>🔒 Secure Payhip checkout · auto file delivery</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

