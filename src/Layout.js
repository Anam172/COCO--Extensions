import React from 'react'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Outlet } from 'react-router-dom'
import Scroll from './Components/Scroll'
import MessageMenu from './Components/MessageMenu'


const Layout = () => {
  return (
    <div>
      <Header />
      <main>
        <Scroll />
        <MessageMenu />
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout