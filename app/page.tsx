'use client'
import Header from './components/header'
import Menu from './components/menu'

import Application from './components/application'
import Footerbar from './components/footerbar'
import Footer from './components/footer'
import Social from './components/social'
import { useState } from 'react'
import Data from './data.json'
export default function Home() {

  
  const [data,SetData]=useState(
        
    Data.filter((item)=>item.Type=="berger")

)
  return (
  <>
    <Header></Header>
    <Menu></Menu>
    <Application ></Application>
    <Social></Social>
    <Footerbar></Footerbar>
    <Footer></Footer>
  </>
  )
}
