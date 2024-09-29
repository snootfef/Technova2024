import Image from "next/image"

export default function HousemateCard({ name, percentage }) {
   console.log(name);

   return (
      <main
         className="hover:scale-[105%] duration-200 ease-in-out relative font-sans text-white mx-6 p-6 flex flex-col bg-white bg-opacity-30 w-[30vw] h-[35vh] rounded-xl"
      >
         <section
            className="w-fit h-[20vh]"
         >
            <Image
               src="/assets/placeholder.jpg"
               className=''
               width="70"
               height="1000"
            />
         </section>
         <div
            className="relative w-full h-full"
         >
            <section
               className="flex flex-row items-center"
            >
               <h2
                  className="text-2xl font-bold"
               >
                  {name}
               </h2>
               {name == "josie" && <p
                  className="mx-2 text-gray-100"
               >
                  (you)
               </p>}
            </section>
            <p
               className="absolute bottom-5 text-[0.8rem] leading-[1.15rem] text-gray-100"
            >
               Percentage of tasks done this week:
            </p>
            <section
               className="absolute bottom-1.5 w-full h-2.5 bg-white bg-opacity-50 rounded-full"
               id="progress-bar"
            >
               <div
                  style={{ width: `${percentage}%` }}
                  className="h-full bg-medium-pink rounded full"
               />
            </section>
         </div>
      </main >
   )
}

