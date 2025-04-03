import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'

const AdminMain = () => {
  return (
    <div>
      <div className='flex min-h-screen bg-white'>
      <SideBar/>
      <div className='flex-1 p-8'>
        <Outlet/>
      </div>
      </div>
    </div>
  )
}

export default AdminMain
