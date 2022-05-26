import { useState } from "react";
import Head from "next/head";
import Navbar from "../navbar";
import MobileMenu from "../mobileMenu";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);

  const handleShowMenu = () => setShowMenuMobile(!showMenuMobile);

  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Cruise Control Studios</title>
      </Head>
      <Navbar handleShowMenu={handleShowMenu} />
      <MobileMenu
        showMenuMobile={showMenuMobile}
        handleShowMenu={handleShowMenu}
      />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
