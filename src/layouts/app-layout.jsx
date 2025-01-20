import Header from '@/components/Header'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
  <div>
     <main className='min-h-screen container px-10'>
        <Header/>
        <Outlet/>
        
     </main>

     <div className='mt-10 p-10 text-center bg-gray-800 '>
      Made by Manas
     </div>
  </div>
     
  )
}

export default Applayout