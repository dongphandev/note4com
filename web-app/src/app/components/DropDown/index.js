import React, {useState} from 'react';


export default ({styles = {}, title = '', items=[] , onChange}) => {
  const [display, setDisplay] = useState('none');

  const handleShow = () => {
    setDisplay('block');
  }

  const handleHide = () => {
    setDisplay('none');
  }

  return (
    <div style={styles} className="dropdown">
      <button 
        style={{opacity:0.5}}
        className="btn btn-outlight dropdown-toggle" 
        type="button" aria-haspopup="true" 
        aria-expanded="false"
        onClick={handleShow}
      >{title}</button>
      <div className="dropdown-menu dropdown-menu-right" style={{display: display}}>
        {items && items.map((item, k)=><button 
            key={k}
            className="dropdown-item" 
            type="button"
            onClick={() => {handleHide(); onChange(item.id);}}
        >{item.name}</button>)}
        <button 
            className="dropdown-item" 
            type="button"
            onClick={() => handleHide()}
        >Close</button>
      </div>
    </div>
  );
}