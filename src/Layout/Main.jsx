import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import './Main.css'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div className='mainContainer'>
      <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
