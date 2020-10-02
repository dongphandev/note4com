import React from 'react';

function SearchBox({style={},name="Search", placeholder="..."}) {
  return (
    <div className="input-group mb-3" style={style}>
      <input type="text" class="form-control" placeholder={placeholder} aria-label="Recipient's username" aria-describedby="button-addon2" />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button" id="button-addon2">{name}</button>
      </div>
    </div>
  );
}

export default SearchBox;