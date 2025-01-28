"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const links = [
    {
        name: "home",
        path: '/'
    },
    {
        name: "schedule",
        path: '/schedule'
    },
    {
        name: "about",
        path: '/about'
    },
    {
        name: "Hall Of Fame",
        path: '/projects'
    },
    {
        name: "blog",
        path: '/post'
    },
    {
        name: "contact",
        path: '/contact'
    },
]


type MobileProps = {isOpen: boolean, setIsOpen: boolean}
export const MobileNavbar = ({ isOpen, setIsOpen } : MobileProps) => {
    const pathname = usePathname()
    return(
        <div className={`fixed lg:hidden h-screen w-full bg-[#010823] top-0 duration-300 transition-all ${isOpen ? "right-0" : "-right-full"}`}>
            <ul className='flex flex-col items-center pt-24 gap-10'>
            {links.map((link, index) => {
                // some js here
                const isActive = pathname === link.path
                return (
                    <Link className={`relative group px-4 py-2 items-center capitalize font-medium transition-all flex flex-col `}
                    href={link.path} key={index}>
                        <div className=''>
                            {link.name}
                        </div>
                        <span className={`absolute h-[2px] bg-[#88F0E5] group-hover:w-full transition-width duration-300 bottom-0 before:w-1 before:h-full rounded-tr-sm ${isActive ? "w-full" : "w-0"}`} />
                    </Link>
                )
            })}
            </ul>
        </div>
    )
}


function Navbar() {
    const pathname = usePathname()

    return (
        <nav className='flex gap-8 items-center'>
            {links.map((link, index) => {
                // some js here
                const isActive = pathname === link.path
                return (
                    <Link className={`relative group px-4 py-2 items-center capitalize font-medium transition-all flex flex-col `}
                        href={link.path} key={index}>
                        <div className=''>
                            {link.name}
                        </div>
                        <span className={`absolute h-[2px] bg-[#88F0E5] group-hover:w-full transition-width duration-300 bottom-0 ${isActive ? "w-full" : "w-0"}`} />
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar