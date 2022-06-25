import { SectionTitle } from "../../../shared";
import {
  FORM_TITLE
} from "../../../../lib/constants";
import styles from "./contactHeader.module.scss";

const ContactHeader = ({showThankYouScreen}) => {
  return (
    <section className={styles.contactHeaderContainer}>
      <div className={styles.contactHeaderWrapper}>
        <div className={styles.contactHeaderTitle}>
          <SectionTitle title={FORM_TITLE} showThankYouScreen={showThankYouScreen}/>
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;