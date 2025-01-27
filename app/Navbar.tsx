"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
        path: '/blog'
    },
    {
        name: "contact",
        path: '/contact'
    },
]

function Navbar() {
    const pathname = usePathname()

    return (
        <nav className='flex gap-8 items-center'>
            {links.map((link, index) => {
                // some js here
                const isActive = pathname === link.path
                return (
                    <Link className={`relative group px-4 py-2 capitalize font-medium transition-all flex `}
                        href={link.path} key={index}>
                        <div className='flex items-center'>
                            {link.name}
                        </div>
                        <span className={`absolute h-[2px] bg-[#88F0E5] group-hover:w-full transition-all duration-300 bottom-0 ${isActive ? "w-full" : "w-0"}`} />
                    </Link>
                )
            })}
        </nav>
    )
}

export default Navbar