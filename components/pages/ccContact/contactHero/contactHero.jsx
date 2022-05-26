import { useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import {
  HERO_BG_ALT,
  HERO_IMAGE,
  STROKE_RED,
  WARNING,
  CRUISE_RED_LOGO,
} from "../../../../lib/constants";
import ContactForm from "../contactForm";
import styles from "./contactHero.module.scss";

const ContactHero = () => {
  const [showThankYouScreen, setShowThankYouScreen] = useState(false);

  return (
    <section className={styles.contactHeroContainer}>
      {showThankYouScreen ? (
        <div className={styles.thankYouWrapper}>
          <div
            role="button"
            tabIndex={0}
            onClick={() => setShowThankYouScreen(false)}
            onKeyPress={() => setShowThankYouScreen(false)}
            className={styles.thankYouCloseIconContainer}
          >
            <IoClose size={30} />
          </div>
          <div
            className={styles.thankYouWarningImageWrapper}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Image
              src={WARNING}
              alt={HERO_BG_ALT}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              quality={100}
              className={styles.thankYouWarningImage}
            />
          </div>

          <p className={styles.thankYouText}>Thank you </p>

          <div
            className={styles.thankYouLogoImageWrapper}
            data-aos="fade-up"
            data-aos-duration="800"
          >
            <Image
              src={CRUISE_RED_LOGO}
              alt={HERO_BG_ALT}
              layout="fill"
              objectFit="contain"
              objectPosition="center"
              quality={100}
              className={styles.thankYouLogoImage}
            />
          </div>
        </div>
      ) : (
        <div className={styles.contactHeroWrapper}>
          <div
            className={styles.contactHeroImageWrapper}
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
              className={styles.contactHeroImage}
            />
          </div>
          <div
            className={styles.contactHeroImageWrapper2}
            data-aos="fade-down-left"
            data-aos-duration="1000"
          >
            <Image
              src={STROKE_RED}
              alt={HERO_BG_ALT}
              layout="fill"
              objectFit="contain"
              quality={100}
              className={styles.contactHeroImage2}
            />
          </div>
          <ContactForm setShowThankYouScreen={setShowThankYouScreen} />
        </div>
      )}
    </section>
  );
};

export default ContactHero;
