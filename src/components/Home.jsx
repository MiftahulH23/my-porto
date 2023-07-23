import React from 'react'
import Foto from '../assets/img/image1.png'

const Home = () => {
  return (
    <div className='container py-10'>
        <p className='bg-gradient-to-r from-green to-blue text-transparent bg-clip-text text-5xl font-bold'>Hi Im Miftahul Huda, a special human <br /> with some ability to love learning <br /> and working on teamwork.</p>
        <div className='mt-10 grid grid-cols-3 gap-10'>
          <div className='flex  col-span-2 gap-5'>
            <div className='w-36 h-32 rounded-full border-2'>
              <img src={Foto} alt="" />
            </div>
            <div>
              <p className='text-white text-3xl font-bold'>Biography</p>
              <p className='text-xl mt-5 font-medium text-slate-300'>I am a frontend web developer currently majoring  in information systems</p>
            </div>
          </div>
          <div className='flex flex-col'>
            <p className='text-white text-3xl font-bold'>What I Do?</p>
            <p className='text-slate-300 text-xl mt-5 font-medium'>Build and maintain websites the way clients want and my motto is Beauty and function are equally important.</p>
          </div>
        </div>
    </div>
  )
}

export default Home