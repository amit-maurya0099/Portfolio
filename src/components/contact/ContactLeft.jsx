import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";


const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={"https://media.istockphoto.com/id/1168945108/photo/close-up-image-of-male-hands-using-smartphone-with-icon-telephone-email-mobile-phone-and.jpg?s=612x612&w=0&k=20&c=aVojLzP1n3XNxuRdy7Pqdzo6OyRAVanOWDUWjbu3R8Q="}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-3xl font-bold text-white">Amit Maurya</h3>
        <p className="text-lg font-normal text-gray-400">
          Full Stack Developer (MERN Stack)
        </p>
        <p className="text-base text-gray-400 tracking-wide"></p>

        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">amitmmmut2021@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <a href="https://github.com/amit-maurya0099" target="blank">
            <span className="bannerIcon">
              <FaGithub className="size-6"/>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/amit-maurya-744355230"
            target="blank"
          >
            <span className="bannerIcon">
              <FaLinkedinIn className="size-6"/>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
