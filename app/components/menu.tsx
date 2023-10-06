'use client'

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Data from "../data.json"
import MenuData from "../menudata.json"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import Boxcomponent from "./boxcomponent"
import {motion} from "framer-motion"

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { fadeIn } from './varients';

const menu = () => {
  const [state,setState]=useState("Berger")
  const [data,SetData]=useState(
        
    Data.filter((item)=>item.Type==state)

)
  const DataChange=(name)=>{
      
      SetData(Data.filter((item)=>item.Type==name))
      setState(name)
  }
  return (
    <>
      <div className="relative">
        <div className="absolute uppercase px-12 h-12 bg-gradient-to-t flex items-center text-slate-300 font-bold drop-shadow-xl z-10 from-yellow-500 shadow-lg shadow-slate-600 -top-6  menu right-1/2 transform translate-x-1/2 to-yellow-600 rounded-3xl">Menus</div>
    </div>
    <div  className=' z-10 w-full shadow-lg shadow-slate-600   pt-12 pb-2 '>
      <div className="container text-black font-bold drop-shadow-2xl text-center mx-auto text-xl uppercase flex justify-center  gap-2">
      <Swiper
        slidesPerView={'auto'}
        
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {MenuData.map(item=><SwiperSlide onClick={()=>DataChange(item.name)}   className='flex cursor-pointer flex-col gap-2'>
         <img  src={item.imageAddress} className=' min-w-[100px] selector  h-[100px] lg:min-w-[120px] lg:h-[120px] object-scale-down' alt="" />
         <h2 className={`${state==item.name?'text-red-700':'text-black'}`}>{item.name}</h2>
        </SwiperSlide>)}
      
        </Swiper>
      </div>
    </div>
    <div className="bg-red-200 pt-10 lg:pb-24 pb-10">
      <div className='container mx-auto flex flex-wrap justify-center items-center gap-4'>
            {data.map(item=><Boxcomponent key={item.id} text={item.text}  name={item.name} price={item.price}  image={item.image} ></Boxcomponent>)}
    
          <div className='w-11/12 mx-auto lg:mx-0 md:w-[400px] md:h-[236px]  bg-gradient-to-b from-red-500 to-red-800 rounded-lg flex lg:p-6 p-3 shadow-black shadow-lg'>
              <div className='flex flex-col'>
                  <motion.h2 variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-xl lg:text-3xl text-white font-bold uppercase'>Suda</motion.h2>
                  <p className='text-zinc-300 text-base'>Please Choose your Suda</p>
                  <h4 className='text-zinc-200 font-semibold text-2xl'>1.20 $</h4>
                  <motion.button variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='w-[140px] lg:w-[160px] py-4 bg-white text-black mt-4 font-semibold  shadow-lg shadow-black  text-sm lg:text-base'>Add To Basket</motion.button>
              </div>
              <div className="relative w-40  h-40 bg-white rounded-full">
                  <motion.img variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.2}} src="/suda/coca.png" className=' w-full h-full lg:scale-125 object-scale-down absolute right-5' alt="" />
              </div>
          </div>
          <div className='w-11/12 mx-auto lg:mx-0 md:w-[400px]  md:h-[236px]  bg-[url(/newyourk.jpg)] bg-cover bg-no-repeat rounded-lg  shadow-black shadow-lg'>
             <div className='flex  justify-between items-center  lg:p-6 p-3 rounded-lg  py-2 lg:py-6 bg-black/60'>
             <div className='flex flex-col'>
                  <motion.h2 variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-xl lg:text-3xl text-white  font-bold uppercase'>Find A KFC <br /> Store <br /> Near You</motion.h2>
                  <motion.button variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='w-[140px] lg:w-[160px] py-4 bg-red-700 mt-4 font-semibold text-white shadow-lg shadow-black  text-sm lg:text-base'>Find Now</motion.button>
              </div>
              <div className="relative lg:w-40 w-full h-40  rounded-full">
                  <motion.img variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.2}} src="/location.png" className=' w-full h-full lg:scale-125 object-scale-down absolute ' alt="" />
              </div>
             </div>
          </div>
          <div className='flex gap-4 flex-wrap'>
          <div className='w-11/12 mx-auto lg:mx-0 md:w-[600px]  md:h-[224px] bg-[url(/kichen.jpg)]   bg-cover rounded-lg  shadow-black shadow-lg'>
              <div className='flex  justify-between items-center  lg:p-6 p-3 py-2 lg:py-6 rounded-lg  bg-black/60'>
              <div className='flex flex-col'>
                  <motion.h2 variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-xl lg:text-3xl text-white  rounded-lg  font-bold uppercase'>Crispy and <br />fresh chiken <br /> master chef</motion.h2>
                  <motion.button variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='w-[140px] lg:w-[160px] py-4 bg-red-700 rounded-[50px] cursor-default mt-4 font-semibold text-white shadow-lg shadow-black  text-sm lg:text-base'>100% real chiken</motion.button>
              </div>
              <div className="relative lg:w-40 w-full h-40 lg:bg-zinc-700/20 rounded-full">
                  <motion.img variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.2}} src="/chiken/chiken3.png" className=' w-full h-full lg:scale-125 object-scale-down absolute lg:right-5' alt="" />
              </div>
              </div>
          </div>
          <div className='w-11/12 mx-auto lg:mx-0 md:w-[600px] md:h-[224px] bg-[url(/food.jpeg)]   bg-cover rounded-lg   shadow-black shadow-lg'>
            <div className="flex  justify-between items-center lg:p-6 p-3 rounded-lg  bg-black/60">
            <div className='flex flex-col'>
                  <motion.h2 variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-xl lg:text-3xl text-white   rounded-lg font-bold uppercase'>you can <br /> see any data <br /> from us</motion.h2>
                  <motion.button variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='w-[140px] lg:w-[160px] py-4 bg-red-700 mt-4 font-semibold text-white shadow-lg shadow-black  text-sm lg:text-base'>See Any Thing</motion.button>
              </div>
              <div className="relative lg:w-40 w-full h-40 lg:bg-zinc-700/20 rounded-full">
                  <motion.img variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.2}} src="/kfcface.png" className=' w-full h-full lg:scale-125 object-scale-down absolute lg:right-5' alt="" />
              </div>
            </div>
           
          </div>
          </div>
      </div>
      </div>
    </>
  )
}

export default menu