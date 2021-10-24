import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import Logo from '../images/logo.png';
import { FiUser } from 'react-icons/fi';
import { RiShoppingBag3Line } from 'react-icons/ri';

function Navbar() {
    return (
        <nav className="bg-background">
            <ul className="list-none font-sans flex space-x-4 h-32 w-full border-navBorder border-b ">
                <div className="flex space-x-4 justify-center items-center border-r w-1/12 border-navBorder">
                    <li><HiOutlineMenuAlt4 className="text-2xl" /></li>
                </div>
                <div className="block mx-auto w-1/12 border-r border-navBorder">
                    <li className="block mx-auto"><img src={Logo} alt="Logo" className="h-12 mt-10 block mx-auto" /></li>
                </div>
                <div className="flex pl-4 space-x-10 font-bold tracking-tighter uppercase w-1/3 items-center border-r border-navBorder">
                    <li>New</li>
                    <li>Sale</li>
                    <li>Man</li>
                    <li>Women</li>
                </div>
                <div className="flex space-x-4 w-1/4 tracking-tighter font-bold uppercase items-center border-r border-navBorder justify-center">
                    <li><AiOutlineHeart className="text-2xl"  /></li>
                    <li>Search</li>
                </div>
                <div className="flex space-x-4 items-center w-1/4 justify-center">
                    <li><RiShoppingBag3Line className="text-2xl"  /></li>
                    <li><FiUser className="text-2xl"/></li>
                </div>
            </ul>
        </nav>
    )
}

export default Navbar
