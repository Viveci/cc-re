import styles from "./sectionText.module.scss";

const SectionText = ({ value }) => {
  return (
    <div
      className={styles.textContainer}
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <p className={styles.textWrapper}>{value}</p>
    </div>
  );
};

export default SectionText;
