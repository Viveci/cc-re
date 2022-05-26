import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import { useSpring, animated } from "react-spring";
import SiteLogo from "../shared/siteLogo/siteLogo";
import SiteLink from "../shared/siteLink";
import styles from "./mobileMenu.module.scss";

const MobileMenu = ({ showMenuMobile, handleShowMenu }) => {
  useEffect(() => {
    if (showMenuMobile) {
      document.body.style.overflow = "hidden";
      document.body.style.height = "100%";
    } else {
      document.body.style.overflow = "scroll";
      document.body.style.height = "auto";
    }
    return () => {
      document.body.style.overflow = "scroll";
      document.body.style.height = "auto";
    };
  }, [showMenuMobile]);

  const showMenu = useSpring({
    to: { transform: "translateX(0%)" },
    from: { transform: "translateX(-100%)" },
    config: {
      mass: 0.4,
      tension: 200,
      friction: 20,
    },
  });

  return showMenuMobile ? (
    <animated.div style={showMenu} className={styles.mobileMenuContainer}>
      <div className={styles.mobileMenuWrapper}>
        <div
          role="button"
          tabIndex={0}
          onClick={handleShowMenu}
          onKeyPress={handleShowMenu}
          className={styles.mobileMenuIconContainer}
        >
          <IoClose size={30} />
        </div>
        <ul className={styles.mobileMenuItemsContainer}>
          <li>
            <SiteLink linkTo="/" value="Home" />
          </li>
          <li>
            <SiteLink linkTo="/services" value="Our services" />
          </li>
          <li>
            <SiteLink linkTo="/studios" value="Our studios" />
          </li>
          <li>
            <SiteLink linkTo="/contact" value="Get in touch" />
          </li>
        </ul>
        <div className={styles.mobileMenuLogoContainer}>
          <SiteLogo />
        </div>
      </div>
    </animated.div>
  ) : null;
};

export default MobileMenu;
