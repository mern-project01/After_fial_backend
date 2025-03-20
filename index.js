const express = require("express");
const app = express();
const port = 4000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
app.use(cors());

require("dotenv").config();



app.get("/", (req, res) => {
  res.send("app runing");
});
app.get("/users", (req, res) => {
  res.send("user rout");
});
// mongodb conection


const uri =`mongodb+srv://${process.env.DATABASE_USER}:${process.env.DATABASE_PASS}@cluster0.3aawf.mongodb.net/?appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});


async function run() {
  try {
  
    await client.connect();
    
   const database= await client.db("Afer_fail");
    const appontmentOption_collection = database.collection("appontmentOption");

    app.get("/appontmentOption",async (req, res) => {
      const result = await appontmentOption_collection.find({}).toArray()
      res.send(result)
    });
   
    
    
    console.log("conected");
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

// end mongodb conection
app.listen(port, () => {
  console.log(`exlample app listening on port ${port}`);
});
