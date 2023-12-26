import React from 'react'

function Header(props) {
  return (
    <div className="bg-slate-800 left-0 right-0 relative z-10 px-4 flex flex-col items-center pb-10 pt-10">
         <div className="Portfolio text-center text-white text-7xl font-extrabold font-['Epilogue'] leading-[80px] mb-10">{props.head}</div>
         <div className="AgencyProvidesAFu max-w-[570px] px-2 text-center text-white text-opacity-60 text-base font-normal font-['Epilogue'] leading-loose">{props.title}</div>
    </div>
  )
}

export default Header