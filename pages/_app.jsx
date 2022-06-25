import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
      easing: "ease-in-sine",
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
