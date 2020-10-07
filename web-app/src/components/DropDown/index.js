import React, {useState} from 'react';


export default ({styles = {}, title = '', items=[] , onClick}) => {
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
        onBlur={handleHide}
      >{title}</button>
      <div className="dropdown-menu dropdown-menu-right" style={{display: display}}>
        {items && items.map((item, k)=><button 
            key={k}
            className="dropdown-item" 
            type="button"
            onClick={() => onClick(item.id)}
        >{item.name}</button>)}
      </div>
    </div>
  );
}