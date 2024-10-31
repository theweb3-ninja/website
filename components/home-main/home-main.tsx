import Image from "next/image";
import { PopupButton } from "react-calendly";
import TextHomeAnimated from "../text-home-animated";
import styles from "./home-main.module.scss";

const HomeMain = () => {
  return (
    <main className={styles.main}>
      <div className={styles.floating}>
        <Image
          src="/android-chrome-192x192.png"
          alt="android-chrome-192x192.png"
          width="192"
          height="192"
          title="Logo"
        />
      </div>

      <h1 className={styles.title}>
        Welcome to{" "}
        <a href="https://theweb3.ninja" className={styles.titleNinja}>
          The Web3 Ninja!!!
        </a>
      </h1>

      <div className={styles.description}>
        <span>Your one-stop ninja for your </span>
        <TextHomeAnimated />
        <span> frontend integration.</span>
      </div>

      <div className={styles.calendly}>
        <PopupButton
          url="https://calendly.com/theweb3-ninja/30min"
          rootElement={document.getElementById("root-calendly") as HTMLElement}
          text="Click here to schedule a meeting"
          className={styles.calendlyButton}
        />
      </div>

      <div className={styles.disclaimer}>
        The Web3 Ninja LLC, is a registered company active in the USA, Europe,
        EMEA, and WANA.
      </div>

      <div className={styles.disclaimer}>
        Backed by{" "}
        <a
          href="https://www.linkedin.com/in/roccorusso/"
          target="_blank"
          rel="noreferrer"
        >
          Rocco
        </a>{" "}
        ninja.
      </div>
    </main>
  );
};

export default HomeMain;
