import { MdOutlineHeadphones, MdOutlinePodcasts } from "react-icons/md";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { CgNotes } from "react-icons/cg";
import SectionServices from "../../../../shared/sectionServices";
import styles from "./serviceMobile.module.scss";

const ServiceMobile = () => {
  return (
    <section className={styles.serviceMobileContainer}>
      <div className={styles.serviceMobileWrapper}>
        <SectionServices
          isRedIcon
          icon={<AiOutlinePlayCircle size={30} />}
          title="Plug and Play Recording."
          text="Our most popular service by far offers the rental of one of our 5 recording studios. In addition to your room rental, a highly experienced professional audio engineer or assistant engineer can be included for the duration of your rental. Studio rentals can also include the use of rooms for mixing and mastering."
        />
        <SectionServices
          isPurpleIcon
          icon={<MdOutlineHeadphones size={30} />}
          title="Music Production."
          text="We offer full music production services by cultivating or curating what an artist represents. Our in-house music producers are experienced, professional, and can handle working in teams or with artists individually. "
        />
        <SectionServices
          isYellowIcon
          icon={<CgNotes size={30} />}
          title="Writing Camps."
          text="Cruise Control Studios houses 5 unique studios which are perfect to host songwriting camps. Our facility can hold up to 30+ producers/songwriters at once."
        />
        <SectionServices
          icon={<MdOutlinePodcasts size={30} />}
          title="Podcasts and Voice Over."
          text="We take every podcast and voice over with most pride, attention and detail. Our goal is to provide the best quality recording to our clients. We know its all about workflow, so our sound engineers are committed to upholding the recording process most efficiently while keeping podcasts and voiceover recordings focused on the project goals. "
        />
      </div>
    </section>
  );
};

export default ServiceMobile;
