import Image from "next/image";
import React from "react";
import { useDrag, useDrop } from "react-dnd";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { COLUMN_NAMES } from "../../tasks";

const TaskCard = ({
   name,
   index,
   currentColumnName,
   moveCardHandler,
   setItems
}) => {
   const changeItemColumn = (currentItem, columnName) => {
      setItems((prevState) => {
         return prevState.map((e) => {
            return {
               ...e,
               column: e.name === currentItem.name ? columnName : e.column
            };
         });
      });
   };

   const ref = useRef(null);

   const [, drop] = useDrop({
      accept: "Our first type",
      hover(item, monitor) {
         if (!ref.current) {
            return;
         }
         const dragIndex = item.index;
         const hoverIndex = index;
         if (dragIndex === hoverIndex) {
            return;
         }
         const hoverBoundingRect = ref.current?.getBoundingClientRect();
         const hoverMiddleY =
            (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
         const clientOffset = monitor.getClientOffset();
         const hoverClientY = clientOffset.y - hoverBoundingRect.top;
         if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
            return;
         }
         // Dragging upwards
         if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
            return;
         }
         moveCardHandler(dragIndex, hoverIndex);
         item.index = hoverIndex;
      }
   });

   const [{ isDragging }, drag] = useDrag({
      type: "Our first type",
      item: { index, name, currentColumnName, type: "Our first type" },
      end: (item, monitor) => {
         const dropResult = monitor.getDropResult();

         if (dropResult) {
            const { name } = dropResult;
            const { DO_IT, IN_PROGRESS, AWAITING_REVIEW, DONE } = COLUMN_NAMES;
            switch (name) {
               case IN_PROGRESS:
                  changeItemColumn(item, IN_PROGRESS);
                  break;
               case AWAITING_REVIEW:
                  changeItemColumn(item, AWAITING_REVIEW);
                  break;
               case DONE:
                  changeItemColumn(item, DONE);
                  break;
               case DO_IT:
                  changeItemColumn(item, DO_IT);
                  break;
               default:
                  break;
            }
         }
      },
      collect: (monitor) => ({
         isDragging: monitor.isDragging()
      })
   });

   const opacity = isDragging ? 0.4 : 1;

   drag(drop(ref));

   return (
      <div ref={ref} className="bg-white text-white relative bg-opacity-50 rounded-md my-2 flex justify-start items-start h-[20vh] w-[27.8vw]" style={{ opacity }}>
         <div
            className="py-4 px-4 flex flex-col font-sans"
         >
            <h2
               className="text-[1.1rem] font-semibold"
            >
               {name}
            </h2>
            <p
               className="text-[0.8rem]"
            >
               {name == "Wash dishes" ? "Associated with sink" : "Associated with fridge"}
            </p>
            <section
               className="absolute bottom-3 text-[0.8rem]"
            >
               <p>
                  Due October 2
               </p>
            </section>
         </div>
      </div>
   )
};

export default TaskCard;
