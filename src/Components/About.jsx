import styles from "../../styles/Home.module.css";
import Head from "next/head";

const About = () => {
  return (
    <div className="font-syne text-white">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="A little bit about Us" />
      </Head>
      <div className="mt-[7rem]">
        <div className="max-w-[90vw]">
          <h3 className="text-center text-4xl font-semibold">About Us</h3>
          <div className={`${styles.header} ${"text-center w-[80vw]"}`}></div>
        </div>

        <p className="text-center mt-8 px-4 leading-loose text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]">
          Welcome to Global Green Visa, a gateway to environmental tourism.
          Working closely with national and International partners, GGV assists
          governments to deliver the environmental and climate benefits promised
          in the Paris Accords.{" "}
        </p>
      </div>
    </div>
  );
};

export default About;
