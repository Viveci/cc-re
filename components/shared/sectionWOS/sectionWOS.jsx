import SectionTitle from "../sectionTitle";
import SectionText from "../sectionText";
import { WOS_TITLE, WOS_DESCRIPTION } from "../../../lib/constants";
import styles from "./sectionWOS.module.scss";

const SectionWOS = () => {
  return (
    <section className={styles.wosContainer}>
      <article className={styles.wosWrapper}>
        <header className={styles.wosTitle}>
          <SectionTitle title={WOS_TITLE} />
        </header>
        <div className={styles.wosDescription}>
          <SectionText
            value={WOS_DESCRIPTION}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </article>
    </section>
  );
};

export default SectionWOS;
