import Nav from '../nav'
import HousemateCard from './HousemateCard';
import Background from '../background';
import useEffect from 'react';
import {MongoClient} from 'mongodb';

// pass in database credentials
require('dotenv').config();
const { user, pass} = require('./secret.js')

// initialize client
const uri = "mongodb+srv://"+user+":"+pass+"@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";
const client = new MongoClient(uri);

export async function getServerSideProps() {
   await client.connect();

   const database = client.db("technova");
   const houses = database.collection("houses");

   //query for house
   var query = {name: "123 carlton road"};
   var house = await houses.findOne(query);

   // array of roommates
   const roommates = house["members"];

   // iterate through list of roommates and query each user
   let i = 0;
   const users = database.collection("users");
   while (i < roommates.length) {
      console.log(roommates[i]);

      //query for roommate
      query = {username: roommates[i]}
      var user = await users.findOne(query);

      console.log(user);
      i++;
   }

   client.close();

   const data = {text: "hello"};

   return {
      props: {
         data
      } // Pass the fetched data as props
   };

}

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