import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex h-20 bg-neutral-700 justify-around items-center text-xl text-white'>
        <NavLink to={'/'}>Home</NavLink>
        {/* <NavLink to={'/admin'}>Admin</NavLink> */}
        {/* <NavLink to={'/invoice'}>Invoice</NavLink> */}
        {/* <NavLink to={'/grid'}>Grid</NavLink> */}
       
      
    </nav>
  )
}

export default Navbar