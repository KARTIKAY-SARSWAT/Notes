import React from "react";
import { MdDelete } from 'react-icons/md';
function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <MdDelete size={22}/>
      </button>
    </div>
  );
}


export default Note;

