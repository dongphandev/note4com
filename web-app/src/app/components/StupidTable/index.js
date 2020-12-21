import React, { useEffect, useState } from 'react';

/*
[row-column]

{
  [0-0]: { value: ''}
  [0-1]: { value: ''}
}
*/
function StupidTable({data}) {
  const [source,setSource] = useState({});

  useEffect(()=>{
    setSource(data?data:[]);
  },[data]);


  const renderInput = (value)=> {
    return <textarea style={styles.input} defaultValue={value} />
  }
  
  const buildColumns = () => {
    const keys = Object.keys(source);
    return keys.filter(k=>k.startsWith('0-')).map(key=>{
      if (key === '0-0') {
        return (<th key={key} style={styles.td} scope="col">#</th>);
      }

      return (<th key={key} style={styles.td} scope="col">{renderInput(source[key].value)}</th>);
    });
  }

  const buildRows = () => {
    const keys = Object.keys(source);
    const rows = [];
    let i = 1;
    while (true) {
      let keyList = keys.filter(k=>k.startsWith(i+'-'));
      if (keyList.length === 0) {
        break;
      }

      rows.push(<tr key={'r-'+i}>
        {keyList.map(key=>{
           if (key.endsWith('-0')) {
            return (<th key={key} style={styles.td} scope="row">{renderInput(source[key].value)}</th>);
          }
    
          return (<td key={key} style={styles.td} >{renderInput(source[key].value)}</td>);
        })}
      </tr>);

      i++;
    }

    return rows;
  }

  return (
    <div style={styles.root}>
      <table className="table table-bordered">
        <thead>
          <tr>
            {buildColumns()}
          </tr>
        </thead>
        <tbody>
          {buildRows()}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  root: {
    overflowX: 'auto'
  },
  wrapper: {
    width: 'max-content'
  },
  td: {
    padding: 0
  },
  input: {
    border: 'none',
    resize: 'auto'
  }
}

export default StupidTable;