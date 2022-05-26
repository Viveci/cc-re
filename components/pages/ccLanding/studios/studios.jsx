import {
  HERO_BG_ALT,
  STUDIO_TITLE,
  STUDIOS_SLUG,
  ALL_STUDIOS_CTA,
  RED_STUDIO_TITLE,
  RED_STUDIO_IMAGE,
  BLACK_STUDIO_IMAGE,
  BLACK_STUDIO_TITLE,
  PURPLE_STUDIO_IMAGE,
  PURPLE_STUDIO_TITLE,
} from "../../../../lib/constants";
import { SectionTitle, SectionStudios, SiteLink } from "../../../shared";
import styles from "./studios.module.scss";

const Studios = () => {
  return (
    <section className={styles.studioContainer}>
      <article className={styles.studioWrapper}>
        <header className={styles.studioTitle}>
          <SectionTitle title={STUDIO_TITLE} />
        </header>
        <a href={STUDIOS_SLUG}>
          <SectionStudios
            isRed
            studioImagePath={RED_STUDIO_IMAGE}
            studioImageAlt={HERO_BG_ALT}
            studioTitle={RED_STUDIO_TITLE}
            animation={"fade-up-right"}
          />
        </a>

        <a href={STUDIOS_SLUG}>
          <SectionStudios
            isBlack
            isRightSidePlacement
            studioImagePath={BLACK_STUDIO_IMAGE}
            studioImageAlt={HERO_BG_ALT}
            studioTitle={BLACK_STUDIO_TITLE}
            animation={"fade-up-left"}
          />
        </a>

        <a href={STUDIOS_SLUG}>
          <SectionStudios
            isPurple
            studioImagePath={PURPLE_STUDIO_IMAGE}
            studioImageAlt={HERO_BG_ALT}
            studioTitle={PURPLE_STUDIO_TITLE}
            animation={"fade-up-right"}
          />
        </a>
        <div
          className={styles.studioCTAWrapper}
          data-aos="fade-up-left"
          data-aos-duration="1000"
        >
          <SiteLink
            linkTo={STUDIOS_SLUG}
            value={ALL_STUDIOS_CTA}
            className={styles.studioCTA}
          />
        </div>
      </article>
    </section>
  );
};

export default Studios;
