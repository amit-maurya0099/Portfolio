import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";


const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder", "Full Stack Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 1000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className=" text-4xl md:text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize ">Amit Maurya</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        A dedicated Full Stack Developer who thrives on transforming complex ideas into user-friendly digital experiences. With a strong background in both front-end and back-end development, I enjoy working collaboratively to bring ambitious projects to life and help businesses achieve their digital goals.
        </p>
        
      </div>
       <div className="-my-10 ">
       <a href="https://drive.google.com/file/d/1l8f7ti3myudNASyQEvlG1FhJ-YMm_2SX/view?usp=sharing"><button className="text-lg border border-black text-black bg-designColor px-4 py-2 rounded-xl " >
          Download CV
        </button></a> </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me on
          </h2>
          <div className="flex gap-4">
            <a href="https://github.com/amit-maurya0099" target="blank">
              <span className="bannerIcon">
                <FaGithub className="size-6" />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/amit-maurya-744355230" target="blank">
              <span className="bannerIcon">
                <FaLinkedinIn className="size-6" />
              </span>
            </a>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default LeftBanner;
