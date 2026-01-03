import express from "express";

import notesRoutes from "./routes/notesRoutes.js";

// Create an express app
const app = express();

// Use the route "/api/notes"

app.use("/api/notes", notesRoutes);

app.listen(5001, () =>{
    console.log("Server started on PORT: 5001");
}); 


