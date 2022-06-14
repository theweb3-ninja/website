import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>The Web3 Ninja | theweb3.ninja</title>
        <meta name="description" content="The Web3 Ninja company website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
        <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
        <link rel="icon" type="image/png" href="/android-chrome-512x512.png" sizes="512x512" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#B00F0A" />
        <meta name="theme-color" content="#B00F0A" />

        <meta property="og:title" content="The Web3 Ninja | theweb3.ninja" />
        <meta property="og:description" content="Your one stop man for your Web3 frontend integration." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theweb3.ninja" />
        <meta property="og:image" content="https://theweb3.ninja/apple-touch-icon.png" />

        <meta name="twitter:title" content="The Web3 Ninja | theweb3.ninja" />
        <meta name="twitter:description" content="Your one stop man for your Web3 frontend integration." />
        <meta name="twitter:image" content="https://theweb3.ninja/apple-touch-icon.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className={styles.main}>
        <div>
          <Image src="/android-chrome-192x192.png" alt="android-chrome-192x192.png" width="192" height="192" title="Logo" />
        </div>

        <h1 className={styles.title}>
          Welcome to <a href="https://theweb3.ninja">The Web3 Ninja!</a>
        </h1>

        <p className={styles.description}>
          Your one stop man for your {' '}
          <code className={styles.code}>Web3</code>{' '}
          frontend integration.
        </p>
        
        {/*
        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div> */}
      </main>
    </div>
  )
}

export default Home
