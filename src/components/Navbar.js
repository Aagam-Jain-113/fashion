import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Logo from '../images/logo.png';
import { FiUser } from 'react-icons/fi';
import { RiShoppingBag3Line } from 'react-icons/ri';

function Navbar() {
    return (
        <nav>
            <ul className="flex w-full h-24 font-sans list-none border-b border-navBorder ">
                <div className="flex items-center justify-center w-1/12 space-x-4 border-r border-navBorder">
                    <li><HiOutlineMenuAlt4 className="text-2xl" /></li>
                </div>
                <div className="block w-1/12 mx-auto border-r border-navBorder">
                    <li className="block mx-auto"><img src={Logo} alt="Logo" className="block h-12 mx-auto mt-6" /></li>
                </div>
                <div className="flex items-center w-1/3 pl-4 space-x-10 font-bold tracking-tighter uppercase border-r border-navBorder">
                    <li>New</li>
                    <li>Sale</li>
                    <li>Man</li>
                    <li>Women</li>
                </div>
                <div className="flex items-center justify-center w-1/4 space-x-8 font-bold tracking-tighter uppercase border-r border-navBorder">
                    <li><AiOutlineHeart className="text-2xl"  /></li>
                    <li>Search</li>
                </div>
                <div className="flex items-center justify-center w-1/4 space-x-12 bg-white">
                    <li><RiShoppingBag3Line className="text-2xl"  /></li>
                    <li><FiUser className="text-2xl"/></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
