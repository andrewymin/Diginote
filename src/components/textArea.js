import React, {useState} from 'react';
import Inputs from './input';

function TextArea(props){

  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  function handleChange(e){
    e.target.name === "Title" ? setTitle(e.target.value) : setNote(e.target.value);
  }

  function handleSubmit(e) {
    let inputTitle = document.querySelector('input[name="title"]').value;
    let inputNote = document.querySelector('input[name="note"]').value;
    if (!inputTitle || !inputNote) {
      console.log("Not gonna wipe text yet.");
      e.preventDefault();
    } else {
      e.target.reset();
      e.preventDefault();
    }
  }

  return(
    <form onSubmit={handleSubmit} className="writeNote">
      <Inputs change={handleChange} value={title} ph='Title' inputName="title"/>
      <Inputs change={handleChange} value={note} ph='Take a note...' inputName='note'/>
      <button onClick={props.handleAdd}>Add</button>
    </form>
  )
}

export default TextArea;
