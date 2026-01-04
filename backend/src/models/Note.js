import mongoose from "mongoose";

//1- Create a schema 
// 2- Create Model based off that schema 

const noteSchema = new mongoose.Schema(
   {
    title:{
        type:String, 
        required:true
    }, 
    content:{
        type:String,
        required: true,
    },
   },
   {timestamps: true} // CreatedAt, updatedAt
); 

//Create a model based of the schema 

const Note = mongoose.model("Note", noteSchema)

export default Note