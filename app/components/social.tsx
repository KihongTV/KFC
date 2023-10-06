'use client'

import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import { fadeIn } from './varients'
import {motion} from 'framer-motion'
const social = () => {
  return (
    <div className='w-full bg-red-200 h-full  py-10 lg:py-20'>
        
        <div className='flex w-full flex-col gap-10 justify-center items-center'>
            <div className="flex gap-12 flex-wrap">
                <motion.div variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='flex relative w-9/12 mx-auto md:w-[400px] px-4 py-1 bg-slate-200 shadow-md shadow-black'>
                   <div className="flex flex-col gap-5">
                   <div>
                   <div className="absolute bg-cyan-500 p-4 text-2xl text-white rounded-full  -top-4 -left-7 shadow-md shadow-black">
                   <BsTwitter  className=''></BsTwitter>
                   </div>
                   <h2 className='ml-6 font-bold'>FroncoEjder</h2>
                   </div>
                   <div className='font-bold text-sm'>
                   Lorem <a href='?' className='text-cyan-400 '>ipsum</a> dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   </div>

                   </div>

                </motion.div>
                <motion.div variants={fadeIn('up',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='flex relative w-9/12 mx-auto md:w-[400px] px-4 py-1 bg-slate-200 shadow-md shadow-black'>
                   <div className="flex flex-col gap-5">
                   <div>
                   <div className="absolute bg-cyan-500 p-4 text-2xl text-white rounded-full  -top-4 -left-7 shadow-md shadow-black">
                   <BsTwitter  className=''></BsTwitter>
                   </div>
                   <h2 className='ml-6 font-bold'>FroncoEjder</h2>
                   </div>
                   <div className='font-bold text-sm'>
                   Lorem <a href='?' className='text-cyan-400 '>ipsum</a> dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   </div>

                   </div>

                </motion.div>
            </div>
            <div className="flex gap-12 flex-wrap">
                <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='flex relative w-9/12 mx-auto md:w-[250px]  px-4 py-1 bg-slate-200 shadow-md shadow-black'>
                   <div className="flex flex-col gap-5">
                   <div>
                   <div className="absolute bg-red-500 p-4 text-2xl text-white rounded-full  -top-4 -left-7 shadow-md shadow-black">
                   <BsInstagram  className=''></BsInstagram>
                   </div>
                   <h2 className='ml-6 font-bold'>FroncoEjder</h2>
                   </div>
                   <div className='font-bold text-sm h-full'>
                        <img className='w-full mx-auto h-5/6 object-cover' src='/foodinstagram.jpg'></img>
                   </div>

                   </div>

                </motion.div>
                <motion.div variants={fadeIn('up',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='flex relative w-9/12 mx-auto md:w-[250px] lg:h-[300px] px-4 py-1 bg-slate-200 shadow-md shadow-black'>
                   <div className="flex flex-col gap-5">
                   <div>
                   <div className="absolute bg-cyan-800 p-4 text-2xl text-white rounded-full  -top-4 -left-7 shadow-md shadow-black">
                   <FaFacebookF  className=''></FaFacebookF>
                   </div>
                   <h2 className='ml-6 font-bold'>FroncoEjder</h2>
                   </div>
                   <div className='font-bold text-sm'>
                   Lorem <a href='?' className='text-cyan-800 '>ipsum</a> dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   </div>

                   </div>

                </motion.div>
                <motion.div variants={fadeIn('up',0.3)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='flex relative w-9/12 mx-auto md:w-[250px] lg:h-[300px] px-4 py-1 bg-slate-200 shadow-md shadow-black'>
                   <div className="flex flex-col gap-5">
                   <div>
                   <div className="absolute bg-cyan-800 p-4 text-2xl text-white rounded-full  -top-4 -left-7 shadow-md shadow-black">
                   <FaFacebookF  className=''></FaFacebookF>
                   </div>
                   <h2 className='ml-6 font-bold'>FroncoEjder</h2>
                   </div>
                   <div className='font-bold text-sm'>
                   Lorem <a href='?' className='text-cyan-800 '>ipsum</a> dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                   </div>

                   </div>

                </motion.div>
            </div>
        </div>
        
        </div>
   
  )
}

export default social