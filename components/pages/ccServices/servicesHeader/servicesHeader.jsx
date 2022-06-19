import { SectionTitle, SectionText, Divider } from "../../../shared";
import {
  SERVICES_TITLE,
  SERVICE_PAGE_DESCRIPTION,
} from "../../../../lib/constants";
import styles from "./servicesHeader.module.scss";

const ServicesHeader = () => {
  return (
    <section className={styles.servicesHeaderContainer}>
      <div className={styles.serviceHeaderWrapper}>
        <div className={styles.serviceHeaderTitle}>
          <SectionTitle title={SERVICES_TITLE} />
        </div>
        <div className={styles.serviceHeaderText}>
          <SectionText value={SERVICE_PAGE_DESCRIPTION}/>
        </div>
      </div>
      <Divider />
    </section>
  );
};

export default ServicesHeader;
