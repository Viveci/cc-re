import { useForm } from "react-hook-form";
import useIsMobileDevice from "../../../../hooks/useIsMobileDevice";
import Image from "next/image";
import { PLANE_ICON, HERO_BG_ALT } from "../../../../lib/constants";
import styles from "./contactForm.module.scss";

const ContactForm = ({ setShowThankYouScreen }) => {
  const isMobile = useIsMobileDevice();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const {
      studioBox,
      startDate,
      endDate,
      startTime,
      endTime,
      amountOfPeople,
      email,
      name,
      comment,
    } = data;

    const subject = `New booking for the ${studioBox} studio by ${name} for ${startDate} to ${endDate}`;

    const body = `I would like to book the ${studioBox} studio, starting on ${startDate} at ${startTime} hrs --- to ${endDate} at ${endTime} hrs. The number of people for this session is ${amountOfPeople}. Some comments for this booking: ${comment}. You can reach me on ${email} with a confirmation on availability.
    `;

    document.location.href = `mailto:malcolm.kente@gmail.com?subject=${subject}&body=${body}`;

    reset();
    setShowThankYouScreen(true);
  };
  return (
    <div
      className={styles.contactFormContainer}
      data-aos="fade-up"
      data-aos-duration="1300"
      data-aos-delay="900"
    >
      <div className={styles.contactFormIcon}>
        <Image
          src={PLANE_ICON}
          alt={HERO_BG_ALT}
          width={isMobile ? 40 : 80}
          height={isMobile ? 40 : 80}
          quality={100}
        />
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.contactFormWrapper}
      >
        <input placeholder="Studio box" {...register("studioBox")} required/>

        <div className={styles.contactFormDateWrapper}>
          <input
            placeholder="Start date"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
            min={new Date().toISOString().split('T')[0]}
            required
            {...register("startDate")}
          />
          <input
            placeholder="End date"
            onFocus={(e) => (e.currentTarget.type = "date")}
            onBlur={(e) => (e.currentTarget.type = "text")}
            required
            {...register("endDate")}
          />
        </div>

        <div className={styles.contactFormTimeWrapper}>
          <input
            placeholder="Start"
            onFocus={(e) => (e.currentTarget.type = "time")}
            onBlur={(e) => (e.currentTarget.type = "text")}
            required
            {...register("startTime")}
          />
          <input
            placeholder="End"
            onFocus={(e) => (e.currentTarget.type = "time")}
            onBlur={(e) => (e.currentTarget.type = "text")}
            required
            {...register("endTime")}
          />
          <input
            placeholder="Ppl"
            type="number"
            required
            {...register("amountOfPeople")}
          />
        </div>

        <input placeholder="Name" {...register("name")} required/>
        <input placeholder="Email" {...register("email")} required/>

        <textarea placeholder="Comment/Message" {...register("comment")} required/>

        <button
          className={styles.contactFormButton}
          type="submit"
          value="Submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
