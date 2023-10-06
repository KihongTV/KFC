import React from 'react'

const footer = () => {
  return (
    <div className="bg-zinc-800 py-2">
      <div className="container flex lg:justify-around justify-center items-center text-center lg:text-left flex-col-reverse gap-5 lg:flex-row mx-auto">
          <div className='flex flex-col items-center lg:items-start gap-5  text-zinc-400 font-medium'>
                <div className="flex lg:gap-32 gap-12 flex-col lg:flex-row">
                  <div className='flex flex-col items-center lg:items-start gap-5' >
                    <h6 className='text-white'>ABOUT</h6>
                    <a href="?">Contact Us</a>
                    <a href="?">Trending Tag</a>
                    <a href="?">Privecy</a>
                    
                  </div>
                  <div className='flex flex-col items-center lg:items-start gap-5' >
                    <h6 className='text-white'>SITE MAP</h6>
                    <a href="?">Home</a>
                    <a href="?">Store Location</a>
                    
                  </div>
                  <div className='flex flex-col items-center lg:items-start gap-5' >
                    <h6 className='text-white'> <nav>CREATED BY</nav></h6>
                    <a href="?">React Js</a>
                    <a href="?">Next Js</a>
                    <a href="?">Node Js</a>
                    <a href="?">MySql</a>
                    
                  </div>
                </div>
                <div className='text-white text-2xl w-11/12 mx-auto lg:mx-0 lg:w-auto lg:text-inherit'>CopyRight KFC,All Right Remamber</div>
          </div>
          <img src='/kfcface.png' className='w-[200px] md:w-[300px] object-scale-down'></img>
      </div>
    </div>
  )
}

export default footer