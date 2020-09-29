import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';

import { scrollToTop } from './utils/ui';

import App from './index';


export default ({ history }) => {
    return (
        <Router history={history}>
            {/* <Redirect from="/home" to="/dashboard" /> */}
            <Route path="page" component={Shop} onChange={()=>{scrollToTop()}}>
                <Route path="dashboard" component={Dashboard} />
                <Route path="notes" component={NotFound} />

                
                <Route path='*' exact={true} component={NotFound} />
            </Route>
            <Route path="/">
                <IndexRoute component={App} />
            </Route>
        </Router>
    );
}
