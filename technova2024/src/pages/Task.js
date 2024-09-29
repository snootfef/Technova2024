import Image from "next/image"
import {MongoClient} from 'mongodb';

// pass in database credentials
require('dotenv').config();
const { user, pass} = require('./secret.js')

// initialize client
const uri = "mongodb+srv://"+user+":"+pass+"@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";
const client = new MongoClient(uri);



export default function Task({ taskName, assignee, recurrance, deadline, status }) {
   return (
      <main
         className="relative px-[0.57rem] py-2 flex flex-row bg-white w-[13.5vw] h-[16vh] rounded-md"
      >
         <div
            className="flex flex-col text-black font-sans"
         >
            <h2
               className="text-[1.1rem] font-semibold"
            >
               {taskName}
            </h2>
            <section
               className="text-xs px-1.5 py-0.5 flex justify-center items-center rounded-md w-fit h-fit bg-light-pink"
            >
               <p>
                  {status}
               </p>
            </section>
            <section
               className="absolute bottom-2 text-[0.8rem] leading-[1.15rem] text-gray-700"
            >
               <p
                  className=""
               >
                  Assigned to {assignee}
               </p>
               <p>
                  Due {deadline}
               </p>
            </section>
         </div>
      </main >
   )
}
