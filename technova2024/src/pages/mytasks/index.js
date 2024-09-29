import Nav from '../nav'
import TaskCard from './TaskCard';
import TaskBoard from './TaskBoard';
import Background from '../background';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useState, useRef, useEffect } from 'react';
import { tasks } from '../../tasks';
import { COLUMN_NAMES } from '../../tasks';

const Home = () => {
   const [items, setItems] = useState(tasks);

   const moveCardHandler = (dragIndex, hoverIndex) => {
      const dragItem = items[dragIndex];

      if (dragItem) {
         setItems((prevState) => {
            const coppiedStateArray = [...prevState];

            // remove item by "hoverIndex" and put "dragItem" instead
            const prevItem = coppiedStateArray.splice(hoverIndex, 1, dragItem);

            // remove item by "dragIndex" and put "prevItem" instead
            coppiedStateArray.splice(dragIndex, 1, prevItem[0]);

            return coppiedStateArray;
         });
      }
   };

   const returnItemsForColumn = (columnName) => {
      return items
         .filter((item) => item.column === columnName)
         .map((item, index) => (
            <TaskCard
               key={item.id}
               name={item.name}
               currentColumnName={item.column}
               setItems={setItems}
               index={index}
               moveCardHandler={moveCardHandler}
            />
         ));
   };

   const { DO_IT, IN_PROGRESS, DONE } = COLUMN_NAMES;

   return (
      <DndProvider backend={HTML5Backend}>
         <main
            className='relative flex flex-col w-screen h-screen'
         >
            <Background />
            <Nav />
            <div
               className='relative flex flex-row mx-20 mt-4'
            >
               <TaskBoard title={DO_IT} colour="#4b5fc9">
                  {returnItemsForColumn(DO_IT)}
               </TaskBoard>
               <TaskBoard title={IN_PROGRESS} colour="#8c67ca">
                  {returnItemsForColumn(IN_PROGRESS)}
               </TaskBoard>
               <TaskBoard title={DONE} colour="#de67e1">
                  {returnItemsForColumn(DONE)}
               </TaskBoard>
            </div>
         </main>
      </DndProvider>
   );
}

export default Home;