import React, { useState } from 'react';
import { HiPlus } from "react-icons/hi";

const TaskLogger = () => {
   const [isEditing, setIsEditing] = useState(false);
   const [taskData, setTaskData] = useState({
      title: '',
      assignee: '',
      dueDate: '',
   });

   // Handles input field changes
   const handleChange = (e) => {
      const { name, value } = e.target;
      setTaskData({ ...taskData, [name]: value });
   };

   // Handles form submission
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Task Logged:', taskData);
      setIsEditing(false);
   };

   // Toggles between the div and the form
   return (
      <div
         onClick={() => setIsEditing(true)}
         className="font-sans flex justify-center items-center relative w-[13.5vw] h-[16vh] rounded-md"
      >
         {!isEditing ? (
            <div
               className="hover:bg-opacity-50 hover:scale-[105%] duration-150 ease-in-out border-2 flex justify-center items-center relative bg-white bg-opacity-30 w-[13.5vw] h-[16vh] rounded-md border-solid"
            >
               <HiPlus className="text-4xl text-white" />
            </div>
         ) : (
            <form
               className="bg-white flex flex-col gap-y-1 w-full h-full p-2"
               onClick={(e) => e.stopPropagation()} // Prevents closing form when clicking inside
               onSubmit={handleSubmit}
            >
               <input
                  type="text"
                  name="title"
                  placeholder="Task Title"
                  value={taskData.title}
                  onChange={handleChange}
                  className="text-black px-2 py-0.5 text-[1.1rem] font-semibold border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
               />
               {/* <textarea
                  name="assignee"
                  placeholder="Assign To"
                  value={taskData.assignee}
                  onChange={handleChange}
                  className="px-2 py-1 border rounded-md w-full"
                  rows={2}
               /> */}
               <input
                  type="date"
                  name="dueDate"
                  value={taskData.dueDate}
                  onChange={handleChange}
                  className="px-2 py-0.5 text-[0.8rem] border rounded-md w-full focus:outline-none focus:ring-1 focus:ring-gray-300 text-black"
               />
               <button
                  type="submit"
                  className="bg-[#4b5fc9] text-white rounded-md my-0.5 w-fit text-xs px-1.5 py-0.5 h-fit flex justify-center items-center overflow-hidden"
               >
                  Save Task
               </button>
            </form>
         )}
      </div>
   );
};

export default TaskLogger;
