'use client';
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";

export default function Nav() {

   const pages = ['/projects', '/designs', '/about']

   return (
      <nav
         className='z-50 flex flex-row items-center w-screen h-[4.8rem] bg-rice text-moss'
      >
         <div
            className={"flex flex-grow justify-start duration-700 ease-in-out"}
         >
            <Link
               href='/'
               className="absolute xl:-left-[20rem] xl:w-[5rem] 2xl:w-20 2xl:-left-[32rem]"
            >
               <Image
                  src="/assets/logoSmall.png"
                  className={"h-full w-full ease-in-out duration-200 hover:scale-105 " + (scroll || pages.includes(pathname) ? 'opacity-100' : 'opacity-0')}
                  alt=""
                  width="100"
                  height="1080"
               />
            </Link>
            <div
               className="flex absolute 2xl:-right-[32rem] xl:-right-[20rem]"
            >
               <a className='pr-2 hover:scale-110 ease-in-out transition-all duration-200' href="https://github.com/snootfef" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
               </a>
               <a className='pr-2 hover:scale-110' href='https://www.linkedin.com/in/delin-gu/' target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
               </a>
               <a className='pr-2 hover:scale-110' href='mailto:d2gu@uwaterloo.ca' target="_blank" rel="noopener noreferrer">
                  <RiMailFill />
               </a>
            </div>
         </div>
      </nav>
   )
}