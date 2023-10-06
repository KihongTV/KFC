import React from 'react'
import Navbar from './navbar'
import { fadeIn } from './varients'
import { motion } from 'framer-motion'

const header = () => {
  return (
    <div className='lg:h-[700px] h-full  pb-16 pt-10 lg:pt-0  lg:pb-0 w-full bg-gradient-to-t from-red-500 to-red-700 '>
     <Navbar></Navbar>
     <div className='flex   flex-col-reverse lg:flex-row  justify-around items-center '>
        <div className="flex flex-col text-white font-semibold drop-shadow-2xl gap-5  text-center lg:text-left text-4xl lg:text-6xl">
          <motion.h2 variants={fadeIn('up',0.01)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.1}} className='uppercase'>Bargain <br /> bucket menu <br /> campaign</motion.h2>
          <motion.p variants={fadeIn('up',0.01)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.1}} className='text-sm max-w-lg mx-auto px-2 lg:px-0 lg:mx-0 text-zinc-300 font-medium'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur fuga repellat doloremque ipsum ratione reprehenderit blanditiis, inventore natus possimus dolore aspernatur necessitatibus dolores sunt debitis, suscipit ipsam in amet accusantium.</motion.p>
          <motion.button variants={fadeIn('up',0.01)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.1}} className='uppercase mx-auto lg:mx-0 rounded-[40px] border-2 border-white  w-[280px] bg-gradient-to-t from-red-600 to-red-700 py-3 text-xl'>Order Now</motion.button>
        </div>
        <div className='flex '>
        <motion.img variants={fadeIn('up',0.01)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.1}} src="/header.png" className=' w-[90%] md:w-[500px] lg:w-[600px] xl:w-[700px] flex justify-center lg:justify-start   my-auto lg:h-auto mx-auto lg:mx-0 object-scale-down' alt="" />
     </div>
     </div>
   
    </div>
  )
}

export default header