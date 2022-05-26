import cn from "classnames";
import {
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styles from "./sectionServices.module.scss";

const SectionServices = ({
  icon,
  text,
  title,
  isRedIcon,
  isWhiteIcon,
  isYellowIcon,
  isPurpleIcon,
  animationDelay,
  isAccordionItem,
}) => {
  return isAccordionItem ? (
    <article className={styles.serviceDescriptionAccordionContainer}>
      <AccordionItemHeading>
        <AccordionItemButton>
          <div
            className={styles.serviceDescriptionAccordionHeading}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay={animationDelay}
          >
            <div
              className={cn({
                [styles.serviceIconRed]: isRedIcon,
                [styles.serviceIconWhite]: isWhiteIcon,
                [styles.serviceIconYellow]: isYellowIcon,
                [styles.serviceIconPurple]: isPurpleIcon,
              })}
            >
              {icon}
            </div>
            <h2 className={styles.serviceDescriptionTitle}>{title}</h2>
          </div>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className={styles.serviceDescriptionText}>{text}</p>
      </AccordionItemPanel>
    </article>
  ) : (
    <article className={styles.serviceDescriptionContainer}>
      <div
        className={cn({
          [styles.serviceIconRed]: isRedIcon,
          [styles.serviceIconYellow]: isYellowIcon,
          [styles.serviceIconPurple]: isPurpleIcon,
        })}
      >
        {icon}
      </div>
      <div>
        <h2 className={styles.serviceDescriptionTitle}>{title}</h2>
        <p className={styles.serviceDescriptionText}>{text}</p>
      </div>
    </article>
  );
};

export default SectionServices;
