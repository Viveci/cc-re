import { ABOUT_TITLE, ABOUT_DESCRIPTION } from "../../../../lib/constants";
import SectionTitle from "../../../shared/sectionTitle";
import SectionText from "../../../shared/sectionText";
import styles from "./about.module.scss";

const About = () => {
  return (
    <section className={styles.aboutContainer}>
      <div className={styles.arrowDown}></div>
      <article className={styles.aboutWrapper}>
        <header className={styles.aboutTitle}>
          <SectionTitle title={ABOUT_TITLE} />
        </header>
        <div className={styles.aboutDescription}>
          <SectionText value={ABOUT_DESCRIPTION} />
        </div>
      </article>
    </section>
  );
};

export default About;
