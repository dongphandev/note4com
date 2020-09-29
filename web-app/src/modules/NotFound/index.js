import React from 'react';
import { browserHistory } from 'react-router';

const NotFound = (props) => (
    <div>
        <h2>Not found!'</h2>
        <div>
            <button onClick={() => { browserHistory.goBack() }} >Go Back</button>
        </div>
    </div>
);

export default NotFound;