import {
  HOME_SLUG,
  GO_HOME_MSG,
  NOT_FOUND_MSG,
  NOT_FOUND_TITLE,
} from "../../../lib/constants";
import SiteLink from "../../shared/siteLink";
import styles from "./f0f.module.scss";

const F0F = () => {
  return (
    <section className={styles.f0fContainer}>
      <h1 className={styles.f0fTitle}>{NOT_FOUND_TITLE}</h1>
      <p className={styles.f0fMsg}>{NOT_FOUND_MSG}</p>
      <SiteLink
        linkTo={HOME_SLUG}
        value={GO_HOME_MSG}
        className={styles.f0fCTA}
      />
    </section>
  );
};

export default F0F;
