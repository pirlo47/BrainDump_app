import React from 'react'
import {Route, Routes} from "react-router";

import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast';

const App = () => {
  return (
    <div>
      {/* Test button for react toast */}
      <button onClick={() => toast.success("congrats")}>Click Me</button>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />

      </Routes>
      
    </div>
  )
}; 

export default App
