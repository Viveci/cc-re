import useIsMobileDevice from "../../hooks/useIsMobileDevice";
import NavbarMobile from "./navbarMobile";
import NavbarDesktop from "./navbarDesktop";
import styles from "./navbar.module.scss";

const Navbar = ({ handleShowMenu }) => {
  const isMobile = useIsMobileDevice();

  return (
    <div className={styles.navbarContainer}>
      {isMobile ? (
        <NavbarMobile handleShowMenu={handleShowMenu} />
      ) : (
        <NavbarDesktop />
      )}
    </div>
  );
};

export default Navbar;
