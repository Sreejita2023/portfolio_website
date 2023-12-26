import React from 'react'
import check from '../../assests/check.png'
import web from '../../assests/assets_skill/code.gif'
import data from './Progdata'
function Prog() {
  const openInNewTab = (url) => {
    window.open(url, '_blank', 'noreferrer');
  };
  return (
    <div className='flex lg:flex-row lg:justify-around lg:items-center flex-col items-center gap-y-6'>
        <div className='flex flex-col gap-y-7 px-10'>
          <div className='flex flex-col gap-y-1'>
            {
              data.map((item,index)=>{
                return(
                  <div className='flex flex-row justify-start items-center gap-x-3' key={index}>
                     <img src={check} className='w-5 h-5'/>
                     <div className=" text-orange-950 text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">{item.description}</div>
                  </div>
                )
              })
            }
          </div>
          <button className='self-start px-6 py-3 bg-amber-300 rounded-md  text-white  text-base font-black font-["Epilogue"] uppercase' onClick={() => openInNewTab('https://leetcode.com/sreejita12/')}>Leetcode Profile</button>
        </div>
        <div className='w-[400px] h-[400px]'>
            <img src={web} className='w-full h-full'/>
        </div>
    </div>
  )
}

export default Prog