import useScrollFromTop from "../../../hooks/useScrollFromTop";
import SiteLogo from "../../shared/siteLogo";
import SiteLink from "../../shared/siteLink";
import styles from "./navbarDesktop.module.scss";

const NavbarDesktop = () => {
  const isScroll = useScrollFromTop();

  return (
    <div className={styles.navbarDesktopWrapper}>
      <div
        className={styles.navbarDesktopLogoContainer}
        data-aos="zoom-in"
        data-aos-duration="800"
      >
        <SiteLogo />
      </div>

      {isScroll && (
        <SiteLink
          linkTo="/contact"
          value="Get in touch"
          className={styles.navbarDesktopButton}
        />
      )}

      <div className={styles.navbarDesktopMenuItemsContainer}>
        <ul>
          <li>
            <SiteLink
              linkTo="/"
              value="Home"
              data-aos="zoom-in"
              data-aos-duration="800"
            />
          </li>
          <li>
            <SiteLink
              linkTo="/services"
              value="Our services"
              data-aos="zoom-in"
              data-aos-duration="800"
            />
          </li>
          <li>
            <SiteLink
              linkTo="/studios"
              value="Our studios"
              data-aos="zoom-in"
              data-aos-duration="800"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDesktop;
