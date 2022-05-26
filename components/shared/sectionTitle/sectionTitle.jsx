import styles from "./sectionTitle.module.scss";

const SectionTitle = ({ title }) => (
  <h2
    className={styles.titleWrapper}
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    {title}
  </h2>
);

export default SectionTitle;
