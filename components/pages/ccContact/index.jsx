import React, { useState } from "react";
import ContactHeader from "./contactHeader";
import ContactHero from "./contactHero";

const CCContact = () => {
  const [showThankYouScreen, setShowThankYouScreen] = useState(false);
  return (
    <>
      <ContactHeader showThankYouScreen={showThankYouScreen}/>
      <ContactHero showThankYouScreen={showThankYouScreen} setShowThankYouScreen={setShowThankYouScreen}/>
    </>
  );
};

export default CCContact;
