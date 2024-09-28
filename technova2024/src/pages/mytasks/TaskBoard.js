import Nav from '../nav'
import TaskCard from './TaskCard';
import Background from '../background';
import { useDrop } from "react-dnd";

export default function TaskBoard({ status }) {
   return (
      <main className="bg-pink-400 w-[33.33vw] relative flex flex-col no-scrollbar justify-center items-start">
         <div
            className='relative flex flex-wrap flex-col flex-1 justify-center items-center'
            id={status}
         >
            <h2>
               {status}
            </h2>
            <TaskCard />
         </div>
      </main>
   );
}