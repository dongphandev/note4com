import React from 'react';
import SearchBox from '../../components/SearchBox';
import StupidTable from '../../components/StupidTable';
import VSpace from '../../components/VSpace';

function Note() {

  const handleSearch = () => {

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
              <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
            </svg>
          </button>
        </div>

        <VSpace />
        <StupidTable />
    </div>
  );
}

export default Note;