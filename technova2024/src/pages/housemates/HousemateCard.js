import Image from "next/image"

export default function HousemateCard({ name }) {

   return (
      <main
         className="font-sans text-white mx-4 p-6 flex flex-col bg-white bg-opacity-30 w-[33vw] h-[40vh] rounded-xl"
      >
         <section>
            <Image
               src="/assets/placeholder.jpg"
               className=''
               width="80"
               height="1000"
            />
         </section>
         <div
            className=""
         >
            <h2
               className="text-2xl font-bold"
            >
               {name}
            </h2>
            <progress
            />
         </div>
      </main >
   )
}

