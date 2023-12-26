import React from 'react'
import leetcode from '../assests/leetcode.png'
import linkedin from '../assests/linkedin.png'
import github from '../assests/github.png'
import { NavLink } from 'react-router-dom'
function Footer() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10 px-4 pb-4 pt-10">
        <div className='flex lg:flex-row lg:justify-around flex-col items-center pb-8 gap-y-8'>
         <div className="Personal  text-white text-2xl font-bold font-['Epilogue'] leading-loose">Webfolio</div>
         <div className='flex flex-col gap-y-2 text-center lg:text-left'>
         <div className="Menu cursor-pointer  text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">Menu</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose"><NavLink to="/about">About</NavLink></div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose"><NavLink to="/skill/web">Skills</NavLink></div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose"><NavLink to="/project">Projects</NavLink></div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose"><NavLink to="/contact">Contact Us</NavLink></div>
         </div>
         <div className='flex flex-col gap-y-2 text-center lg:text-left'>
         <div className="cursor-pointer  text-red-400 text-base font-normal font-['Epilogue'] uppercase leading-loose tracking-[3px]">Services</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Fullstack</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Backend</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Frontend</div>
         <div className="cursor-pointer  text-white text-base font-normal font-['Epilogue'] leading-loose">Datastruture and Algorithms</div>
         </div>
         <div className='grid grid-cols-3 gap-x-3'>
            <div className='cursor-pointer w-9 h-9'onClick={() => openInNewTab('https://leetcode.com/sreejita12/')}><img src={leetcode}/></div>
            <div className='cursor-pointer w-9 h-9' onClick={() => openInNewTab('https://www.linkedin.com/in/sreejita-sen/')}><img src={linkedin}/></div>
            <div className='cursor-pointer w-9 h-9' onClick={() => openInNewTab('https://github.com/Sreejita2023')}><img src={github}/></div>
         </div>
        </div>
        <div className="Rectangle mx-auto w-10/12 h-px bg-gray-700" />
        <div className='flex lg:flex-row lg:justify-around  flex-col items-center gap-y-6 pt-12 pb-16 '>
          <div className=" text-white text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">Copyright © All Rights Reserved.</div>
          <div className='grid grid-cols-2 gap-x-20'>
          <div className="TermsOfUse text-right text-white text-base font-normal font-['Epilogue'] leading-loose">Terms of Use</div>
          <div className="PrivacyPolicy text-right text-white text-base font-normal font-['Epilogue'] leading-loose">Privacy Policy</div>
          </div>
        </div>
    </div>
  )
}

export default Footer