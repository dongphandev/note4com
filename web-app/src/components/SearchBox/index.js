import React from 'react';

function SearchBox({style={},name="Search", placeholder="..."}) {
  return (
    <div className="input-group mb-3" style={style}>
      <input type="text" className="form-control" placeholder={placeholder} />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">{name}</button>
      </div>
    </div>
  );
}

export default SearchBox;