'use client'
import Link from 'next/link'
import {useState} from 'react'
import { BsBasket2,BsFillPersonFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import { BiMenu } from "react-icons/bi";
import { SiKfc } from "react-icons/si";
const navbar = () => {
  const [header,setheader]=useState(false)

  return (
    <div className="lg:container fixed top-0 z-50 w-full bg-red-700 lg:bg-transparent  mx-auto lg:w-full  lg:static flex lg:py-3 px-1 items-center  justify-around 2xl:justify-between">
      <div className="lg:hidden w-1/3 justify-start flex gap-2">
      <div className='w-8 h-8 rounded-full flex justify-center font-extrabold items-center text-xl shadow-black shadow-md bg-white text-red-600 '><BsFillPersonFill></BsFillPersonFill></div>
      <div className='w-8 h-8 rounded-full text-xl flex font-extrabold justify-center items-center shadow-black shadow-md relative bg-white text-red-600 '><BsBasket2></BsBasket2><div className='absolute w-4 flex justify-center items-center  h-4 text-sm bg-slate-900 rounded-full top-0 -right-2 text-white'>0</div></div>
      </div>
      <div className="lg:text-9xl w-1/3 flex justify-center lg:justify-start text-7xl text-white drop-shadow-lg"><SiKfc ></SiKfc></div>
       
       <div className={`  ${header==true?'flex':'hidden'}  w-full  bg-red-700  lg:w-fit lg:bg-transparent  absolute top-[72px] right-1/2 transform translate-x-1/2 lg:translate-x-0 lg:static lg:flex lg:flex-row flex-col uppercase  justify-center text-xl font-medium drop-shadow-xl  text-white gap-6 items-center`}>
          <Link href="/about">About us</Link>
          <Link href="/findus">Find us</Link>
          <Link href="/findus">All campaigns</Link>
          <div className="flex gap-2">
          <div className='lg:flex hidden w-8 h-8 lg:w-12 lg:h-12 rounded-full  justify-center font-extrabold items-center text-2xl shadow-black shadow-md bg-white text-red-600 '><BsFillPersonFill></BsFillPersonFill></div>
          <div className='lg:flex hidden w-8 h-8 lg:w-12 lg:h-12 rounded-full text-2xl  font-extrabold justify-center items-center shadow-black shadow-md relative bg-white text-red-600 '><BsBasket2></BsBasket2><div className='absolute w-6 flex justify-center items-center  h-6 text-sm bg-slate-900 rounded-full top-0 -right-2 text-white'>0</div></div>
     
          </div>
        </div>
        {!header?<div className='text-5xl w-1/3   justify-end flex lg:hidden cursor-pointer text-white' onClick={()=>setheader(true)}>
          <BiMenu></BiMenu>
        </div>:<div className='text-5xl w-1/3  justify-end flex lg:hidden cursor-pointer text-white' onClick={()=>setheader(false)}>
          <AiOutlineClose></AiOutlineClose>
        </div>}
        
    </div>
  )
}

export default navbar