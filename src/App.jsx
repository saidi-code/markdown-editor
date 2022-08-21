import React, { useState } from 'react'
import Editor from './components/Editor'
import Sidebar from './components/Sidebar'
import { nanoid } from 'nanoid';

export default function App() {
  const [notes,setNotes] = useState([
    {id:"0",body:"## Note 1"},
    {id:"1",body:"## Note 2"},
    {id:"2",body:"## Note 3"}
  ])
  const [currentId,setCurrentId]= useState((notes&&notes[0].id)||"")
  const addNote=()=>{
    const newNote={
      id:nanoid(),
      body:`## Note ${notes.length+1}`,
    }
    setNotes((prevState)=>{
      return [
        ...prevState,
        newNote
      ]
    })
    setCurrentId(()=>newNote.id)
  }
  const currentNote=()=>{
    return notes.find(note=>{
      return note.id === currentId
    })||notes[0]
  }
  const updateNote = (text)=>{
    setNotes(oldNotes=>oldNotes.map(oldNote=>{return (oldNote.id === currentId)?{...oldNote,body:text}:oldNote}))
  }
  const deleteNote = ()=> {
    setNotes(notes=>notes.filter((note)=>{
      
        return note.id !== currentId}))}
  
  return (
    <div className='container app'>
      <div className="sidebar">
        <Sidebar 
          notes={notes}
          addNote={addNote}
          currentNote={currentNote()}
          currentId={setCurrentId}
          deleteNote= {deleteNote}
        />
        </div>
        <div className="editor">
        <Editor
          currentNote={currentNote()}
          updateNote = {updateNote}
        />
        </div>
    </div>
  )
}
