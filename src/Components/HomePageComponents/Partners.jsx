import styles from "../../../styles/Home.module.css";

const Partners = () => {
  return (
    <div className="font-syne text-white">
      <div className="mt-[7rem]">
        <div className="max-w-[90vw]">
          <h3 className="text-center text-4xl font-semibold">Our Partners</h3>
          <div className={`${styles.header} ${"text-center w-[80vw]"}`}></div>
        </div>

        <p className="text-center mt-8 px-4 leading-loose text-[1.3rem] md:text-[1.5rem] lg:text-[2rem] lg:px-[4rem]">
          We are working with these brands to deliver quality service to our
          customers.{" "}
        </p>
      </div>
    </div>
  );
};

export default Partners;
