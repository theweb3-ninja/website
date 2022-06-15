import Image from 'next/image';
import { PopupButton } from 'react-calendly';
import TextHomeAnimated from '../text-home-animated';
import styles from './home-main.module.scss';

const HomeMain = () => {
  return (
    <main className={styles.main}>
      <div>
        <Image
          src="/android-chrome-192x192.png"
          alt="android-chrome-192x192.png"
          width="192"
          height="192"
          title="Logo"
        />
      </div>

      <h1 className={styles.title}>
        Welcome to <a href="https://theweb3.ninja" className={styles.titleNinja}>The Web3 Ninja!!!</a>
      </h1>

      <div className={styles.description}>
        <span>Your one-stop ninja for your </span>
        <TextHomeAnimated />
        <span> frontend integration.</span>
      </div>

      <div className={styles.calendly}>
        <PopupButton
          url="https://calendly.com/theweb3-ninja"
          rootElement={document.getElementById('root-calendly') as HTMLElement}
          text="Click here to schedule a meeting!!!"
          className={styles.calendlyButton}
        />
      </div>

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
  );
};

export default HomeMain;
