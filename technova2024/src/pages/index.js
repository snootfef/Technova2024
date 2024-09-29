import Nav from './nav'
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Background from './background';
import TaskView from './TaskView';

export default function Home() {
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
        />
        <section
          className='w-[50vw] h-[80vh] relative flex'
        >
          <div
            className='relative w-[55vw] h-full flex justify-center items-center bg-no-repeat bg-contain'
            style={{
              backgroundImage: "url('/assets/kitchen/kitchenBg.png')",
              backgroundPosition: "center",
              backgroundSize: "82%"
            }}
          >
            <Image
              src="/assets/kitchen/fridge.png"
              className='absolute top-[12.7rem] left-[30.5rem] furniture'
              width="109"
              height="100"
            />
          </div>
        </section>
        <IoIosArrowForward
          className='text-4xl opacity-25 hover:opacity-75 hover:scale-120 ease-in'
        />
        {/*<TaskView furniture={"fridge"} />*/}
      </div>
    </main>
  );
}
