import React from "react";

const JoinUs = () => {
  return (
    <div className="font-syne text-white">
      <div className="mt-[7rem]">
        <div className="max-w-[90vw]">
          <h3 className="text-center text-4xl font-semibold">Our Partners</h3>
          <div className={`${styles.header} ${"text-center w-[80vw]"}`}></div>
        </div>

        <p className="text-center mt-8 px-4 leading-loose text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]">
          If you believe in our mission, you can join us as a tourist and also
          as an Investor{" "}
        </p>
      </div>
    </div>
  );
};

export default JoinUs;
