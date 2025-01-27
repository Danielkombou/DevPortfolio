import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import logo from "../public/writings/Asset36.svg"
import Image from 'next/image'

function Header() {
    return (
        <header className='bg-[#010823]'>
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
                <div className='xl:hidden'>Mobile nav</div>
            </div>
        </header>
    )
}

export default Header