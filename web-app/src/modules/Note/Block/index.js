import React from 'react';

let styles = {
  blockquote: {
    borderLeft: "solid lightgrey 5px",
    paddingLeft: 5,
    marginLeft: -10
  }
}

function Block({model}) {
  return (
    <blockquote className="blockquote mb-2" style={styles.blockquote}>
      <p>{model.key}</p>
      <footer className="blockquote-footer">{model.note}</footer>
    </blockquote>
  );
}

export default Block;
