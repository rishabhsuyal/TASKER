import React, { useState } from 'react';
import Card from './Component/Card/Card';
import CustomPop from './Component/popUP/popUP';
import { nanoid } from 'nanoid'
import './App.css';


function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'test1',
      text: 'This is my first note!',
      time: '12:00',
    }
  ]);

  function addNote(x, y) {
    const today = new Date();
    var time = today.getHours() + ':' + today.getMinutes();
    const newNote = {
      id: nanoid(),
      title: x,
      text: y,
      time: time
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  function handleDelete(id){
    const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
    console.log(id);
  }

  return (
      <div className="container">
      <CustomPop addNote={addNote} />
        {
          notes.map(note =>
            <Card id={note.id} title={note.title} subText={note.text} timeC={note.time} handleDelete={handleDelete} />
          )
        }
      </div>
  )
}

export default App
