import styles from "./divider.module.scss";

const Divider = () => {
  return (
    <hr
      className={styles.divider}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="500"
    />
  );
};

export default Divider;
