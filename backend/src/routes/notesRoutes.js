import express from "express";
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);

//Create a note endpoint
router.post("/", createNote);

//Update a note 
router.put("/:id", updateNote);

//delete note
router.delete("/:id", deleteNote);

export default router