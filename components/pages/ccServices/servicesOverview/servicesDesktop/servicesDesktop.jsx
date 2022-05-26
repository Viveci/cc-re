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
              animationDelay={"1000"}
              isRedIcon
              isAccordionItem
              icon={<AiOutlinePlayCircle size={80} />}
              title="Plug and Play Recording."
              text="Rent one of our 5 recording studios. In addition to your room
          rental, a highly experienced professional audio engineer or
          assistant engineer can be included for the duration of your
          rental. Studio rentals can also include the use of rooms for
          mixing and mastering."
            />
          </AccordionItem>
          <AccordionItem>
            <SectionServices
              animationDelay={"0"}
              isPurpleIcon
              isAccordionItem
              icon={<MdOutlineHeadphones size={80} />}
              title="Music Production."
              text="Full music production services by cultivating or curating what an artist represents. Our in-house music producers are experienced, professional, and can handle working in teams or with artists individually."
            />
          </AccordionItem>
          <AccordionItem>
            <SectionServices
              animationDelay={"0"}
              isYellowIcon
              isAccordionItem
              icon={<CgNotes size={80} />}
              title="Writing Camps."
              text="5 unique studios which are perfect to host songwriting camps. Our facility can hold up to 30+ producers/songwriters at once."
            />
          </AccordionItem>
          <AccordionItem>
            <SectionServices
              animationDelay={"0"}
              isWhiteIcon
              isAccordionItem
              icon={<MdOutlinePodcasts size={80} />}
              title="Podcasts and Voice Over."
              text="Our goal is to provide the best quality recording to our clients. We know its all about workflow, so our sound engineers are committed to upholding the recording process most efficiently while keeping podcasts and voiceover recordings focused on the project goals."
            />
          </AccordionItem>
          {/*  <AccordionItem>
            <SectionServices
              isWhiteIcon
              isAccordionItem
              icon={<MdOutlinePodcasts size={80} />}
              title="Podcasts and Voice Over."
              text="Our goal is to provide the best quality recording to our clients. We know its all about workflow, so our sound engineers are committed to upholding the recording process most efficiently while keeping podcasts and voiceover recordings focused on the project goals."
            />
          </AccordionItem> */}
        </Accordion>
      </div>
    </section>
  );
};

export default ServicesDesktop;
