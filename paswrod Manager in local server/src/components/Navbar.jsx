import React from 'react'

export default function Navbar() {
  return (
    <>
 <nav className='w-full space-x-1.5 text-sm font-bold items-center p-3 ' >
    <div className="container  text-black  flex p-3  justify-between">
<div className="logo justify-items-start  space-x-1.5 ">
  <img src="./images/brand_logo.png" alt="" srcset="" /> </div> 
<div className="components flex ">
    <ul className='flex space-x-5 justify-center items-center mx-2  '>
        <li className='cursor-pointer '>HOME</li>
        <li className='cursor-pointer '>LOCATION</li>
        <li className='cursor-pointer '>ABOUT</li>
        <li className='cursor-pointer '>CONTACT</li>
        </ul>
        </div>
       
        <button className='text-white unset bg-red-800 p-2 my-2 border-solid border-3  justify-end items-center text-xs '>login</button>
</div>
       



</nav>
  
   

</>
      
  
  )
}
