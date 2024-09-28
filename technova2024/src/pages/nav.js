'use client';
import { useState } from "react";
import Link from "next/link"
import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiMailFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Nav() {

   const pages = ['/projects', '/designs', '/about']

   return (
      <nav
         className='relative top-0 left-0 w-screen h-20 flex flex-row items-center text-white'
      >
         <div
            className='bg-white opacity-50 w-full h-20 absolute z-0 top-0 left-0'
            id='background'
         />
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
         <a className='relative z-50 pr-2 hover:scale-110 ease-in-out transition-all duration-200' href="https://github.com/snootfef" target="_blank" rel="noopener noreferrer">
            <FaGithub />
         </a>
         <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
         </svg>
         </button>

         <div id="dropdown" className="absolute z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
               <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
               </li>
               <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
               </li>
               <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
               </li>
               <li>
                  <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
               </li>
            </ul>
         </div>
         <a className='relative z-50 pr-2 hover:scale-110' href='mailto:d2gu@uwaterloo.ca' target="_blank" rel="noopener noreferrer">
            <CgProfile
               className="text-3xl"
            />
         </a>
      </nav>
   )
}