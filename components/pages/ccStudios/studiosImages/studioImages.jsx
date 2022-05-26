import {
  HERO_BG_ALT,
  RED_DESCRIPTION,
  RED_STUDIO_TITLE,
  RED_STUDIO_IMAGE,
  GOLD_DESCRIPTION,
  BLACK_DESCRIPTION,
  GOLD_STUDIO_IMAGE,
  GOLD_STUDIO_TITLE,
  BLACK_STUDIO_IMAGE,
  BLACK_STUDIO_TITLE,
  PURPLE_DESCRIPTION,
  YELLOW_DESCRIPTION,
  YELLOW_STUDIO_IMAGE,
  YELLOW_STUDIO_TITLE,
  PURPLE_STUDIO_IMAGE,
  PURPLE_STUDIO_TITLE,
} from "../../../../lib/constants";
import SectionStudios from "../../../shared/sectionStudios";
import styles from "./studioImages.module.scss";

const StudioImages = () => {
  return (
    <section className={styles.studioImagesContainer}>
      <div className={styles.studioImagesWrapper}>
        <SectionStudios
          animation={"fade-up"}
          isRed
          hasDescription
          isCenteredPlacement
          studioImagePath={RED_STUDIO_IMAGE}
          studioImageAlt={HERO_BG_ALT}
          studioTitle={RED_STUDIO_TITLE}
          studioDescription={RED_DESCRIPTION}
        />
        <SectionStudios
          animation={"fade-up"}
          isBlack
          hasDescription
          isCenteredPlacement
          studioImagePath={BLACK_STUDIO_IMAGE}
          studioImageAlt={HERO_BG_ALT}
          studioTitle={BLACK_STUDIO_TITLE}
          studioDescription={BLACK_DESCRIPTION}
        />
        <SectionStudios
          animation={"fade-up"}
          isPurple
          hasDescription
          isCenteredPlacement
          studioImagePath={PURPLE_STUDIO_IMAGE}
          studioImageAlt={HERO_BG_ALT}
          studioTitle={PURPLE_STUDIO_TITLE}
          studioDescription={PURPLE_DESCRIPTION}
        />
        <SectionStudios
          animation={"fade-up"}
          isYellow
          hasDescription
          isCenteredPlacement
          studioImagePath={YELLOW_STUDIO_IMAGE}
          studioImageAlt={HERO_BG_ALT}
          studioTitle={YELLOW_STUDIO_TITLE}
          studioDescription={YELLOW_DESCRIPTION}
        />
        <SectionStudios
          animation={"fade-up"}
          isGold
          hasDescription
          isCenteredPlacement
          studioImagePath={GOLD_STUDIO_IMAGE}
          studioImageAlt={HERO_BG_ALT}
          studioTitle={GOLD_STUDIO_TITLE}
          studioDescription={GOLD_DESCRIPTION}
        />
      </div>
    </section>
  );
};

export default StudioImages;
