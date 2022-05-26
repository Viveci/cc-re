import { FiMenu } from "react-icons/fi";
import SiteLogo from "../../shared/siteLogo";
import styles from "./navbarMobile.module.scss";

const NavbarMobile = ({ handleShowMenu }) => {
  return (
    <div className={styles.navbarMobileWrapper}>
      <div className={styles.navbarMobileLogoContainer}>
        <SiteLogo />
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
