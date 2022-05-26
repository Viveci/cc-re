import Image from "next/image";

const SiteLogo = () => (
  <Image
    src="/logo.png"
    alt="Cruise Control logo"
    layout="fill"
    objectFit="contain"
  />
);

export default SiteLogo;
