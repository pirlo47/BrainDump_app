import mongoose from "mongoose";


//The shape of the Note's data
export interface INote {
    title: string; 
    content: string; 
    createdAt: Date;
    updatedAt: Date; 
}

//The schema, typed against the shape 
const noteSchema = new mongoose.Schema<INote> ( // a schema describing INote shaped data
    {
        title: {
            type: String, 
            required: true, 
        }, 
        content: {
            type: String, 
            required: true, 
        }, 
    }, 
    {
        timestamps: true
    }
); 

//The model
const Note = mongoose.model<INote>("Note", noteSchema); 

export default Note; 