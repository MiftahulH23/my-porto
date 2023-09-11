import React from "react";
import Foto from "../assets/img/image1.png";
import { Aos } from "./Aos";
const Hero = () => {
  return (
    <div className="container pt-32">
      <div className="lg:grid grid-cols-2 lg:items-center">
        <div className="pb-8 lg:ml-36 ">
          <p className="">Hello word, I'm</p>
          <h1 className="bg-gradient-to-t from-green to-blue text-transparent bg-clip-text">Miftahul Huda</h1>
          <p className="">
            I am a frontend web developer currently majoring in information
            systems
          </p>
        </div>
        <div className="grid place-items-center w-full" dataAos="fade-down">
          <div className="w-52 h-52 rounded-full border-2 grid place-items-center">
            <img src={Foto} alt="" />
          </div>
        </div>
      </div>
      <div className="lg:text-left">
        <h1 className="text-white text-3xl font-bold">What I Do?</h1>
        <p className="text-slate-300 text-xl mt-5 font-medium">
          Build and maintain websites the way clients want and my motto is
          Beauty and function are equally important.
        </p>
      </div>
    </div>
  );
};

export default Hero;
