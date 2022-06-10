import Image from "next/image";
import SiteLink from "../../../shared/siteLink";
import {
  HERO_CTA,
  HERO_IMAGE,
  STROKE_RED,
  HERO_TITLE,
  HERO_BG_ALT,
  CONTACT_SLUG,
  HERO_SUBTITLE,
} from "../../../../lib/constants";
import styles from "./hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroWrapper}>
        <div
          className={styles.heroImageWrapper}
          data-aos="fade-down-right"
          data-aos-duration="800"
        >
          <Image
            src={HERO_IMAGE}
            alt={HERO_BG_ALT}
            layout="fill"
            objectFit="contain"
            objectPosition="right center"
            quality={100}
            className={styles.heroImage}
          />
        </div>
        <div
          className={styles.heroImageWrapper2}
          data-aos="fade-down-left"
          data-aos-duration="1000"
        >
          <Image
            src={STROKE_RED}
            alt={HERO_BG_ALT}
            layout="fill"
            objectFit="contain"
            quality={100}
            className={styles.heroImage2}
          />
        </div>
        <h1
          className={styles.heroTitle}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="899"
        >
          {HERO_TITLE} 
        </h1>
        <p
          className={styles.heroSubtitle}
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-delay="900"
        >
          {HERO_SUBTITLE}
        </p>
        <SiteLink
          linkTo={CONTACT_SLUG}
          value={HERO_CTA}
          className={styles.heroCTA}
          data-aos="fade-up"
          data-aos-duration="1300"
          data-aos-delay="900"
        />
      </div>
      <div className={styles.arrowDownWrapper}>
      <div className={styles.arrowDown}></div>
      </div>
    </section>
  );
};

export default Hero;
