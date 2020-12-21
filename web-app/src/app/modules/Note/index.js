import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import SearchBox from '../../components/SearchBox';
import StupidTable from '../../components/StupidTable';
import StupidTableParser from '../../components/StupidTable/parser';

import VSpace from '../../components/VSpace';

import NoteService from '../../../services/note';
import AuthSelector from '../../../store/auth/selectors';


function Note() {
  const [notes, setNotes] = useState([]);
  const auth = useSelector(AuthSelector.state);

  useEffect(()=>{
    NoteService.load(auth.owner)
      .then(res=>{
        setNotes(res);
      })
      .catch((e)=>console.log(e));
  },[]);

  const handleSearch = () => {
    NoteService.load(auth.owner)
    .then(res=>{
      setNotes(res);
    })
    .catch((e)=>console.log(e));
  }

  const handleAdd = () => {
    
  }

  return(
    <div className="container">
      <SearchBox style={{ paddingTop: 10 }} onSearch={handleSearch} />
      <div style={{ textAlign: "center" }}>
          <button type="button" className="btn" onClick={handleAdd}
          >
            <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-plus-circle-fill" fill="#007bff" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </button>
        </div>

        <VSpace />
        {notes.map((note,idx)=><div key={idx} >
          <h4>{note.category}</h4>
          <StupidTable data={StupidTableParser.fromNote(note)} />
        </div>)}
    </div>
  );
}

export default Note;