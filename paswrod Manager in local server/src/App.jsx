import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
// import Footer from './components/Footer'
function App() {
 

  return (
    <>
     <Navbar/>
     <main>
      <div className="container font-bold flex justify-between ">
      <div className="left   w-1/2 relative left-25 mx-auto " >
    <h1 className='text-6xl m-y-2 space-y-2 font-bold' >YOUR FEET<br />
     DESERVE <br />THE BEST</h1> <br />
          <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>    
     <br />
     <div className="btn text-xl space-x-3 my-1.5 mx-2.5 text-white rounded-full h-3 ">
     <button className='bg-red-800 cursor-pointer'>Shop now</button>
     <button className='bg-gray-400 cursor-pointer' >category</button>
     </div>
     <br />
      <p>Also Availble On</p>
      <br />
      <img src="./images/shops.png" alt="" />
   
           </div>
      <div className="right   relative h-2 w-1/2">
        <div className="img">
          <img src="./images/shoe_image.png" alt="" srcset="" />
        </div>
      </div>
      </div>
     </main>     
   
    </>
  )
}

export default App
