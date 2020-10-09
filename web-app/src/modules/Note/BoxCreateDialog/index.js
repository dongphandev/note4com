import React, {useState} from 'react';
import DropDown from '../../../components/DropDown';

const styles = {
  dialog: {
    position: 'absolute'
  }
};

function BoxCreateDialog({ open, onChange }) {
  const [title, setTitle] = useState('');

  if (!open) {
    return <script />;
  }

  const handleClose = () => {
    setTitle('');
    onChange({
      type: 'close'
    })
  }

  const handleSave = () => {
    let validTitle = title.trim();
    if (validTitle === '') {
      return;
    }

    handleClose();
    onChange({
      type: 'create',
      payload: {
        title: validTitle,
        contents: []
      }
    });
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    }
  }

  return (
    <div className="modal" style={{display: "block"}} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Please give your note a short title</h5>
          </div>
          <div className="modal-body">
          <input className="form-control" placeholder="Enter title" autoFocus
            onChange={(e)=>setTitle(e.target.value)} 
            onKeyDown={handleKeyDown} 
          />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleSave}>Save</button>
            <button type="button" className="btn btn-secondary" onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BoxCreateDialog;
