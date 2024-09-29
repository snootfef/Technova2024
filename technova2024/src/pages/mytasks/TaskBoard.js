import Nav from '../nav'
import TaskCard from './TaskCard';
import Background from '../background';
import { useDrop } from "react-dnd";
import { useState } from 'react';
import React from 'react';
import { COLUMN_NAMES } from '../../tasks';

const TaskBoard = ({ children, className, title }) => {
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
         className="taskBoard flex flex-col column font-sans"
      >
         <p
            className='px-1.5 py-1 text-md w-fit h-fit bg-light-pink rounded-md'
         >{title}</p>
         {children}
      </main>
   );
};

export default TaskBoard;