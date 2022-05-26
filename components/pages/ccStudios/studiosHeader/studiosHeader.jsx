import { SectionTitle, SectionText, Divider } from "../../../shared";
import {
  STUDIO_PAGE_TITLE,
  STUDIO_PAGE_DESCRIPTION,
} from "../../../../lib/constants";
import styles from "./studiosHeader.module.scss";

const StudiosHeader = () => {
  return (
    <section className={styles.studiosHeaderContainer}>
      <div className={styles.studiosHeaderWrapper}>
        <div className={styles.studiosHeaderTitle}>
          <SectionTitle title={STUDIO_PAGE_TITLE} />
        </div>
        <div className={styles.studiosHeaderText}>
          <SectionText value={STUDIO_PAGE_DESCRIPTION} />
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default StudiosHeader;
