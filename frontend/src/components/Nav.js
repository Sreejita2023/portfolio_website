import React,{ useState} from 'react'
import logo from '../assests/logo.png'
import { NavLink } from 'react-router-dom'
import  Short from './Short'

function Nav() {
  const [add,setAdd]=useState('none')
  function handleHighlightTab() {
    setAdd('underline white solid')
  }
  return (
    <div className='bg-slate-800 flex flex-row top-0 left-0 right-0 py-2 fixed justify-around items-center z-20 '>
       <div className='flex flex-row'>
         <img src={logo} alt="Logo" className='w-48 h-16' />
         {/* <span className='text-white text-2xl font-bold leading-loose'>Webfolio</span> */}
       </div>
       <div className='text-center  hidden  text-white text-base font-normal leading-loose md:grid grid-cols-4 gap-5'>
          <div className=' cursor-pointer underline-offset-8 '><NavLink to="/" style={({ isActive }) => ({textDecoration: isActive ? 'underline white solid 3px' :'none' ,})}>Home</NavLink></div>
          <div className=' cursor-pointer underline-offset-8'><NavLink to="/project" style={({ isActive }) => ({textDecoration: isActive ? 'underline white solid 3px' :'none' ,})}>Projects</NavLink></div>
          <div className=' cursor-pointer underline-offset-8'><NavLink to="/skill/web" style={({ isActive }) => ({textDecoration: isActive ? 'underline white solid 3px' :'none' ,})}>Skills</NavLink></div>
          <div className=' cursor-pointer underline-offset-8'><NavLink to="/about" style={({ isActive }) => ({textDecoration: isActive ? 'underline white solid 3px' :'none' ,})}>About me</NavLink></div>
       </div>
       <div className='right-0 md:flex hidden'>
          <button className='text-center text-white text-sm font-black  uppercase  rounded-md border border-white border-opacity-30 py-3 px-2'><NavLink to="/contact">Contact me</NavLink></button>
       </div>
      <div className='md:hidden flex'><Short/></div>
  </div>
  )
}

export default Nav

