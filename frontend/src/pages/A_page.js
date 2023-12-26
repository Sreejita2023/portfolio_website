import React,{useEffect} from "react";
import Header from "../components/Header";
import start from "../assests/start.png";
import block from "../assests/block.png";
import { NavLink } from "react-router-dom";
function A_page() {
  const heading = "About Me";
  const title =
    "Please take a moment to review my profile, where you can also find my LeetCode and GitHub accounts for further insight and exploration.";
  
    useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    }, []);
      
  return (
    <div>
      <Header head={heading} title={title} />
      <div className=" bg-orange-50 flex flex-col items-center pt-12">
        <img
          src="https://media.giphy.com/media/L1R1tvI9svkIWwpVYr/giphy.gif"
          className=" lg:w-7/12 md:w-9/12 w-10/12  mb-10"
        />
        <div className="flex flex-col items-start gap-y-4 py-3 px-5 ">
          <div className="GabrielPires text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
            Sreejita Sen
          </div>
          <div className="ProfessionalWebDes max-w-[570px]  text-orange-950 text-[56px] font-extrabold font-['Epilogue'] leading-[64px]">
           MERN stack developer
          </div>
          <div className="AbilityToPutThems max-w-[570px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
           Hello, I am a pre-final year B.Tech student specializing in Information Technology at JSS Academy of Technical Education, Noida. Proficiency in React, Node.js, MongoDB, and Express.js defines my skill set. I have a strong inclination towards competitive coding, regularly practicing on LeetCode and GeeksforGeeks. This has honed my expertise in data structures, algorithms, database management systems, and operating systems.
            <br />
            <br />Moreover, my active participation in Kavach and Smart India Hackathon speaks volumes about my problem-solving abilities. Alongside this, my year-long stint in the EDC college society has significantly contributed to refining my skills in team management and design. I invite you to explore further insights into my capabilities through my LeetCode and GitHub profiles. Thank you for considering my profile.
          </div>
        </div>
      </div>
      <div className=" bg-red-100 relative pt-20">
        <img src={start} className=" w-[100px] h-[100px] absolute -top-10 left-9 " />
        <div className="flex lg:flex-row lg:justify-around flex-col items-center gap-y-8 ">
          <div className="flex flex-col lg:items-start items-center gap-y-3">
            <div className="GetStarted text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">
              Get Started
            </div>
            <div className="  text-orange-950 text-2xl font-bold font-['Epilogue'] leading-loose">
              I Help Companies
              Move Faster
            </div>
            <button className='bg-red-400  px-6 py-3 rounded-md text-center text-white text-sm font-black font-["Epilogue"] uppercase'>
              <NavLink to="/contact" >Contact Me</NavLink>
            </button>
          </div>
          <div className="PutThemselvesInTh w-[370px] text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">
          Thank you for taking the time to review my profile. Your attention to my accomplishments and skills is greatly appreciated. 
        </div>
        <div><img src={block} className="max-w-[350px] max-h-[300px]"/></div>
        </div>
       
      </div>
    </div>
  );
}

export default A_page;
