import Image from "next/image";
import Link from "next/link";
import styles from "../../../styles/Home.module.css";
import Head from "next/head";

const HeroSection = () => {
  return (
    <div className="text-white h-[100vh] relative bg-[#000107]">
      <Head>
        <title>Welcome to GGV</title>
        <meta name="description" content="Welcome to GGV" />
      </Head>
      <div
        className={`${"absolute h-[100vh] w-[100vw] -z-1 overflow-x-hidden bg-[rgba(0,0,0,0.1)] md:overflow-x-hidden"}`}
      >
        <Image
          src="/hero.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          alt="hero"
          style={{
            backgroundColor: "rgba(0,0,0,0.1)",
            // opacity: 0.6,
            overflow: "hidden"
          }}
        />
      </div>
      <div className={`${"absolute ml-[3rem] mt-[30vh] "} ${styles.heroText}`}>
        <h3 className="text-5xl md:text-[5.5rem]">GGV</h3>

        <h3 className="text-3xl md:text-5xl mt-3">
          Your gateway to environmental tourism
        </h3>
        <p className="">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim.
        </p>
        <Link href="#">
          <button className="mt-4 border-green border-[3px] rounded-md text-xl font-semibold px-4 py-1">
            Apply for a Visa
          </button>
        </Link>
      </div>

      <div className="absolute bottom-2 ml-[3rem] flex gap-5 mb-2">
        <Image
          src="/visitRwanda.png"
          width={100}
          height={70}
          // style={{ marginBottom: "1.5rem" }}
          alt="visitRwanda"
        />

        <Image src="/rdb.png" width={200} height={100} alt="visitRwanda" />
      </div>
    </div>
  );
};

export default HeroSection;
