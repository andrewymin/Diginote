import {Header, Footer} from './components/head-foot';
import Note from './components/note';
// import Notes from './components/notes';
import InputArea from './components/textArea';
import React, {useState} from 'react';

function App() {

  const [noteList, updateList] = useState([]);

  function addNote(){
    let title = document.querySelector('input[name="title"]').value;
    let note = document.querySelector('input[name="note"]').value;
    if (!title || !note) {
      console.log("Need to add note to stick down.");
      return
    }
    // console.log(`${title}: ${note}`);

    updateList(prevList => [...prevList, {t:title, n:note}]);
  }

  function handleDelete(id){
    updateList(prevList => prevList.filter((prevListItem, index) => index !== id));
  }

  return(
    <div>
      <Header />
        <InputArea handleAdd={addNote} />
        <div className="cards">
          {noteList.map((noteItem, index)=>
          <Note
            key={index}
            id={index}
            handleDelete={handleDelete}
            noteTitle={noteItem.t}
            noteContent={noteItem.n}
          />)}
        </div>
      <Footer />
    </div>
  )
}

export default App;
