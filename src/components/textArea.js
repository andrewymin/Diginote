import {useState} from 'react';
import Inputs from './input';

function TextArea(props){

  const [title, setTitle] = useState();
  const [note, setNote] = useState();

  function handleChange(e){
    e.target.name === "Title" ? setTitle(e.target.value) : setNote(e.target.value);
  }

  function handleSubmit(e) {
    e.target.reset();
    e.preventDefault();
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
