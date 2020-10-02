import { node } from 'prop-types';
import React from 'react';

import SearchBox from '../../components/SearchBox';
import VSpace from '../../components/VSpace';
import Box from './Box';

let notes = [
  {
    theme: "bg-light"
  },
  {
    theme: "text-white bg-danger" 
  },
  {
    theme: "text-white bg-secondary"
  },
  {
    theme: "text-white bg-success"
  },
  {
    theme: "text-white bg-primary"
  },
  {
    theme: "text-white bg-warning"
  },
  {
    theme: "text-white bg-info"
  },
  {
    theme: "text-white bg-dark"
  }
]

function Note() {
  return (
    <div className="container">      
      <SearchBox style={{paddingTop: 10}} />

      <div style={{textAlign:"center"}}>
        <button style={{width:200}} type="button" className="btn btn-primary"><strong>+</strong></button>
      </div>

      <VSpace />
      { notes.map((note,i) => 
        <Box key={i} {...note} />
      )}

    </div>
  );
}

export default Note;
