import React from 'react';
import history from 'history/browser'; 

const NotFound = (props) => (
    <div>
        <h2>Not found!'</h2>
        <div>
            <button onClick={() => { history.back() }} >Go Back</button>
        </div>
    </div>
);

export default NotFound;