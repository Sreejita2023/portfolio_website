import React from "react";
import group from "../assests/group.png";
import star from "../assests/Star.png";
import { motion } from "framer-motion";
import { NavLink } from 'react-router-dom'
function Home() {
  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10 px-4 flex lg:flex-row lg:justify-around  flex-col gap-y-12 items-center pb-4 pt-10">
      <div className="">
        <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px] mb-2">
          Sreejita Sen
        </div>
        <div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 360 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            src={star}
            alt="Logo"
            className=" w-[100px] h-[100px] absolute -z-30 left-[320px] top-[60px]"
          />
          <div className=" text-white text-7xl font-extrabold font-['Epilogue'] leading-[80px] mb-2">
            I’m Here <br />
            To Build Your <br />
            Dream Project
          </div>
        </div>
        <div className=" max-w-[470px]  text-white text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose mb-5">
         Technical skills, design, business understanding, ability to put themselves in the project.
        </div>
        <div className="grid grid-cols-2 gap-2 ">
          <button className="bg-red-400 rounded-md text-center text-white text-sm font-black font-['Epilogue'] uppercase py-4 hover:cursor-pointer  hover:bg-red-500">
            <NavLink to="/project" >Explore Work</NavLink>
          </button>
          <button className="text-white text-base font-normal font-['Epilogue'] leading-loose cursor-pointer">
            <NavLink to='/contact'>Contact Me</NavLink>
          </button>
        </div>
      </div>
      <div className="">
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src={group}
          alt="Logo"
          className=" w-[480px] h-[480px] "
        />
      </div>
    </div>
  );
}

export default Home;



