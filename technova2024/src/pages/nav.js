'use client';
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { usePathname } from "next/navigation";

export default function Nav() {

   const pathname = usePathname()

   return (
      <nav
         className='font-sans text-[0.92rem] px-20 pt-6 relative top-0 left-0 w-screen h-22 flex flex-row items-center text-white bg-opacity-50'
      >
         <div
            className="relative z-50 p-4 flex flex-grow justify-start duration-700 ease-in-out"
         >
            <Link
               href='/'
               className=""
            >
               <Image
                  src="/assets/logo.png"
                  className={"h-full w-full ease-in-out duration-200 hover:scale-[110%]"}
                  alt=""
                  width="30"
                  height="1080"
               />
            </Link>
         </div>
         <a
            className={'flex justify-center items-center relative z-50 ease-in-out transition-all duration-150 w-fit mx-6 h-[5.5vh] text-center rounded-lg ' + (pathname == '/' ? 'bg-white text-magenta p-3.5' : 'text-white hover:scale-110')}
            href="/"
         >
            <p
               className='navText'
            >
               dashboard
            </p>
         </a>
         <a
            className={'flex justify-center items-center relative z-50 ease-in-out transition-all duration-150 w-fit h-[5.5vh] text-center rounded-lg mx-6 ' + (pathname == '/housemates' ? 'bg-white text-magenta p-3.5' : 'text-white hover:scale-110')}
            href='/housemates'
         >
            <p
               className='navText'
            >
               my roomis
            </p>
         </a>
         <a
            className={'flex justify-center items-center relative z-50 ease-in-out transition-all duration-150 w-fit h-[5.5vh] text-center rounded-lg mx-6 ' + (pathname == '/mytasks' ? 'bg-white text-magenta p-3.5' : 'text-white hover:scale-110')}
            href='/mytasks'
         >
            <p
               className='navText'
            >
               my tasks
            </p>
         </a>
         <a className='ml-3 relative z-50 hover:scale-110 ease-in-out transition-all duration-150' href='mailto:d2gu@uwaterloo.ca' target="_blank" rel="noopener noreferrer">
            <BsPerson
               className="text-3xl"
            />
         </a>
      </nav>
   )
}