'use client'
import {motion} from "framer-motion"
import { fadeIn } from "./varients"
interface Props{
    image:string,
    name:string,
    text:string,
    price:string,
}


const boxcomponent:React.FC<Props> = ({image,name,text,price}) => {
  return (
    <div className='w-11/12 mx-auto lg:mx-0 md:w-[400px]  md:h-[236px]  bg-white flex lg:p-6 p-3 rounded-lg  shadow-black shadow-lg'>
    <div className='flex flex-col'>
        <motion.h2 variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-xl text-black font-bold uppercase'>{name}</motion.h2>
        <motion.p variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-zinc-500 text-base '>{text}</motion.p>
        <motion.h4  variants={fadeIn('up',0.1)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.6}} className='text-red-500 font-semibold text-2xl'>{price} $</motion.h4>
        <motion.button  variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.2}} className='w-[140px] lg:w-[160px] py-4 bg-red-700 mt-4 font-semibold text-white shadow-lg shadow-black  text-sm lg:text-base'>Add To Basket</motion.button>
    </div>
    <div className="relative w-40  h-40 bg-yellow-500 rounded-full">
        <motion.img  variants={fadeIn('down',0.2)} initial="hidden" whileInView={'show'} exit={{opacity: 0 }}  viewport={{once:true,amount:0.2}} src={`/${image}`} className=' w-[150px] h-[150px] lg:scale-125 object-scale-down  absolute right-5' alt="" />
    </div>
</div>
  )
}

export default boxcomponent