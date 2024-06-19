import React from "react";

import pic from "../../public/photo.avif";

import { FaSquareFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";

import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
import { IoLogoGithub } from "react-icons/io5";

function Home() {
  return (
    <>
      <div
        name="Home"
        className=" px-4 md:px-20 my-28 md:ml-30"
      >
        <div className="flex flex-col md:flex-row">
          <div className="mt-12 md:mt-24 space-y-2 order-2 md:order-1 m-auto">
            <span className="text-3xl ">Welcome In My Feed</span>
            <div className="flex space-x-2 text-2xl md:text-5xl">
              <h1>Hello, I'm a</h1>
              {/* <span >Developer</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Web Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-2xl text-justify">
            Hello, I'm Kunjan Panchal, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
            </p>
            <br />
            {/* social media icons */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-10">

              <div className=" space-y-5 flex flex-col items-center">
                <h1 className="font-bold text-center md:text-2xl">Available on</h1>
                <ul className="flex space-x-5">
                  <li>
                    <a href="https://www.facebook.com/kunjan.panchal.796/" target="_blank">
                      <FaSquareFacebook className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/kunjan-panchal/" target="_blank">
                      <FaLinkedin className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/KunjanPanchal/" target="_blank">
                      <IoLogoGithub className="text-3xl cursor-pointer" />
                    </a>
                  </li>

                </ul>
              </div>
              <div className=" space-y-5 flex flex-col items-center">
                <h1 className="font-bold text-center md:text-2xl">Currently working on</h1>
                <div className="flex space-x-5">
                  <SiMongodb className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-3xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src="p1.jpg"
              className="rounded-full md:w-[500px] md:h-[500px] object-cover"
              alt=""
            />
          </div>
        </div>
      </div>

      <hr />
    </>
  );
}

export default Home;
