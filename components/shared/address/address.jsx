import SectionTitle from "../../shared/sectionTitle";
import SectionText from "../../shared/sectionText";
import {
  CC_EMAIL,
  CC_STUDIOS,
  CC_POSTCODE,
  CC_STREET_ADDRESS,
} from "../../../lib/constants";
import styles from "./address.module.scss";

const Address = () => {
  return (
    <section className={styles.addressContainer}>
      <article className={styles.addressWrapper}>
        <header className={styles.addressTitle}>
          <SectionTitle title={CC_STUDIOS} />
        </header>
        <div className={styles.addressDescription}>
          <SectionText value={CC_STREET_ADDRESS} />
          <SectionText value={CC_POSTCODE} />
          <SectionText value={CC_EMAIL} />
        </div>
      </article>
    </section>
  );
};

export default Address;
