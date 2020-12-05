import React from 'react';
import DropDown from '../../../components/DropDown';

const styles = {
  blockquote: {
    borderLeft: "solid lightgrey 5px",
    paddingLeft: 5,
    marginLeft: -10
  }
}

const blockActions = [
  {
    id: 'update',
    name: 'Edit'
  },
  {
    id: 'delete',
    name: 'Delete'
  }
];

function Block({ model, selected, onChange }) {
  let notes = model.note ? model.note.split('\n') : [];

  const handleClick = (actionId) => {
    onChange({
      type: actionId,
      payload: model
    });
  }

  return (
    <blockquote className="blockquote mb-2" style={styles.blockquote}>
      <DropDown styles={{float:'right'}} items={blockActions} onChange={handleClick} />
      <p>{model.key}</p>
      {notes && notes.map((val, k) => val.trim() !== '' && <footer key={k} className="blockquote-footer">{val}</footer>)}
    </blockquote>
  );
}

export default Block;
