import Nav from '../nav'
import HousemateCard from './HousemateCard';
import Background from '../background';
import useEffect from 'react';
import { MongoClient } from 'mongodb';
import { HiPlus } from "react-icons/hi";

// pass in database credentials
require('dotenv').config();
const { user, pass } = require('./secret.js')

// initialize client
const uri = "mongodb+srv://" + user + ":" + pass + "@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";
const client = new MongoClient(uri);

export async function getServerSideProps() {
   await client.connect();

   const database = client.db("technova");
   const houses = database.collection("houses");

   //query for house
   var query = { name: "123 carlton road" };
   var house = await houses.findOne(query);

   // array of roommates
   const roommates = house["members"];

   // iterate through list of roommates and query each user
   let i = 0;
   const users = database.collection("users");

   const user_data = {
      user0: "",
      user1: "",
      user2: "",
   };

   while (i < roommates.length) {
      console.log(roommates[i]);

      //query for roommate
      query = { username: roommates[i] }
      var roommate = await users.findOne(query);

      // user_data["user"+i] = roommate;
      if (roommate) {
         // Convert _id to string
         user_data["user" + i] = {
            ...roommate,
            _id: roommate._id.toString(), // Convert _id to string
            // Convert Date fields to strings
            date: roommate.date ? roommate.date.toISOString() : null, // Convert Date to ISO string if it exists
         };
      }

      i++;
   }
   console.log(user_data)

   client.close();

   const data = { text: "hello" };

   return {
      props: {
         user_data
      } // Pass the fetched data as props
   };

}

export default function Home({ user_data }) {
   return (
      <main className="relative flex flex-col w-screen h-screen no-scrollbar justify-center items-center">
         <Background />
         <Nav />
         <div
            className='grid grid-cols-2 gap-3 flex-grow pt-7'
         >
            {Object.values(user_data).map((user, index) => (
               <HousemateCard
                  key={user._id} // Use a unique identifier for the key
                  name={user.displayName} // Adjust if the property name is different
                  percentage={user.percentage}
               />
            ))}
            <div
               className='hover:scale-[105%] duration-200 ease-in-out border-2 border-opacity-25 relative justify-center items-center font-sans text-white mx-6 p-6 flex flex-col bg-white bg-opacity-30 w-[30vw] h-[35vh] rounded-xl'
            >
               <HiPlus
                  className='text-4xl'
               />
            </div>
         </div>
      </main>
   );
}