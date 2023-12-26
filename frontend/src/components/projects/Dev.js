import React, { useEffect, useState } from 'react'
import Card from './Card';
function Page1() {
  const [data,setData]=useState([])
  const getData=async()=>{
    let result = await fetch(`${process.env.REACT_APP_BASE_URL}/getImage`)
    let data=await result.json()
    console.warn(data.name)
    setData(data.date)
    if(data.length===0){
      console.warn("there is no data")
    }
    else{
      console.warn("here is ",data)
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
      {data.map((list)=>{
        return (
          <div className='bg-orange-50 left-0 right-0 flex flex-col items-center  z-10 py-20 '>
            <Card list={list}/>
          </div>
        )
        })}
    </div>
  )
}

export default Page1