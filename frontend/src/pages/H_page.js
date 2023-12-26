import React,{useEffect} from 'react'
import Home from '../components/Home'
import Skills from '../components/Skills'
import Portfolio from '../components/Portfolio'
import About from '../components/About'

function H_page() {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }, []);
  return (
    <div>
        <Home />
        <Skills />
        <Portfolio/>
        <About/>
    </div>
  )
}

export default H_page