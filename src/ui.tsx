import React from 'react';
import { useReveal } from './use-reveal.js';
import styles from './ui.module.css';

export type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  href?: string;
  onClick?: () => void;
  large?: boolean;
};

export function Button({ children, variant = 'primary', href, onClick, large }: ButtonProps) {
  const cls = `${styles.btn} ${variant === 'primary' ? styles.btnPrimary : styles.btnGhost} ${large ? styles.btnLarge : ''}`;
  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );
  }
  return (
    <button className={cls} onClick={onClick} type="button">
      {children}
    </button>
  );
}

export type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
};

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const [ref, visible] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`${styles.reveal} ${visible ? styles.revealVisible : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export type SectionLabelProps = { children: React.ReactNode };

export function SectionLabel({ children }: SectionLabelProps) {
  return <div className={styles.sectionLabel}>{children}</div>;
}

