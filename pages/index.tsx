import type { NextPage } from "next";
import dynamic from "next/dynamic";
import Script from "next/script";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Footer from "../components/footer";
import GradientSparkle from "../components/gradient-sparkle";
import MetaHeader from "../components/meta-header";
import styles from "../styles/Home.module.scss";
import * as gtag from "../lib/gtag";

const HomeMain = dynamic(() => import("../components/home-main"), {
  ssr: false,
});

const Home: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const isProductionEnv = process.env.NODE_ENV !== "development";

  return (
    <>
      <div className={styles.container}>
        <MetaHeader />

        <HomeMain />

        <GradientSparkle />

        <div id="root-calendly"></div>

        <Footer />
      </div>

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {isProductionEnv && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gtag.GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}
    </>
  );
};

export default Home;
