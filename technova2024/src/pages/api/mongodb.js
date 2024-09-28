const { MongoClient } = require("mongodb");

// Replace the uri string with your connection string.
const uri = "mongodb+srv://saliu1229:wW9YgBTPpl9HPqlI@technova2024.wvwop.mongodb.net/?retryWrites=true&w=majority&appName=TechNova2024";

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
    const query = {username: "ellobello"};
    const user = await movies.findOne(query);

    console.log(user);

        
    await createMovie(client,
        {
        title: "despicable me 4",
        directors: ["maggie"]
        
        }
    );

    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    // // Query for a movie that has the title 'Back to the Future'
    // const query = { title: 'Back to the Future' };
    // const movie = await movies.findOne(query);


    console.log(movie);


  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}


run().catch(console.dir);

async function createMovie(client, newMovie){
    const result = await client.db("sample_mflix").collection("movies").insertOne(newMovie);
    console.log(`New movie created with the following id: ${result.insertedId}`);
}

async function createUser(client, newUser){
  const result = await client.db("technova").collection("users").insertOne(newUser);
  console.log(`New user created with the following id: ${result.insertedId}`);
}