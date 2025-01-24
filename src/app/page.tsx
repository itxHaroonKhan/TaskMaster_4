import Heder from "./components/Heder";
import Image from "next/image";




import React from 'react';

const Home = () => {
  return (

    <div>
      <Heder />
      <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-900 font-bold text-[44px]">
        Welcome To Our Website
        <br className="hidden lg:inline-block" />

      </h1>
      <p className="mb-8 leading-relaxed text-[32px] text-[#4C4C4C]">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry. s standard
      </p>
      <div className="flex justify-center">
      <button className="bg-[#121212] text-white w-[237px] h-16 text-[28px] mt-3 active:scale-90 hover:text-slate-950 hover:bg-slate-200">Contact US</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        src="/image/5071d41f80ee889a16dd9ca2c1eb5e9e.jfif"
        alt="Description of image"
        width={502}
        height={465}
      />
    </div>
  </div>
</section>

    </div>
  );
}

export default Home;

