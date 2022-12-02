import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../admin/Footer'
import Header from './Header'

const Main = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    
      <Footer />
      <Outlet />
    </div>
  )
}

export default Main