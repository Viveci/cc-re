import Image from "next/image";
import {
  PIANO_HERO,
  STROKE_PURPLE,
  HERO_BG_ALT,
} from "../../../../lib/constants";
import styles from "./pianoHero.module.scss";

const PianoHero = () => {
  return (
    <section className={styles.pianoHeroContainer}>
      <div className={styles.pianoHeroWrapper}>
        <div
          className={styles.pianoHeroImageWrapper}
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <Image
            src={PIANO_HERO}
            alt={HERO_BG_ALT}
            layout="fill"
            objectFit="cover"
            quality={100}
            className={styles.pianoHeroImage}
          />
        </div>
        <div
          className={styles.pianoHeroImageWrapper2}
          data-aos="fade-down-left"
          data-aos-duration="1000"
        >
          <Image
            src={STROKE_PURPLE}
            alt={HERO_BG_ALT}
            layout="fill"
            objectFit="contain"
            quality={100}
            className={styles.pianoHeroImage2}
          />
        </div>
      </div>
    </section>
  );
};

export default PianoHero;
