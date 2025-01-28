"use client"

import Link from 'next/link'
import React, { useState } from 'react'
import Navbar, { MobileNavbar } from './Navbar'
import logo from "../public/writings/Asset36.svg"
import Image from 'next/image'


function Header() {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <header className='bg-[#010823] top-0 sticky z-[999] overflow-x-clip'>
            <div className='container py-8 px-4 md:px-8 flex items-center justify-between '>
                {/* ticsummit logo */}
                <Link href='/'>
                    <Image src={logo} className='w-24 h-10' alt="Logo" />
                </Link>
                {/* desktop navbar */}
                <div className='hidden xl:flex items-center justify-between gap-20'>
                    <Navbar />
                    <div className='rounded-full py-2 px-2.5 text-l font-semibold text-black bg-orange-600 flex items-center'>KD</div>
                </div>
                {/* mobile nav */}
                <button className='lg:hidden block overflow-hidden outline-none z-40 text-xl font-semibold' onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? "+" : "x"}
                </button>
                    <MobileNavbar isOpen={isOpen} setIsOpen={!isOpen}/>
            </div>
        </header>
    )
}

export default Header