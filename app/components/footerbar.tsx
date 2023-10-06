import React from 'react'
import { SiKfc } from "react-icons/si";
import { BsWhatsapp,BsShop, BsTwitter, BsYoutube, BsTelegram } from 'react-icons/bs';
const footerbar = () => {
  return (
    <div className="bg-gradient-to-t from-red-500 to-red-700 py-3 lg:py-0">
        <div className="container mx-auto text-white flex justify-center gap-4 lg:justify-around flex-wrap">
              <div className='flex lg:gap-14 justify-center flex-col lg:flex-row items-center'>
                  <h2 className='lg:text-9xl text-6xl'><SiKfc></SiKfc></h2>
                  <div className="flex items-center gap-3 text-2xl font-bold "><BsWhatsapp></BsWhatsapp>444 3 555</div>
                  <div className="flex items-center gap-3 text-2xl font-bold "><BsShop></BsShop>012121 205 00 00</div>
              </div>
              <div className='flex gap-4 text-3xl items-center'>
                <div className='p-2 lg:p-3 bg-red-800 rounded-full border-white border-2 cursor-pointer'><a href='?'><BsTwitter></BsTwitter></a></div>
                <div className='p-2 lg:p-3 bg-red-800 rounded-full border-white border-2 cursor-pointer'><a href='?'><BsWhatsapp></BsWhatsapp></a></div>
                <div className='p-2 lg:p-3 bg-red-800 rounded-full border-white border-2 cursor-pointer'><a href='?'><BsYoutube></BsYoutube></a></div>
                <div className='p-2 lg:p-3 bg-red-800 rounded-full border-white border-2 cursor-pointer'><a href='?'><BsTelegram></BsTelegram></a></div>
              </div>
        </div>
    </div>
  )
}

export default footerbar