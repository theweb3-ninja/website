import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import type { AppProps } from "next/app";
import Script from "next/script";
import { isProductionEnv } from "../config";
import * as gtag from "../lib/gtag";
import "../styles/fonts.scss";
import "../styles/globals.scss";

config.autoAddCss = false;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      {isProductionEnv && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://static.cloudflareinsights.com/beacon.min.js`}
            data-cf-beacon='{"token": "ec261b44f7804ca1ba9c092912eadee1"}'
          />
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
}

export default MyApp;
