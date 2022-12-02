import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../admin/Header';
import Footer from './Footer';

const Admin = () => {
  return (
    <div>
        <Header />
        <Outlet/>
        <Footer />
        <Outlet />
    </div>
    
  )
}

export default Admin;