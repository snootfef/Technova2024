// import Task from "./Task"
// import { HiPlus } from "react-icons/hi";
// import { useRef, useEffect } from "react";
// import { MongoClient } from 'mongodb';

// // pass in database credentials
// require('dotenv').config();
// const { user, pass } = require('./secret.js')

// // initialize client
// const uri = "mongodb+srv://" + user + ":" + pass + "@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";
// const client = new MongoClient(uri);
// console.log("hi");

// export default function TaskView({ furniture, onClose }) {
//    const modalRef = useRef(null);
//    const [tasks, setTasks] = useState([]); // State to store fetched tasks
//    const [loading, setLoading] = useState(true); // State to manage loading status


//    useEffect(() => {
//       const fetchTasks = async () => {
//          try {
//             const response = await fetch(`/api/tasks?furniture=${furniture}`);
//             if (!response.ok) {
//                throw new Error('Network response was not ok');
//             }
//             const fetchedTasks = await response.json();
//             setTasks(fetchedTasks);
//          } catch (error) {
//             console.error("Error fetching tasks:", error);
//          } finally {
//             setLoading(false);
//          }
//       };

//       if (furniture) {
//          fetchTasks();
//       }
//    }, [furniture]);

//    useEffect(() => {
//       const handleClickOutside = (event) => {
//          if (modalRef.current && !modalRef.current.contains(event.target)) {
//             onClose();
//          }
//       };

//       document.addEventListener('mousedown', handleClickOutside);

//       return () => {
//          document.removeEventListener('mousedown', handleClickOutside);
//       };
//    }, [onClose]);

//    return (
//       <main
//          ref={modalRef}
//          className="ml-8 font-sans py-4 flex flex-row bg-white bg-opacity-50 justify-center w-[30vw] h-[60vh] rounded-xl"
//       >
//          <div
//             className="flex flex-col"
//             onClick={(e) => {
//                e.stopPropagation();
//             }}
//          >
//             <h2
//                className="text-gray-700 font-bold my-2 text-2xl"
//             >
//                {furniture}
//             </h2>
//             <div
//                className="grid grid-cols-2 gap-3"
//             >
//                {/* Map through the tasks and render the Task component for each */}
//                {tasks.map((task, index) => (
//                   <Task 
//                      key={index} 
//                      taskName={task.taskName} 
//                      assignee={task.assignee} 
//                      deadline={task.deadline} 
//                      status={task.status} 
//                   />
//                ))}
//                <div
//                   className="hover:bg-opacity-50 duration-150 ease-in-out border-2 flex justify-center items-center relative bg-white bg-opacity-30 w-[13.5vw] h-[16vh] rounded-md border-solid"
//                >
//                   <HiPlus
//                      className="text-4xl"
//                   />
//                </div>
//             </div>
//          </div>
//       </main >
//    )
// }

import Task from "./Task"; // Import your Task component
import { HiPlus } from "react-icons/hi";
import { useRef, useEffect, useState } from "react";
import { format } from 'date-fns'; // Importing format from date-fns


export default function TaskView({ furniture, onClose }) {
   const modalRef = useRef(null);
   const [tasks, setTasks] = useState([]); // State to store fetched tasks
   const [loading, setLoading] = useState(true); // State to manage loading status

   useEffect(() => {
      const fetchTasks = async () => {
         try {
            const response = await fetch(`/api/tasks?furniture=${furniture}`);
            if (!response.ok) {
               throw new Error('Network response was not ok');
            }
            const fetchedTasks = await response.json();
            setTasks(fetchedTasks); // Store fetched tasks in state
         } catch (error) {
            console.error("Error fetching tasks:", error);
         } finally {
            setLoading(false); // Set loading to false regardless of success or failure
         }
      };

      if (furniture) {
         fetchTasks(); // Fetch tasks only if furniture is defined
      }
   }, [furniture]); // Dependency array includes furniture

   useEffect(() => {
      const handleClickOutside = (event) => {
         if (modalRef.current && !modalRef.current.contains(event.target)) {
            onClose(); // Close the modal when clicking outside
         }
      };

      document.addEventListener('mousedown', handleClickOutside);

      return () => {
         document.removeEventListener('mousedown', handleClickOutside);
      };
   }, [onClose]);

   if (loading) {
      return <div>Loading...</div>; // Optional loading state
   }

   return (
      <main
         ref={modalRef}
         className="ml-8 font-sans py-4 flex flex-row bg-white bg-opacity-50 justify-center w-[30vw] h-[60vh] rounded-xl"
      >
         <div
            className="flex flex-col"
            onClick={(e) => {
               e.stopPropagation(); // Prevent closing the modal when clicking inside
            }}
         >
            <h2 className="text-gray-700 font-bold my-2 text-2xl">
               {furniture}
            </h2>
            <div className="grid grid-cols-2 gap-3">
               {/* Map through the tasks and render the Task component for each */}
               {tasks.map((task, index) => (
                  <Task
                     key={index}
                     taskName={task.taskName}
                     assignee={task.assignee}
                     // deadline={task.deadline} // Format the 
                     deadline={format(new Date(task.deadline), 'MMMM dd, yyyy')} // Format the deadline as a string
                     status={task.status}
                  />
               ))}
               <div
                  className="hover:bg-opacity-50 duration-150 ease-in-out border-2 flex justify-center items-center relative bg-white bg-opacity-30 w-[13.5vw] h-[16vh] rounded-md border-solid"
               >
                  <HiPlus className="text-4xl" />
               </div>
            </div>
         </div>
      </main>
   );
}
