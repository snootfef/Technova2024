import Nav from '../nav'
import TaskCard from './TaskCard';
import TaskBoard from './TaskBoard';
import Background from '../background';
import { useDrop } from "react-dnd";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

export default function Home() {
   return (
      <DndProvider backend={HTML5Backend}>
         <main className="relative flex flex-col w-screen h-screen no-scrollbar justify-center items-start">
            <Background />
            <Nav />
            <h2
               className='relative name'
            >
               My Tasks
            </h2>
            <div
               className='flex flex-row h-full w-full'
            >
               <TaskBoard status="To Do" />
               <TaskBoard status="In Progress" />
               <TaskBoard status="Completed" />
            </div>
         </main>
      </DndProvider>
   );
}