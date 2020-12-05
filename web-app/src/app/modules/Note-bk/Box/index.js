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

const parseNote = (note) => {
  let str = note.trim();
  if (str === '') {
    return null;
  }

  let idx = str.indexOf('\n');
  if (idx < 0) {
    return [str, ''];
  }

  return [str.substr(0,idx), str.substr(idx)]
}

export default ({model, onChange, theme=DEF_THEME}) => {
  const [edit, setEdit] = useState(null);
  const [inputText, setInputText] = useState('');
  const selectedBlock = edit === null ? null : edit.key;

  const handleInputTextChange = (e) => {
    setInputText(e.target.value);
  }

  const handleBlockChange = ({type, payload}) => {
    // click update button
    if (type === 'update') {

      let inputTextVal = ''.concat(payload.key);
      if (payload.note.startsWith('\n')) {
        inputTextVal = inputTextVal.concat(payload.note);
      } else {
        inputTextVal = inputTextVal.concat('\n', payload.note);
      }

      setEdit(payload);
      setInputText(inputTextVal);

    } else if (type === 'delete') {
      // click delete button
      const newModel = {
        ...model,
        contents: model.contents.filter(item => item.key !== payload.key)
      };
      onChange({type: 'update', payload: newModel});
    }
  }

  const handleSave = () => {
    let arr = parseNote(inputText);
    if (arr === null) {
      onChange({type: 'error', payload: {message: 'Please input correct note.'}});
      return;
    }

    const newContent = {
      "key": arr[0],
      "note": arr[1],
      "ref": edit.ref
    };

    const newModel = {
      ...model,
      contents: [
        newContent,
        ...model.contents.filter(item => item.key !== edit.key)
      ]
    };

    onChange({type: 'update', payload: newModel});
    setEdit(null);
    setInputText('');
  }

  const handleAdd = () => {
    let arr = parseNote(inputText);
    if (arr === null) {
      onChange({type: 'error', payload: {message: 'Please input correct note.'}});
      return;
    }

    const newBlock = {
      "key": arr[0],
      "note": arr[1],
      "ref": null
    };

    const newModel = {
      ...model,
      contents: [
        ...model.contents,
        newBlock
      ]
    };
    onChange({type: 'update', payload: newModel});
    setInputText('');
  }

  const handleCancel = () => {
    setEdit(null);
    setInputText('');
  }


  const renderActions = () => {
    // if (inputText === '') {
    //   return <script />
    // }

    if (edit) {
      return (
        <div className="input-group-append">
          <button 
            className="btn btn-outline-primary" 
            type="button"
            onClick={handleSave}
          >Save</button>
          <button 
            className="btn btn-outline-default" 
            type="button"
            onClick={handleCancel}
          >Cancel</button>
        </div>
      );
    }

    return (
      <div className="input-group-append">
        <button 
          className="btn btn-outline-primary" 
          type="button"
          onClick={handleAdd}
        >Add</button>
      </div>
    );
  }

  return (
    <div className="card mb-3">
      <div className={`card-header ${theme}`}>
        {model.title}
        <span style={{ float: "right" }}>
          <button type="button" className={`btn btn-sm btn-link ${theme}`}>
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
            value={inputText}
            onChange={handleInputTextChange}
            style={{
              ...styles.textarea,
              height: inputText !== '' ? 120 : 40
            }} 
            className="form-control" 
            row="3" />
          {renderActions()}
        </div>
      </div>
    </div>
  );
}

