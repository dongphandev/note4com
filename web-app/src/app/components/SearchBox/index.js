import React, {useState} from 'react';

function SearchBox({style={},name="Search", placeholder="", onSearch}) {
  const [text, setText] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      onSearch(text);
    }
  }

  return (
    <div className="input-group mb-3" style={style}>
      <input type="text" className="form-control" 
        placeholder={placeholder} 
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={(e) => onSearch(text)}>{name}</button>
      </div>
    </div>
  );
}

export default SearchBox;