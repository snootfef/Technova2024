import { useDrop } from "react-dnd";
import React from 'react';
import { COLUMN_NAMES } from '../../tasks';

const TaskBoard = ({ children, colour, title }) => {
   const [{ isOver, canDrop }, drop] = useDrop({
      accept: "Our first type",
      drop: () => ({ name: title }),
      collect: (monitor) => ({
         isOver: monitor.isOver(),
         canDrop: monitor.canDrop()
      }),
      // Override monitor.canDrop() function
      canDrop: (item) => {
         const { DO_IT, IN_PROGRESS, DONE } = COLUMN_NAMES;
         const { currentColumnName } = item;
         return (
            true
         );
      }
   });

   const getBackgroundColor = () => {
      if (isOver) {
         if (canDrop) {
            return "rgb(188,251,255)";
         } else if (!canDrop) {
            return "rgb(255,188,188)";
         }
      } else {
         return "";
      }
   };

   return (
      <main
         ref={drop}
         className="w-[33vw] min-h-[400px] h-max mx-2 flex flex-col justify-start flex-wrap column font-sans"
      >
         <p
            className={'px-1.5 py-1 text-sm w-fit h-fit rounded-md font-semibold'}
            style={{ backgroundColor: colour }}
         >{title}</p>
         {children}
      </main>
   );
};

export default TaskBoard;