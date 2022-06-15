import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Footer from '../components/footer';
import GradientSparkle from '../components/gradient-sparkle';
import MetaHeader from '../components/meta-header';
import styles from '../styles/Home.module.scss';

const HomeMain = dynamic(() => import('../components/home-main'), {
  ssr: false,
});

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <MetaHeader />

      <HomeMain />

      <GradientSparkle />

      <div id="root-calendly"></div>
      
      <Footer />
    </div>
  );
};

export default Home;
