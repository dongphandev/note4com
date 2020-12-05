import React from 'react';

function StupidTable({data}) {


  return (
    <div style={styles.root}>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Java</th>
            <th scope="col">Golang</th>
            <th scope="col">C</th>
            <th scope="col">C#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Speed</th>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
          </tr>
          <tr>
            <th scope="row">Memory</th>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
          </tr>
          
        </tbody>
      </table>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Java</th>
            <th scope="col">Golang</th>
            <th scope="col">C</th>
            <th scope="col">C#</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Speed</th>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
          </tr>
          <tr>
            <th scope="row">Memory</th>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
            <td>xxxxxx</td>
          </tr>
          
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
  }
}

export default StupidTable;