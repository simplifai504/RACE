import React from 'react'
import { FaXTwitter } from "react-icons/fa6";
import { PiTelegramLogo } from "react-icons/pi";
import { Emblema_One } from 'next/font/google'
import { BsTwitterX } from "react-icons/bs";
import { LiaTelegram } from "react-icons/lia";
import Link from 'next/link';

const emblema = Emblema_One({ subsets: ['latin'], weight: '400' })

const NavItem = ({ title, link }: { title: string, link: string }) => (
  <div className='group flex flex-col '>
    <Link  href={link} target='_blank' className='items-center gap-2 group'> {title}</Link>
    <div className='h-2 bg-green-300 w-full ease-in-out duration-300 rounded-sm'></div>
  </div>
)

const Navbar = () => {
  return (
    <nav className='font-bold text-sm py-4 border-b-8 border-b-green-800 flex flex-col items-center bg-green-500 paddingX gap-2 xl:gap-0 xl:flex-row justify-between'>
      <div className='flex flex-col justify-center items-center'>
        <img src="./ppraceLogo.png" alt="Pepe Race Logo" className='w-[80px]' />
      </div>
      <div className='flex text-xs md:text-xl items-center justify-center md:gap-16 gap-2 text-white'>
       {/*  <NavItem title='TWITTER' link='#'></NavItem> */}
        <NavItem title='Whitepaper' link='/whitepaper.pdf'></NavItem>
        <div className='bg-green-900 px-4 py-2 rounded-full'>
          DEXSCREENER
        </div>
        <a href='https://x.com/PepeRaceSol' target='_blank' className='h-full rounded-full border-2 border-white p-2'>
          <BsTwitterX></BsTwitterX>
        </a>
        <a href='#' target='_blank' className='h-full rounded-full border-2 border-white p-2'>
          <LiaTelegram></LiaTelegram>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
