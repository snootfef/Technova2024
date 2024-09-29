require('dotenv').config();

const { MongoClient } = require("mongodb");


// Replace the uri string with your connection string.
const { user, pass} = require('./secret.js')


const uri = "mongodb+srv://"+user+":"+pass+"@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";

const client = new MongoClient(uri);

async function fetchRoommates(houseName){
    try {
        await client.connect();
    
        const database = client.db("technova");
        const users = database.collection("houses");
    
        //query for steph
        var query = {name: "123 carlton road"};
        var house = await houses.findOne(query);

        var obj = JSON.parse(house);


        console.log(obj);
    
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}

async function run() {
  try {
   await client.connect();
    
        const database = client.db("technova");
        const users = database.collection("houses");
    
        //query for steph
        var query = {name: "123 carlton road"};
        var house = await houses.findOne(query);

        var obj = JSON.parse(house);


        console.log(obj);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


async function house(houseName){
    try {
        await client.connect();
    
        const database = client.db("technova");
        const users = database.collection("users");
    
        //query for steph
        var query = {username: "ellobello"};
        var user = await users.findOne(query);
    
        console.log(user);
    
      } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
      }
}


run().catch(console.dir);