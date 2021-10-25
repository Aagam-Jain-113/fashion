import React from 'react'
import Girl from './images/women.png'
import handbag from './images/handbag.png'
import heels from './images/heels.png'
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineRight, AiOutlineUp } from 'react-icons/ai'
import { FaFacebookF } from 'react-icons/fa'

function Hero() {
    return (
        <div className="h-screen font-sans bg-background">
            <div className="relative flex items-center">
                <div className="flex items-center w-3/4 pl-32 border-r border-navBorder">
                    <h1 className="w-1/3 text-5xl font-bold tracking-tighter uppercase">Tied Green<br /> V-Neck Shirt</h1>
                    <img src={Girl} alt="" className="h-screen" />
                    <p className="absolute flex items-center justify-center w-12 h-12 ml-10 text-xl text-white bg-black rounded-full cursor-pointer font-extralight left-1/3">+</p>
                    <div className="absolute ml-6 left-1/2">
                        <div className="relative grid h-40 grid-cols-2 gap-10 pl-6 pr-0 bg-white rounded-2xl w-60">
                            <div className="col-span-1 py-4">
                                <p className="text-xl">Half Dome Poolover</p>
                                <p className="absolute text-xl font-bold bottom-4">$87</p>
                            </div>
                            <div className="col-span-1">
                                <img src={handbag} alt="Handbag" className="h-full" />
                            </div>
                        </div>
                        <div className="grid h-40 grid-cols-2 gap-10 pl-6 pr-0 mt-6 bg-white rounded-2xl w-60">
                            <div className="relative col-span-1 py-4">
                                <p className="text-xl">Half Dome Poolover</p>
                                <p className="absolute text-xl font-bold bottom-4">$87</p>
                            </div>
                            <div className="col-span-1">
                                <img src={heels} alt="Handbag" className="h-full" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex space-x-2 text-4xl bottom-4">
                        <FaFacebookF className="p-2 border rounded-lg border-navBorder" />
                        <AiOutlineInstagram className="p-2 border rounded-lg border-navBorder" />
                        <AiOutlineTwitter className="p-2 border rounded-lg border-navBorder" />
                    </div>
                </div>
                <AiOutlineRight className="absolute w-10 h-10 p-3 -mr-5 text-2xl font-bold border rounded-full text-pink right-1/4 border-pink" />
                <div className="w-1/4 h-screen bg-white">
                    <img src={Girl} alt="" className="w-full" />
                    <p className="absolute flex items-center justify-center w-1/4 mt-10 font-bold tracking-tighter bottom-2">Size Guide <AiOutlineUp className="ml-2 text-sm" /></p>
                </div>
            </div>
        </div>
    )
}

export default Hero
