import { SectionTitle, Divider } from "../../../shared";
import {
  FORM_TITLE
} from "../../../../lib/constants";
import styles from "./contactHeader.module.scss";

const ContactHeader = () => {
  return (
    <section className={styles.contactHeaderContainer}>
      <div className={styles.contactHeaderWrapper}>
        <div className={styles.contactHeaderTitle}>
          <SectionTitle title={FORM_TITLE} />
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;