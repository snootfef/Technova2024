import Image from "next/image"

export default function HousemateCard() {

   return (
      <main
         className="mx-4 p-6 flex flex-row bg-blue-400 w-[33vw] h-[40vh] rounded-xl"
      >
         <section>
            <Image
               src="/assets/placeholder.jpg"
               className=''
               width="150"
               height="100"
            />
         </section>
         <div
            className="mx-4 flex flex-col"
         >
            <h2
               className="name"
            >
               *Name
            </h2>
            <p>
               (437)555 0000
            </p>
         </div>
      </main >
   )
}

