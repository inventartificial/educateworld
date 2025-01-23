import Head from 'next/head';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Educate World</title>
        <meta name="description" content="A global education platform" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Educate World
        </h1>
        <p className={styles.description}>
          Your gateway to global education.
        </p>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/inventartificial/educate-world"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Educate World
        </a>
      </footer>
    </div>
  );
}