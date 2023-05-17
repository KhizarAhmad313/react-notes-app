import React from "react";
import "./styles/Note.css";
import { MdDeleteOutline } from "react-icons/md";
const Note = (props) => {
  const deletItem = () => {
    props.delete(props.id);
  };
  return (
    <div className="note">
      <h2 className="note-heading">{props.title}</h2>
      <p>{props.description}</p>
      <button>
        <MdDeleteOutline className="icon" onClick={deletItem} />
      </button>
    </div>
  );
};

export default Note;
