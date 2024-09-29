import Image from "next/image"
import Task from "./Task"
import { HiPlus } from "react-icons/hi";

export default function TaskView({ furniture }) {
   return (
      <main
         className="font-sans py-4 flex flex-row bg-white bg-opacity-50 justify-center w-[30vw] h-[60vh] rounded-xl"
      >
         <div
            className="flex flex-col"
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
                  className="border-2 flex justify-center items-center relative bg-white bg-opacity-30 w-[13.5vw] h-[16vh] rounded-md border-solid"
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
