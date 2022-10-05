import React from 'react';

const Note = (props) =>
    <div className="card">
      <h1>{props.noteTitle}</h1>
      <p>{props.noteContent}</p>
      <button onClick={()=>props.handleDelete(props.id)}>DELETE</button>
    </div>;

export default Note;
