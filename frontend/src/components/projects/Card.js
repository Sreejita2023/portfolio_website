import React from 'react'
import { motion } from "framer-motion";
function Card(props) {
  const list = props.list;

  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return (
   <div className='w-11/12'>
       <motion.div
          className="  h-[450px]   rounded-md cursor-pointer  "
          style={{
            backgroundImage:`url(${list.imageUrl})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundColor: "brown",
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className=" rounded-md w-full h-full  top-0 left-0 right-0 bg-black bg-opacity-0 opacity-0 flex flex-col items-center gap-y-20 justify-center p-5 transition delay-75 duration-300 ease-in-out hover:bg-opacity-75 hover:opacity-100">
            <h1 className="text-4xl text-white font-bold font-['Epilogue'] leading-loose text-center">
              {list.name}
            </h1>
            <p className="text-base text-white font-semibold lg:w-8/12  font-['Epilogue'] leading-loose text-center">
              {list.description}
            </p>
            <div className='flex flex-row justify-between sm:justify-around w-10/12'>
            <button className=" bg-[#B550F8] text-white rounded-[19px]  text-lg  font-bold font-['Epilogue'] leading-loose px-8 py-2 mb-3 transition delay-75 duration-300 ease-in-out hover:scale-105" onClick={() => openInNewTab(`${list.gitlink}`)}>
              Github Link
            </button>
            <button className=" bg-[#F7CC47] text-white rounded-[19px]  text-lg  font-bold font-['Epilogue'] leading-loose px-8 py-2 mb-3 transition delay-75 duration-300 ease-in-out hover:scale-105" onClick={() => openInNewTab(`${list.deploylink}`)}>
              Deploy Link
            </button>
            </div>
          </div>
        </motion.div>
   </div>
    
  )
}

export default Card