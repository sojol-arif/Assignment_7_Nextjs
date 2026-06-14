"use client";
import Link from 'next/link';
import Image from 'next/image';
import { ThemeContext } from '../context/TimelineProvider';
import Logo from '../assets/logo.png';
import { RiHome2Line  } from 'react-icons/ri';
import { LuClock3 } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa6";
import { usePathname } from 'next/navigation';
import { useContext, useState } from 'react';

const Links = [
    { name: 'Home', href: '/', icon: <RiHome2Line  className='w-[20px] h-[20px]'/> },
    { name: 'Timeline', href: '/timeline', icon: <LuClock3  className='w-[20px] h-[20px]' /> },
    { name: 'Stats', href: '/stats', icon: <FaChartLine  className='w-[20px] h-[20px]' /> },
];

const Navbar = () => {
    const pathname = usePathname();

    const { timelineData } = useContext(ThemeContext);
    console.log(timelineData, 'timeline from navbar');
    const timelineLength = timelineData?.length ?? 0;

    return (
        <div className="bg-white">
            <div className="navbar bg-base-100 shadow-sm px-5 sm:px-10 sm:px-15 md:px-20">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {Links.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="flex items-center gap-1">
                                        <span>{link.icon}</span>
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Link href="/" className="">
                        <Image src={Logo} alt="Logo" width={141} height={32} className="mr-2" />
                    </Link>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex gap-2">
                        {Links.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className={`flex items-center gap-1 ${pathname === link.href ? 'text-white bg-accent' : ''}`}>
                                    <span className='w-[20px] h-[20px]'>{link.icon}</span>
                                    {link.name} {link.name == 'Timeline' ? timelineLength : ''}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;