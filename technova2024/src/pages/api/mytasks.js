import { MongoClient } from 'mongodb';

import { format } from 'date-fns'; // Ensure this line is present at the top of your file


// Pass in database credentials
require('dotenv').config();
const { user, pass } = require('./secret.js'); // Adjust the path as necessary

const uri = `mongodb+srv://${user}:${pass}@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024`;
const client = new MongoClient(uri);

// API route handler
export default async function handler(req, res) {
  try {
    // Connect to MongoDB
    await client.connect();
    const database = client.db("technova"); // Connect to the specific database
    const tasks_db = database.collection("tasks"); // Access the 'tasks' collection

    // Query for tasks assigned to "Josie" (adjust query as needed)
    const query = { assignee: "Josie" };
    const tasks = await tasks_db.find(query).toArray();

    console.log(tasks); // Optional: Logging for debugging
    res.status(200).json(tasks); // Return tasks as JSON response

  } catch (error) {
    console.error('Error fetching tasks:', error);
    res.status(500).json({ error: "Failed to fetch tasks" }); // Return error message

  } finally {
    await client.close(); // Ensure the client connection is closed
  }
}
