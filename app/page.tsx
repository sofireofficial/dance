// import Image from 'next/image'
import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>

      <main>
        <h1 className={styles.title}>
          Soph's Blog
        </h1>

        <h2 className={styles.description}>
          Password required...        
        </h2>

                  <div className={styles.card}><Link href="/religion">1</Link></div>
                  <div className={styles.card}><Link href="/religion">2</Link></div>
                  <div className={styles.card}><Link href="/religion">3</Link></div>
                  <div className={styles.card}><Link href="/religion">4</Link></div>


          <div className={styles.card}>
			      <Link href="/religion">
            <i className="fa-solid fa-cross" style={{color: "#AF3D4E",}} aria-hidden="true" title="religion"></i>
            <span className="sr-only">religion</span>
            </Link>
          </div>

          <div className={styles.card}>
			      <Link href="/fathers">
            <i className="fa-solid fa-baby" style={{color: "#AF3D4E",}} aria-hidden="true" title="fathers"></i>
            <span className="sr-only">fathers</span>
            </Link>
          </div>

          <div className={styles.card}>
			      <Link href="/other1">
            <i className="fa-solid fa-circle-question" style={{color: "#AF3D4E",}} aria-hidden="true" title="other1"></i>
            <span className="sr-only">other1</span>
            </Link>
          </div>

          <div className={styles.card}>
			      <Link href="/other2">
            <i className="fa-solid fa-circle-question" style={{color: "#AF3D4E",}} aria-hidden="true" title="other2"></i>
            <span className="sr-only">other2</span>
            </Link>
          </div>

    </main>
    </div>
  );
}
