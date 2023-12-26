import React,{useEffect} from 'react'
import Header from '../components/Header'
import Prog from '../components/skills/Prog'
import { NavLink } from 'react-router-dom'
function S_prog_page() {
  const heading="Skills"
  const title="Skilled in web development and programming languages.Explore to discover more about my diverse skill set."
   
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);

  return (
    <div>
      <Header head={heading} title={title}/>
      <div className='bg-orange-50 py-20 flex flex-col items-center relative z-10 '>
          <div className=' w-9/12  md:text-[25px]  text-[20px] font-extrabold leading-[48px] gap-5 flex flex-row text-slate-800 justify-around'>
              <div className=' cursor-pointer underline-offset-8 '><NavLink to="/skill/web" style={({ isActive }) => ({textDecoration: isActive ? 'underline #EF6D58 solid 8px ' :'none' ,})}>Web Development</NavLink></div>
              <div className=' cursor-pointer underline-offset-8'><NavLink to="/skill/programming" style={({ isActive }) => ({textDecoration: isActive ? 'underline #EF6D58 solid 8px' :'none' ,})}>Programming</NavLink></div>
           </div>
           <div className="Rectangle w-9/12 h-px bg-red-200  -z-10" />
           <div className='pt-6'>
             <Prog/>
           </div>
      </div>
    </div>
  )
}

export default S_prog_page