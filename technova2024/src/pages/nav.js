'use client';
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";

export default function Nav() {

   const pages = ['/projects', '/designs', '/about']
   const pathname = usePathname()

   return (
      <nav
         className='relative top-0 left-0 w-screen h-20 flex flex-row items-center text-white bg-white bg-opacity-50'
      >
         <div
            className="relative z-50 p-4 flex flex-grow justify-start duration-700 ease-in-out"
         >
            <Link
               href='/'
               className=""
            >
               <FaGithub />
               {/* <Image
                  src="/assets/logoSmall.png"
                  className={"h-full w-full ease-in-out duration-200 hover:scale-105 " + (scroll || pages.includes(pathname) ? 'opacity-100' : 'opacity-0')}
                  alt=""
                  width="100"
                  height="1080"
               /> */}
            </Link>
         </div>
         <a
            className={'relative z-50 hover:scale-110 ease-in-out transition-all duration-200 ' + (pathname == '/' ? 'bg-slate-600' : '')}
            href="/"
         >
            <p
               className='navText'
            >
               dashboard
            </p>
         </a>
         <a className='relative z-50 pr-2 hover:scale-110 ease-in-out transition-all duration-200' href="/housemates">
            <p
               className='navText'
            >
               my roomis
            </p>
         </a>
         <a className='relative z-50 pr-2 hover:scale-110 ease-in-out transition-all duration-200' href="/mytasks">
            <p
               className='navText'
            >
               my tasks
            </p>
         </a>
         <a className='relative z-50 pr-2 hover:scale-110' href='mailto:d2gu@uwaterloo.ca' target="_blank" rel="noopener noreferrer">
            <CgProfile
               className="text-3xl"
            />
         </a>
      </nav>
   )
}