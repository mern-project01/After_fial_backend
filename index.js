const express = require("express");
const app = express();
const port = 4000;
const { MongoClient, ServerApiVersion } = require("mongodb");
const cors = require("cors");
app.use(cors());

require("dotenv").config();

app.use(express.json())

app.get("/", (req, res) => {
  // const data = [
  //   {
  //     _id: 1,
  //     name: "Teeth Orthodontics",
  //     slots: [
  //       "08.00 AM - 08.30 AM",
  //       "08.30 AM - 09.00 AM",
  //       "09.00 AM - 9.30 AM",
  //       "09.30 AM - 10.00 AM",
  //       "10.00 AM - 10.30 AM",
  //       "10.30 AM - 11.00 AM",
  //       "11.00 AM - 11.30 AM",
  //       "11.30 AM - 12.00 AM",
  //       "1.00 PM - 1.30 PM",
  //       "1.30 PM - 2.00 PM",
  //       "2.00 PM - 2.30 PM",
  //       "2.30 PM - 3.00 PM",
  //       "3.00 PM - 3.30 PM",
  //       "3.30 PM - 4.00 PM",
  //       "4.00 PM - 4.30 PM",
  //       "4.30 PM - 5.00 PM",
  //     ],
  //   },
  //   {
  //     _id: 2,
  //     name: "Cosmetic Dentistry",
  //     slots: [
  //       "08.00 AM - 08.30 AM",
  //       "08.30 AM - 09.00 AM",
  //       "09.00 AM - 9.30 AM",
  //       "09.30 AM - 10.00 AM",
  //       "10.00 AM - 10.30 AM",
  //       "10.30 AM - 11.00 AM",
  //       "11.00 AM - 11.30 AM",
  //       "11.30 AM - 12.00 AM",
  //       "1.00 PM - 1.30 PM",
  //       "1.30 PM - 2.00 PM",
  //       "2.00 PM - 2.30 PM",
  //       "2.30 PM - 3.00 PM",
  //       "3.00 PM - 3.30 PM",
  //       "3.30 PM - 4.00 PM",
  //       "4.00 PM - 4.30 PM",
  //       "4.30 PM - 5.00 PM",
  //     ],
  //   },
  //   {
  //     _id: 3,
  //     name: "Teeth Cleaning",
  //     slots: [
  //       "08.00 AM - 08.30 AM",
  //       "08.30 AM - 09.00 AM",
  //       "09.00 AM - 9.30 AM",
  //       "09.30 AM - 10.00 AM",
  //       "10.00 AM - 10.30 AM",
  //       "10.30 AM - 11.00 AM",
  //       "11.00 AM - 11.30 AM",
  //       "11.30 AM - 12.00 AM",
  //       "1.00 PM - 1.30 PM",
  //       "1.30 PM - 2.00 PM",
  //       "2.00 PM - 2.30 PM",
  //       "2.30 PM - 3.00 PM",
  //       "3.00 PM - 3.30 PM",
  //       "3.30 PM - 4.00 PM",
  //       "4.00 PM - 4.30 PM",
  //       "4.30 PM - 5.00 PM",
  //     ],
  //   },
  //   {
  //     _id: 4,
  //     name: "Cavity Protection",
  //     slots: [
  //       "08.00 AM - 08.30 AM",
  //       "08.30 AM - 09.00 AM",
  //       "09.00 AM - 9.30 AM",
  //       "09.30 AM - 10.00 AM",
  //       "10.00 AM - 10.30 AM",
  //       "10.30 AM - 11.00 AM",
  //       "11.00 AM - 11.30 AM",
  //       "11.30 AM - 12.00 AM",
  //       "1.00 PM - 1.30 PM",
  //       "1.30 PM - 2.00 PM",
  //       "2.00 PM - 2.30 PM",
  //       "2.30 PM - 3.00 PM",
  //       "3.00 PM - 3.30 PM",
  //       "3.30 PM - 4.00 PM",
  //       "4.00 PM - 4.30 PM",
  //       "4.30 PM - 5.00 PM",
  //     ],
  //   },
  //   {
  //     _id: 5,
  //     name: "Pediatric Dental",
  //     slots: [
  //       "08.00 AM - 08.30 AM",
  //       "08.30 AM - 09.00 AM",
  //       "09.00 AM - 9.30 AM",
  //       "09.30 AM - 10.00 AM",
  //       "10.00 AM - 10.30 AM",
  //       "10.30 AM - 11.00 AM",
  //       "11.00 AM - 11.30 AM",
  //       "11.30 AM - 12.00 AM",
  //       "1.00 PM - 1.30 PM",
  //       "1.30 PM - 2.00 PM",
  //       "2.00 PM - 2.30 PM",
  //       "2.30 PM - 3.00 PM",
  //       "3.00 PM - 3.30 PM",
  //       "3.30 PM - 4.00 PM",
  //       "4.00 PM - 4.30 PM",
  //       "4.30 PM - 5.00 PM",
  //     ],
  //   },
  //   {
  //     _id: 6,
  //     name: "Oral Surgery",
  //     slots: [
  //       "08.00 AM - 08.30 AM",
  //       "08.30 AM - 09.00 AM",
  //       "09.00 AM - 9.30 AM",
  //       "09.30 AM - 10.00 AM",
  //       "10.00 AM - 10.30 AM",
  //       "10.30 AM - 11.00 AM",
  //       "11.00 AM - 11.30 AM",
  //       "11.30 AM - 12.00 AM",
  //       "1.00 PM - 1.30 PM",
  //       "1.30 PM - 2.00 PM",
  //       "2.00 PM - 2.30 PM",
  //       "2.30 PM - 3.00 PM",
  //       "3.00 PM - 3.30 PM",
  //       "3.30 PM - 4.00 PM",
  //       "4.00 PM - 4.30 PM",
  //       "4.30 PM - 5.00 PM",
  //     ],
  //   },
  // ];

  res.send('app is runnig');
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
    const booking_appointment = database.collection("booking");
    app.get("/appontmentOption", async (req, res) => {
      const date = req.query.date;
      console.log(date);
      const result = await appontmentOption_collection.find({}).toArray();
      res.send(result);
    });
    // app.post("/booking", async (req, res) => {
    //   const booking_info = await req.body;
    //   // booking_appointment.insertOne(booking_info);
    //  await booking_appointment.insertOne(booking_appointment)
    //   console.log(booking_info);

    
    // });
    // app.get('/booking', async (req, res) => {
    //         const result = await booking_appointment.find({}).toArray();
    //       res.send(result)
    // })
    app.post("/booking", async (req, res) => {
      const booking_info = req.body; // no need await here
      const result = await booking_appointment.insertOne(booking_info); // insert booking_info
      console.log(booking_info);
      res.send(result);
    });

    // (Optional) if you want to add GET /booking to fetch all bookings
    app.get("/booking", async (req, res) => {
      const result = await booking_appointment.find({}).toArray();
      console.log(result)
      res.send(result);
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
