import React, {useState} from 'react';

import Block from '../Block';

let styles = {
  blockquote: {
    borderLeft: "solid lightgrey 5px",
    paddingLeft: 5,
    marginLeft: -10
  },
  textarea: {
    height: 40
  }
}
const DEF_THEME = "bg-light";

export default ({model, onChange}) => {
  const [edit, setEdit] = useState(null);
  const [editText, setEditText] = useState('');
  const selectedBlock = edit === null ? null : edit.key;

  const handleEditTextChange = (e) => {
    setEditText(e.target.value);
  }

  const handleBlockChange = ({type, payload}) => {
    // click update button
    if (type === 'update') {
      setEdit(payload);

    } else {
      // click delete button
      const newModel = {
        ...model,
        contents: model.contents.filter(item => item.key != payload.key)
      };
      onChange({type: 'update', newModel});
    }
  }

  const handleSave = () => {
    // TODO validate inputed info

  }

  const handleAdd = () => {
    // TODO validate inputed info

  }

  const renderActions = () => {
    if (edit) {
      return (
        <div className="input-group-append">
          <button 
            className="btn btn-outline-secondary" 
            type="button"
            onClick={handleSave}
          >Save</button>
          <button 
            className="btn btn-outline-default" 
            type="button"
            onClick={() => setEdit(null)}
          >Cancel</button>
        </div>
      );
    }

    return (
      <div className="input-group-append">
        <button 
          className="btn btn-outline-secondary" 
          type="button"
          onClick={handleAdd}
        >Add</button>
      </div>
    );
  }

  return (
    <div className="card mb-3">
      <div className={`card-header ${DEF_THEME}`}>
        {model.title}
        <span style={{ float: "right" }}>
          <button type="button" className={`btn btn-sm btn-link ${DEF_THEME}`}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-share-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z" />
            </svg>
          </button>
        </span>
      </div>
      <div className="card-body">
        {model.contents && model.contents.map((item, i) => <Block 
          key={i} style={styles.blockquote} 
          model={item} 
          onChange={handleBlockChange} 
          selected={item.key === selectedBlock} 
        />)}
      </div>
      <div className="card-footer" style={{ padding: 0 }}>
        <div className="input-group">
          <textarea 
            defaultValue={editText}
            onChange={handleEditTextChange}
            style={styles.textarea} 
            className="form-control" 
            row="3" />
          {renderActions()}
        </div>
      </div>
    </div>
  );
}

