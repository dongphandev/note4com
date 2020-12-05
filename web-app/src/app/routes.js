import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import history from './history';
import App from './index';

import Note from './modules/Note';
import SignIn from './modules/Auth/SignIn';


export default () => {
    return (
        <Router history={history}>
            <App>
                <Switch>
                    <Route path="/page/notes" component={Note} />

                    <Route path="/login" component={SignIn} />
                    <Route path='*' exact>
                        <Redirect to="/login" />
                    </Route>
                </Switch>
            </App>
        </Router>
    );
}
