import React from "react";

const About = () => {
  return <div className="bg-black h-screen flex flex-col justify-center items-center text-white text-center font-syne p-10 sm:p-40">
    <h1 className="text-5xl font-bold pb-10 sm:text-8xl">
      About Us
      <hr className="w-3/6 h-3 border-none rounded-md bg-teal-600 mt-5" />
    </h1>
    <p className="text-xl leading-loose sm:text-4xl sm:leading-loose">
      Welcome to Global Green Visa, a gateway to environmental tourism. Working closely with national and International partners,
      GGV assists governments to deliver the environmental and climate benefits promised in the Paris Accords.
    </p>
  </div>
    ;
};

export default About;
