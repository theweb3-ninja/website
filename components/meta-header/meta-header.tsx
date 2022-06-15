import Head from 'next/head';

const MetaHeader = () => {
    return (
        <Head>
        <title>The Web3 Ninja | theweb3.ninja</title>
        <meta name="description" content="The Web3 Ninja company website" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-192x192.png"
          sizes="192x192"
        />
        <link
          rel="icon"
          type="image/png"
          href="/android-chrome-512x512.png"
          sizes="512x512"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#B00F0A" />
        <meta name="theme-color" content="#B00F0A" />

        <meta property="og:title" content="The Web3 Ninja | theweb3.ninja" />
        <meta
          property="og:description"
          content="Your one stop man for your Web3 frontend integration."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://theweb3.ninja" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:width" content="512" />
        <meta
          property="og:image"
          content="https://theweb3.ninja/android-chrome-512x512.png"
        />

        <meta name="twitter:title" content="The Web3 Ninja | theweb3.ninja" />
        <meta
          name="twitter:description"
          content="Your one stop man for your Web3 frontend integration."
        />
        <meta
          name="twitter:image"
          content="https://theweb3.ninja/android-chrome-512x512.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "ec261b44f7804ca1ba9c092912eadee1"}'></script>
      </Head>
  );
};

export default MetaHeader;
