import { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "../navbar";
import MobileMenu from "../mobileMenu";
import styles from "./layout.module.scss";

const Layout = ({ children }) => {
  const [showMenuMobile, setShowMenuMobile] = useState(false);
  const handleShowMenu = () => setShowMenuMobile(!showMenuMobile);
  const route = useRouter()

  return (
    <div className={route.pathname === "/contact" ? styles.contactWrapper : styles.wrapper}>
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
