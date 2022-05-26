import useIsMobileDevice from "../../../../hooks/useIsMobileDevice";
import ServiceMobile from "./servicesMobile";
import ServicesDesktop from "./servicesDesktop";
import ServicesBottomHero from "./servicesBottomHero";

const ServicesOverview = () => {
  const isMobile = useIsMobileDevice();
  return (
    <>
      {isMobile ? <ServiceMobile /> : <ServicesDesktop />}
      <ServicesBottomHero />
    </>
  );
};

export default ServicesOverview;
