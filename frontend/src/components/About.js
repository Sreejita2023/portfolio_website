import React from "react";
import group from "../assests/group1.png";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
function About() {
  return (
    <div className="bg-orange-50 left-0 right-0 flex flex-col relative  z-10 px-4 pb-14 pt-20 ">
      <div className="flex lg:flex-row lg:justify-around flex-col items-center pb-20 gap-y-6">
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
        <div className="flex flex-col items-start">
          <div className="About mb-5 text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            About
          </div>
          <div className="mb-3 text-orange-950 text-[56px] font-extrabold font-['Epilogue'] leading-[64px]">
            Fullstack Developer <br />
            Programmer
          </div>
          <div className="mb-3 text-orange-950 text-xl font-normal font-['Epilogue'] leading-loose">
          Focused on project delivery, merging commercial  <br/> insight with technical proficiency.
          </div>
          <div className="mb-3 w-[470px] h-[98px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
          Hello, I am a pre-final year B.Tech student specializing in Information Technology at JSS Academy of Technical Education, Noida.
          </div>
          <button className=' bg-white rounded-md shadow text-center text-orange-950 text-sm font-black font-["Epilogue"] uppercase px-8 py-4 transition delay-75 duration-300 ease-in-out hover:scale-110'>
            <NavLink to="/about">About Me</NavLink>
          </button>
        </div>
      </div>
      <div className="Rectangle w-10/12 h-px mx-auto bg-red-200" />
     
      <div className="flex lg:flex-row lg:justify-around flex-col items-center pt-20 gap-y-12">
        <div>
        <div className="HowWeWork mb-10 items-start text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">How I work</div>   
        <div className="MakingYourProjects mb-4 text-orange-950 text-[40px] font-extrabold font-['Epilogue'] leading-[48px]">Making Your Projects <br/>Look Awesome</div>
        <div className="TechnicalSkillsDe mb-12 w-[470px] h-[68px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">Technical skills, design, business understanding, ability to put themselves in the project.</div>
        <div className="ReadMore cursor-pointer  text-orange-950 text-base font-normal font-['Epilogue'] leading-loose"><NavLink to="/about" >Read More</NavLink></div>
        </div>
        <div className="Rectangle w-10/12 h-px mx-auto block lg:hidden bg-red-200" />
        <div>
            <motion.div className="flex flex-row items-center mb-8" initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "anticipate", duration: 0.8,delay:0.4 }}>
              <div className=" text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px] mr-5">1</div>
              <div className="FullServiceRangeI text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">Creating attractive, user-friendly projects</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "anticipate", duration: 0.8,delay:0.7 }} className="flex flex-row items-center mb-8">
              <div className=" text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px] mr-5">2</div>
              <div className="FullServiceRangeI text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">Meeting project deadlines reliably</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ease: "anticipate", duration: 0.8,delay:1 }} className="flex flex-row items-center mb-8">
              <div className=" text-orange-950 text-7xl font-extrabold font-['Epilogue'] leading-[80px] mr-5">3</div>
              <div className="FullServiceRangeI text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">Implementing AI for enhanced functionality</div>
            </motion.div>
        </div>
  
      </div>
    </div>
  );
}

export default About;
