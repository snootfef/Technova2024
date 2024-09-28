import Nav from '../nav'
import HousemateCard from './HousemateCard';
import Background from '../background';

export default function Home() {
   return (
      <main className="relative flex flex-col w-screen h-screen no-scrollbar justify-center items-center">
         <Background />
         <Nav />
         <div
            className='relative flex flex-wrap flex-row flex-1 justify-center items-center'
         >
            <HousemateCard />
            <HousemateCard />
            <HousemateCard />
         </div>
      </main>
   );
}