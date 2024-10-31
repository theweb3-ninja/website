import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faMailBulk } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.root}>
      <div>
        <a href="https://api.whatsapp.com/send?phone=27664137059">
          <FontAwesomeIcon icon={faWhatsapp} className={styles.icon} />
          Chat with the ninja via whatsapp!
        </a>
      </div>
      <div>
        <a href="mailto:hello@theweb3.ninja?subject=Inquiry from theweb3.ninja">
          <FontAwesomeIcon icon={faMailBulk} className={styles.icon} />
          Send an email for info
        </a>
      </div>
    </div>
  );
};

export default Footer;
