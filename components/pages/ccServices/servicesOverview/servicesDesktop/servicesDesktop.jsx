import { MdOutlineHeadphones, MdOutlinePodcasts } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import { Accordion, AccordionItem } from "react-accessible-accordion";
import SectionServices from "../../../../shared/sectionServices";
import styles from "./servicesDesktop.module.scss";

const ServicesDesktop = () => {
  return (
    <section className={styles.serviceDesktopContainer}>
      <div className={styles.serviceDesktopWrapper}>
        <Accordion allowMultipleExpanded allowZeroExpanded>
          <AccordionItem>
            <SectionServices
              animationDelay={"0"}
              isRedIcon
              isAccordionItem
              icon={<AiOutlinePlayCircle size={50} />}
              title="Plug and Play Recording."
              text="Our most popular service by far offers the rental of one of our 5 recording studios. In addition to your room rental, a highly experienced professional audio engineer or assistant engineer can be included for the duration of your rental. Studio rentals can also include the use of rooms for mixing and mastering."
            />
          </AccordionItem>
          <AccordionItem>
            <SectionServices
              animationDelay={"0"}
              isPurpleIcon
              isAccordionItem
              icon={<MdOutlineHeadphones size={50} />}
              title="Music Production."
              text="We offer full music production services by cultivating or curating what an artist represents. Our in-house music producers are experienced, professional, and can handle working in teams or with artists individually."
            />
          </AccordionItem>
          <AccordionItem>
            <SectionServices
              animationDelay={"0"}
              isYellowIcon
              isAccordionItem
              icon={<CgNotes size={50} />}
              title="Writing Camps."
              text="Cruise Control Studios houses 5 unique studios which are perfect to host songwriting camps. Our facility can hold up to 30+ producers/songwriters at once."
            />
          </AccordionItem>
          <AccordionItem>
            <SectionServices
              animationDelay={"0"}
              isWhiteIcon
              isAccordionItem
              icon={<MdOutlinePodcasts size={50} />}
              title="Podcasts and Voice Over."
              text="We take every podcast and voice over with most pride, attention and detail. Our goal is to provide the best quality recording to our clients. We know its all about workflow, so our sound engineers are committed to upholding the recording process most efficiently while keeping podcasts and voiceover recordings focused on the project goals. "
            />
          </AccordionItem>
          <div style={{marginLeft: "-9999px"}}>
          <AccordionItem >
            <SectionServices
              isAccordionItem
              isWhiteIcon
              title="Podcasts and Voice Over."
              text="We take every podcast and voice over with most pride, attention and detail. Our goal is to provide the best quality recording to our clients. We know its all about workflow, so our sound engineers are committed to upholding the recording process most efficiently while keeping podcasts and voiceover recordings focused on the project goals. "
            />
          </AccordionItem>
          </div>
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesDesktop;
