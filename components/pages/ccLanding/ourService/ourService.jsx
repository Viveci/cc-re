import { SiteLink, SectionTitle, SectionText } from "../../../shared";
import {
  SERVICES_CTA,
  SERVICES_SLUG,
  SERVICES_TITLE,
  SERVICES_DESCRIPTION,
} from "../../../../lib/constants";
import styles from "./ourService.module.scss";

const OurService = () => {
  return (
    <section className={styles.serviceContainer}>
      <article className={styles.serviceWrapper}>
        <header className={styles.serviceTitle}>
          <SectionTitle title={SERVICES_TITLE} />
        </header>
        <div className={styles.serviceDescription}>
          <SectionText value={SERVICES_DESCRIPTION} />
          <SiteLink
            linkTo={SERVICES_SLUG}
            value={SERVICES_CTA}
            className={styles.serviceCTA}
            data-aos="fade-up"
            data-aos-duration="1000"
          />
        </div>
      </article>
    </section>
  );
};

export default OurService;
