import express from "express";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDb } from "./config/db.js";
import dotenv from "dotenv"


dotenv.config()

console.log(process.env.MONGO_URI)

// Create an express app
const app = express();

//Call the db.js to connect to the database 
connectDb(); 

// Use the route "/api/notes"
app.use("/api/notes", notesRoutes);

app.listen(5001, () =>{
    console.log("Server started on PORT: 5001");
}); 


// 