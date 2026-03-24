'use client';

import styles from './XTFooter.module.css';
import { useNav } from '@/context/NavContext';

export default function XTFooter() {
  const { setActiveArticle } = useNav();

  return (
    <div className={styles.container}>
      <div className={styles.divider}></div>
      <div className={styles.content}>
        <div className={styles.label}>WHATEVER THE WIND TAKES YOU</div>
        <h2 className={styles.title}>WHERE TO GO NEXT?</h2>
        <div className={styles.actions}>
          <button 
            className={styles.button}
            onClick={() => setActiveArticle(null)}
          >
            BACK TO HOME
          </button>
          <div className={styles.hint}>OR EXPLORE OTHER MEMORIES</div>
        </div>
      </div>
    </div>
  );
}
