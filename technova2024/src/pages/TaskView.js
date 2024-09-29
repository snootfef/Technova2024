import Task from "./Task"
import { HiPlus } from "react-icons/hi";
import { useRef, useEffect } from "react";
import { MongoClient } from 'mongodb';

// pass in database credentials
require('dotenv').config();
const { user, pass } = require('./secret.js')

// initialize client
const uri = "mongodb+srv://" + user + ":" + pass + "@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";
const client = new MongoClient(uri);

export async function getServerSideProps({ furniture }) {
   await client.connect();

   const database = client.db("technova");
   const tasks_db = database.collection("tasks");

    //query for furniture
    var query = {furniture: {furniture}};
    var tasks = await tasks_db.find(query).toArray();

    console.log(tasks);
}

export default function TaskView({ furniture, onClose }) {
   const modalRef = useRef(null);

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose();
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [onClose]);

   return (
      <main
         ref={modalRef}
         className="ml-8 font-sans py-4 flex flex-row bg-white bg-opacity-50 justify-center w-[30vw] h-[60vh] rounded-xl"
      >
         <div
            className="flex flex-col"
            onClick={(e) => {
               e.stopPropagation();
            }}
         >
            <h2
               className="text-gray-700 font-bold my-2 text-2xl"
            >
               {furniture}
            </h2>
            <div
               className="grid grid-cols-2 gap-3"
            >
               <Task taskName={"Clean"} assignee={"Maggie"} deadline={"October 3rd"} status={"In Progress"} />
               <Task taskName={"Make Ice"} />
               <Task />
               <div
                  className="hover:bg-opacity-50 duration-150 ease-in-out border-2 flex justify-center items-center relative bg-white bg-opacity-30 w-[13.5vw] h-[16vh] rounded-md border-solid"
               >
                  <HiPlus
                     className="text-4xl"
                  />
               </div>
            </div>
         </div>
      </main >
   )
}
