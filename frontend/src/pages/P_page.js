import React,{useEffect} from 'react'
import Header from '../components/Header'
import Dev from '../components/projects/Dev'
function P_page() {
  const heading="Projects"
  const title="Presented below are my diverse full-stack development projects for your review. Feel free to explore each for an in-depth understanding of my skills and capabilities."
   useEffect(() => {
      // 👇️ scroll to top on page load
      window.scrollTo({top: 0, left: 0, behavior:'smooth'});
    }, []);

  return (
    <div>
       <Header head={heading} title={title}/>
       <Dev/>
    </div>
  )
}

export default P_page