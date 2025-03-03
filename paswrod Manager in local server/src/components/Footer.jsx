import React from 'react'

const Footer = () => {
  return (
    <div>
    <div className='bg-slate-800 text-white flex flex-col justify-center items-center  w-full'>
            <div className="logo font-bold text-white text-2xl">
                <span className='text-indigo-500'> &lt;</span>

                <span>Pass</span><span className='text-indigo-500'>OP/&gt;</span>


            </div>
            <div className='flex justify-center items-center '><span className='text-red-400'>Created with</span>  <img className='w-7 mx-2' src="icons/heart.png" alt="" /><span className='text-red-300'>by codewithVikas</span>  </div>
        </div>
    </div>
  )
}

export default Footer
