// import { MongoClient } from 'mongodb';

// // pass in database credentials
// require('dotenv').config();
// const { user, pass } = require('../../../secret.js');

// const uri = "mongodb+srv://" + user + ":" + pass + "@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";
// const client = new MongoClient(uri);

// export default async function handler({furniture}) {

//    try {
//       await client.connect();
//       const database = client.db("technova");
//       const tasks_db = database.collection("tasks");

//       const query = { furniture: {furniture} };
//       const tasks = await tasks_db.find(query).toArray();

//       console.log(tasks);

//       res.status(200).json(tasks);
//    } catch (error) {
//       console.error("Error fetching tasks:", error);
//       res.status(500).json({ message: "Error fetching tasks." });
//    } finally {
//       await client.close();
//    }
// }

import { MongoClient } from 'mongodb';
import { format } from 'date-fns'; // Ensure this line is present at the top of your file


// Pass in database credentials
require('dotenv').config();
const { user, pass } = require('./secret.js'); // Adjust the path as necessary

const uri = `mongodb+srv://${user}:${pass}@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024`;
const client = new MongoClient(uri);

export default async function handler(req, res) {
   const { furniture } = req.query; // Get the furniture parameter from query

   try {
      await client.connect();
      const database = client.db("technova");
      const tasks_db = database.collection("tasks");

      const query = { furniture: { $eq: furniture } }; // Correct the query as needed
      const tasks = await tasks_db.find(query).toArray();

      res.status(200).json(tasks); // Return the fetched tasks
   } catch (error) {
      console.error("Error fetching tasks:", error);
      res.status(500).json({ message: "Error fetching tasks." });
   } finally {
      await client.close(); // Close the connection to the database
   }
}
