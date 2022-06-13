import useScrollFromTop from "../../../hooks/useScrollFromTop";
import { useRouter } from 'next/router';
import SiteLogo from "../../shared/siteLogo";
import SiteLink from "../../shared/siteLink";
import styles from "./navbarDesktop.module.scss";

const NavbarDesktop = () => {
  const isScroll = useScrollFromTop();
  const router = useRouter();

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
              style={{textDecoration: `${router.pathname === "/" ? "line-through" : ""}`}}
            />
          </li>
          <li>
            <SiteLink
              linkTo="/services"
              value="Our services"
              data-aos="zoom-in"
              data-aos-duration="800"
              style={{textDecoration: `${router.pathname === "/services" ? "line-through" : ""}`}}
            />
          </li>
          <li>
            <SiteLink
              linkTo="/studios"
              value="Our studios"
              data-aos="zoom-in"
              data-aos-duration="800"
              style={{textDecoration: `${router.pathname === "/studios" ? "line-through" : ""}`}}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarDesktop;
