import { FiMenu } from "react-icons/fi";
import { SiteLink } from "../../shared";
import styles from "./navbarMobile.module.scss";

const NavbarMobile = ({ handleShowMenu }) => {
  return (
    <div className={styles.navbarMobileWrapper}>
      <div className={styles.navbarMobileLogoContainer}>
      <SiteLink
          linkTo="/contact"
          value="Get in touch"
          className={styles.navbarContactButton}
        />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={handleShowMenu}
        onKeyPress={handleShowMenu}
        className={styles.navbarMobileIconContainer}
      >
        <FiMenu size={30} />
      </div>
    </div>
  );
};

export default NavbarMobile;
