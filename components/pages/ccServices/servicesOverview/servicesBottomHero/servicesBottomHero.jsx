import Image from "next/image";
import {
  SERVICE_BOTTOM_HERO_BG,
  HERO_BG_ALT,
} from "../../../../../lib/constants";
import styles from "./servicesBottomHero.module.scss";

const BottomHero = () => {
  return (
    <section className={styles.bottomHeroContainer}>
      <div className={styles.bottomHeroWrapper}>
        <div
          className={styles.bottomHeroImageWrapper}
          data-aos="fade-down-right"
          data-aos-duration="1000"
        >
          <Image
            src={SERVICE_BOTTOM_HERO_BG}
            alt={HERO_BG_ALT}
            layout="fill"
            objectFit="contain"
            objectPosition="right center"
            quality={100}
            className={styles.bottomHeroImage}
          />
        </div>
      </div>
    </section>
  );
};

export default BottomHero;
