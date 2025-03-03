import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-gray-900 text-white'>
    <div className="logo md:mycontainer  flex   justify-between  text-lg text-center items-center py-1  " >
     
<img className='h-[50px] w-[70px] mx-4' src="https://media.licdn.com/dms/image/D5612AQEP8IizZCQvkg/article-cover_image-shrink_720_1280/0/1714242134908?e=2147483647&v=beta&t=NN5Kws_pvRGEVVdPCxjsq018p0C3DROQ4wmzpE_x8LM" alt="logo.png" />

    <ul className='flex space-x-6 mx-6 my-0.5 '>
        <a href="/Home"><ul className='hover:text-gray-500 hover:font-bold'>Home</ul></a>
        <a href="/About"><ul className='hover:text-gray-500 hover:font-bold' >About</ul></a>
        <a href="/Contact"><ul className='hover:text-gray-500 hover:font-bold'>  Contact</ul></a>
    </ul>
    </div>
  
   </nav>
  )
}

export default Navbar
