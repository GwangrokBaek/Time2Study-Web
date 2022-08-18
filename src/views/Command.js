import React from 'react';
// import sections
import Hero from '../components/sections/Hero';
import FeaturesSplit from '../components/sections/FeaturesSplit';
import Cta from '../components/sections/Cta';
import CommandsSplit from "../components/sections/CommandsSplit"

const Command = () => {

  return (
    <>
      {/* <Hero className="illustration-section-01" /> */}
      {/* <FeaturesSplit invertMobile imageFill className="illustration-section-02" /> */}
      {/* <Testimonial topDivider /> */}
      {/* <Cta split /> */}
      <CommandsSplit/>
    </>
  );
}

export default Command;