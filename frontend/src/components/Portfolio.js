import React from "react";
import shopeasy from "../assests/shopeasy.png";
import gif from "../assests/gif.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function Portfolio() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10 px-4  flex flex-col pt-10 pb-20">
      <div className=" px-20 mb-10 ">
        <div className=" text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px] mb-2">
          Projects
        </div>
        <div className="flex lg:flex-row lg:justify-between flex-col items-start gap-y-4">
          <div className="LatestWork  text-white text-[50px] font-extrabold font-['Epilogue'] leading-[64px]">
            Latest Work
          </div>
          <button className='rounded-md border border-white border-opacity-30 text-center text-white text-sm font-black font-["Epilogue"] uppercase px-6  py-2 justify-self-end'>
            <NavLink to="/project">Explore More</NavLink>
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 place-content-center  md:px-20 sm:px-10 px-4 gap-y-12 ">
        <motion.div
          className="  h-[250px]   rounded-md   relative cursor-pointer  "
          style={{
            backgroundImage: `url(${shopeasy})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "brown",
          }}
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "anticipate", duration: 0.8 }}
        >
          <div className=" rounded-md w-full h-full absolute top-0 left-0 right-0 bg-black bg-opacity-0 opacity-0 flex flex-col items-center justify-center p-5 transition delay-75 duration-300 ease-in-out hover:bg-opacity-75 hover:opacity-100">
            <button className=" bg-[#B550F8] text-white rounded-[19px]  text-lg  font-bold font-['Epilogue'] leading-loose px-8 py-2 mb-3 transition delay-75 duration-300 ease-in-out hover:scale-105" onClick={() => openInNewTab('https://mellow-stardust-5536b8.netlify.app/')}>
              Click Here
            </button>
          </div>
        </motion.div>
        <motion.div
          className="  h-[250px]   rounded-md   relative cursor-pointer  "
          style={{
            backgroundImage: `url(${gif})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "brown",
          }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "anticipate", duration: 0.8 }}
        >
          <div className=" rounded-md w-full h-full absolute top-0 left-0 right-0 bg-black bg-opacity-0 opacity-0 flex flex-col items-center justify-center p-5 transition delay-75 duration-300 ease-in-out hover:bg-opacity-75 hover:opacity-100">
            <button className=" bg-[#B550F8] text-white rounded-[19px]  text-lg  font-bold font-['Epilogue'] leading-loose px-8 py-2 mb-3 transition delay-75 duration-300 ease-in-out hover:scale-105 " onClick={() => openInNewTab('https://sreejita-random-gifs.netlify.app/')}>
              Click Here
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Portfolio;
