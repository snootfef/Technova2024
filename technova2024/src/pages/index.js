import Nav from './nav'
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Background from './background';

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
        <div
          className='relative w-[55vw] h-full flex justify-center items-center bg-no-repeat bg-contain'
          style={{
            backgroundImage: "url('/assets/kitchenBg.png')",
            backgroundPosition: "center",
            backgroundSize: "75%"
          }}
        >
          <Image
            src="/assets/fridge1.png"
            className='absolute top-[12.7rem] left-[30.5rem] furniture'
            width="100"
            height="100"
          />
        </div>
        <IoIosArrowForward
          className='text-4xl opacity-25 hover:opacity-75 hover:scale-120 ease-in'
        />
      </div>
    </main>
  );
}
