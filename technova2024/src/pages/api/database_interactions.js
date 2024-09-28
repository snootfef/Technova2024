require('dotenv').config();

const { MongoClient } = require("mongodb");


// Replace the uri string with your connection string.
const { user, pass} = require('./secret.js')


const uri = "mongodb+srv://"+user+":"+pass+"@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    await createUser(client,
      {
        username: "miggiemagger",
        displayName: "maggie",
        phone: "911",
        email: "maggie@gmail.com"
      }
    )

    const database1 = client.db("technova");
    const users = database1.collection("users");

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


async function createUser(client, newUser){
  const result = await client.db("technova").collection("users").insertOne(newUser);
  console.log(`New user created with the following id: ${result.insertedId}`);
}