import Image from "next/image";
import cn from "classnames";
import styles from "./sectionStudios.module.scss";

const SectionStudios = ({
  isRed,
  isGold,
  isBlack,
  isYellow,
  isPurple,
  animation,
  studioTitle,
  hasDescription,
  studioImagePath,
  studioImageAlt,
  studioDescription,
  isCenteredPlacement,
  isRightSidePlacement,
}) => {
  return (
    <div
      className={cn(styles.studioImageContainer, {
        [styles.studioImageContainerMb]: hasDescription,
      })}
    >
      <div
        className={cn(styles.studioImageWrapper, {
          [styles.studioPlacementRight]: isRightSidePlacement,
          [styles.studioPlacementCenter]: isCenteredPlacement,
        })}
        data-aos={animation}
        data-aos-duration="1000"
      >
        <Image
          src={studioImagePath}
          alt={studioImageAlt}
          layout="fill"
          objectFit="cover"
          objectPosition="center center"
          quality={100}
          className={styles.studioImage}
        />
      </div>
      <h1
        className={cn(styles.studioName, {
          [styles.studioTextRed]: isRed,
          [styles.studioTextBlack]: isBlack,
          [styles.studioTextPlacementRight]: isRightSidePlacement,
          [styles.studioTextPlacementCenter]: isCenteredPlacement,
          [styles.studioTextPurple]: isPurple,
          [styles.studioTextYellow]: isYellow,
          [styles.studioTextGold]: isGold,
        })}
        data-aos={animation}
        data-aos-duration="1300"
      >
        {studioTitle}
      </h1>
      {hasDescription && (
        <div
          className={styles.studioDescription}
          data-aos={animation}
          data-aos-duration="1300"
        >
          {!!studioDescription.length &&
            studioDescription.map((studioItem) => (
              <p key={studioItem.title}>
                <span
                  className={cn({
                    [styles.studioTextRed]: isRed,
                    [styles.studioTextBlack]: isBlack,
                    [styles.studioTextPurple]: isPurple,
                    [styles.studioTextYellow]: isYellow,
                    [styles.studioTextGold]: isGold,
                  })}
                >
                  {" "}
                  <strong>{studioItem.title}</strong>
                </span>
                : <span>{studioItem.text}</span>
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default SectionStudios;
