import React from 'react'
import  logo from '../img/logo.png'
import '../App.css'
import '../tailwind/output.css'

function NavLinks() {
    return (
        <div className='flex items-center justify-between w-3/4 p-4 font-ox gap-4 text-white font-semibold text-2xl'>
            <a href='/'>Home</a>
            <a href='#members'>Members</a>
            <a href='projects'>Projects</a>
            <a href='events'>Events</a>
            <a href='gallery'>Gallery</a>
        </div>
    )
}


function Navbar() {
    return (
        <nav className='flex justify-around gap-4 items-center m-auto w-5/6 py-4'>
            <img src={logo} className='h-20' alt="logo" />
            <NavLinks />
        </nav>
    )
}

export default Navbar
