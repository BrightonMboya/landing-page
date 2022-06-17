import Image from "next/image";


const About = () => {
  return <div className="bg-[#000107] h-screen text-white font-syne ">
    <div className="h-32 w-32 py-5">
    <Image className="w-32 h-12" src="/logo.svg" alt="logo" width={100} height={70} quality={100} />
    </div>
    
    <div className="px-12">
    <hr className="text-[#418D89] h-1.5 w-20 bg-[#418D89] rounded" />
    <h1 className=" text-[38px] w-5/6 md:text-[45px] md:w-1/3 lg:text-[45px] lg:w-1/5 xl:w-1/6 sm:text-[45px] sm:w-1/6 leading-tight">Global Green Visa</h1>
   
    <p className="mb-3">Your gateway to environment tourism</p>
    <button className="bg-[#418D89] w-24 h-8 shadow-md rounded flex justify-center items-center  "><a className="" href="">Join us</a> </button>
    </div>
    


  </div>;
};

export default About;


