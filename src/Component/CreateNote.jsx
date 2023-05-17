import React from "react";
import "./styles/CreateNote.css";
import { useState } from "react";
import { MdAddCircle } from "react-icons/md";

const CreateNote = (props) => {
  const [input, setInput] = useState();
  const [description, setDescriptionS] = useState();

  var clickHandle = (e) => {
    e.preventDefault();
    if (
      document.getElementById("textfield").value === "" ||
      document.getElementById("textarea").value === ""
    ) {
      alert("Title and Description fields can't be empty");
    } else {
      const noteData = {
        title: input,
        description: description,
      };
      props.data(noteData);

      setInput("");
      setDescriptionS("");
    }
  };

  return (
    <div className="create-notes-container">
      <div className="create-notes">
        <form className="form">
          <input
            type="text"
            name="title"
            id="textfield"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Your Note's Title Here"
            required
          />
          <textarea
            name=""
            id="textarea"
            rows="8"
            placeholder="Enter Your Note's Description Here"
            value={description}
            onChange={(e) => setDescriptionS(e.target.value)}
            required
          ></textarea>
          <button onClick={clickHandle}>
            <MdAddCircle className="icon" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
