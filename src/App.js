import React, { useState } from "react";
import "./App.css";
import CreateNote from "./Component/CreateNote";
import Note from "./Component/Note";

function App() {
  const [Data, setNoteData] = useState(getData);
  localStorage.setItem("notes", JSON.stringify(Data));

  function data(createNoteData) {
    setNoteData((oldData) => {
      return [...oldData, createNoteData];
    });
  }
  const deletenote = (Id) => {
    setNoteData((data) => {
      return data.filter((value, index) => index !== Id);
    });
  };

  function getData() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    } else {
      return [];
    }
  }

  return (
    <div className="App">
      <h1>Note App</h1>
      <CreateNote data={data} />

      <div className="notes-container">
        {Data.map((value, index) => (
          <Note
            key={index}
            id={index}
            delete={deletenote}
            description={value.description}
            title={value.title}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
