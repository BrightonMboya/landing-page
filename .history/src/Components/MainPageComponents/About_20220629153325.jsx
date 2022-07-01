import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#faf9f6] h-[20rem]">
      <div className="ml-5 pt-[2rem]">
        <h3 className="text-center text-[1.7rem]">
          Why do you need a Global Green Visa
        </h3>
        <p className="mt-3 text-left px-2 text-lg leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim.Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis
          molestie, dictum est a, mattis tellus. Sed dignissim.
        </p>
      </div>
      <div className="">
        <Image src="/img2.jpg" layout="instrinsic" width={80} height={50} />
      </div>
    </div>
  );
};

export default About;
