import React from 'react';
import { useSelector } from 'react-redux';

import UISelector from '../../../store/ui/selectors';

const styles = {
  position: "absolute",
  width: "100%",
  height: "100%",
  paddingTop: 50,
  opacity: 0.3,
  backgroundColor: "gray",
  zIndex: 1000
};

function PageLoading() {
  const processes = useSelector(UISelector.processes);

  if (processes.length === 0) {
    return null;
  }

  const process = processes[0];

  return (
    <div>
      <div style={styles} />
      <div style={{zIndex:1001, position:'absolute', marginTop: 52, marginLeft:2}}>
        <div className="spinner-border spinner-border-sm" role="status">
          <span className="sr-only">{process.message?process.message:'Loading...'}</span>
        </div>
        <div className="spinner-grow spinner-grow-sm" role="status">
          <span className="sr-only">{process.message?process.message:'Loading...'}</span>
        </div>
      </div>
    </div>
  );
}


export default PageLoading;
