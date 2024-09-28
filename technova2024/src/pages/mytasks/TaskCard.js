import Image from "next/image";
import { useDrag } from "react-dnd";
import React from "react";
import { useMemo } from "react";


export default function TaskCard() {
   const [{ isDragging }, drag] = useDrag(() => ({
      type: "card",
      collect: (monitor) => ({
         isDragging: !!monitor.isDragging(),
      }),
   }));

   return (
      <main
         className="p-6 flex flex-row bg-white bg-opacity-30 w-[22vw] h-[22vh] rounded-xl"
      >
         <div
            className="flex flex-col"
         >
            <h2
               className="name"
            >
               Title
            </h2>

         </div>
      </main >
   )
}
