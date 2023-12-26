import React from "react";
import dev from "../assests/dev.png";
import prog from "../assests/prog.png";
import learn from "../assests/learn.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function Skills() {
  return (
    <div className="bg-orange-50 left-0 right-0 relative flex flex-col items-center z-10 px-4 pb-4 pt-10 ">
      <div className=" text-center text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px] mb-5">
        Skills
      </div>
      <div className=" text-center text-orange-950 text-[56px] font-extrabold font-['Epilogue'] leading-[64px] mb-8">
        How I Can Help <br />
        You With
      </div>
      <div className="flex lg:flex-row  lg:justify-center flex-col items-center gap-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: -10 }}
          transition={{ ease: "anticipate", duration: 1.2 }}
          className="box1 rounded-tl-md rounded-bl-md border border-red-200 flex flex-col items-start p-5 max-w-[500px]"
        >
          <div className="flex flex-row justify-start items-center mb-2">
            <img src={dev} className="w-12 h-12 mr-4" />
            <div className="Design text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Development
            </div>
          </div>
          <div className="AgencyIsABusiness  text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose mb-2">
           Web development covers websites and web apps, encompassing front-end, back-end, and full-stack expertise.
          </div>
          <div className="flex flex-row justify-start items-center">
            <img src={learn} className="w-12 h-12 mr-2" />
            <div className=" text-orange-950 text-base font-normal font-['Epilogue'] leading-loose cursor-pointer">
              <NavLink to="/skill/web">Learn More</NavLink>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: -10 }}
          transition={{ ease: "anticipate", duration: 1.2 }}
          className="box2  rounded-tr-md rounded-br-md border border-red-200 flex flex-col items-start p-5 max-w-[500px]"
        >
          <div className="flex flex-row justify-start items-center mb-2">
            <img src={prog} className="w-12 h-12 mr-4" />
            <div className="Design text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              Programming
            </div>
          </div>
          <div className="AgencyIsABusiness  text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose mb-2">
           C++ offers powerful tools like classes, templates, and libraries, ideal for effective data structure implementation in programs.
          </div>
          <div className="flex flex-row justify-start items-center">
            <img src={learn} className="w-12 h-12 mr-2" />
            <div className=" text-orange-950 text-base font-normal font-['Epilogue'] leading-loose cursor-pointer">
             <NavLink to="/skill/programming">Learn More</NavLink>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="flex flex-row justify-center mt-10">
        <div className="mr-2 text-right text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
          Want to know more?
        </div>
        <div className=" cursor-pointer text-orange-950 text-base font-normal font-['Epilogue'] leading-loose">
          <NavLink to="/skill/web">Explore Now</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Skills;
