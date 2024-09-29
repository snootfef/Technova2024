import Nav from './nav'
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Background from './background';
import TaskView from './TaskView';
import { useState } from 'react';


export default function Home() {
  const [room, setRoom] = useState(0);
  const [taskView, setTaskView] = useState("");

  function handlePrev() {
    if (room > 0) {
      setRoom(room - 1);
    }
    else if (room == 0) {
      setRoom(3);
    }
  }

  function handleNext() {
    if (room < 3) {
      setRoom(room + 1);
    }
    else if (room == 3) {
      setRoom(0);
    }
  }

  return (
      <main className="relative flex flex-col w-screen h-screen no-scrollbar">
        <Background />
        <Nav />
        <div
          className='z-50 relative flex flex-row justify-center items-center w-full flex-1'
          id='main-section'
        >
          <IoIosArrowBack
            className='text-4xl opacity-25 hover:opacity-75 hover:scale-130 ease-in'
            onClick={handlePrev}
          />
          <section
            className='w-[50vw] h-[82vh] relative flex pb-5 justify-center items-center'
          >
            {room == 0 && <div
              className='relative w-full h-full flex justify-center items-center bg-no-repeat bg-contain'
              style={{
                backgroundImage: "url('/assets/kitchen/kitchen.png')",
                backgroundPosition: "center",
                backgroundSize: "82%"
              }}
            >
              <Image
                src="/assets/kitchen/stove.png"
                className='absolute top-[13.2rem] left-[22.5rem] furniture'
                width="85"
                height="100"
                id="stove"
                onClick={(e) => setTaskView(e.currentTarget.id)}
              />
              <Image
                src="/assets/kitchen/fridge.png"
                className='absolute top-[10.3rem] left-[27.7rem] furniture'
                width="100"
                height="100"
                id="fridge"
                onClick={(e) => setTaskView(e.currentTarget.id)}
              />
              <Image
                src="/assets/kitchen/microwave.png"
                className='absolute top-[9.6rem] left-[18.6rem] furniture'
                width="73"
                height="100"
                id="microwave"
                onClick={(e) => setTaskView(e.currentTarget.id)}
              />
              <Image
                src="/assets/kitchen/sink.png"
                className='absolute top-[15.5rem] left-[7.65rem] furniture'
                width="84"
                height="100"
                id="sink"
                onClick={(e) => setTaskView(e.currentTarget.id)}
              />
            </div>}
            {room == 1 && <Image
              className='relative flex justify-center items-center'
              src="/assets/bathroom.png"
              width="525"
              height="100"
            />}
            {room == 2 && <Image
              className='relative flex justify-center items-center'
              src="/assets/living.png"
              width="595"
              height="100"
            />}
            {room == 3 && <Image
              className='relative flex justify-center items-center'
              src="/assets/bedroom.png"
              width="595"
              height="100"
            />}
          </section>
          <IoIosArrowForward
            className='text-4xl opacity-25 hover:opacity-75 hover:scale-120 ease-in'
            onClick={handleNext}
          />
          {taskView != "" && <TaskView furniture={taskView} onClose={() => setTaskView("")} />}
        </div>
      </main>
  );
}
