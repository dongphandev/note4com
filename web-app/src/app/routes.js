import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import App from './index';
import UniversalTemplate from './templates/UniversalTemplate';

import Note from '../modules/Note';
import SignIn from '../modules/SignIn';


export default () => {
    return (
        <Router>
            <App>
                <Switch>
                    <Route path="/page" on>
                        <UniversalTemplate>
                            <Switch>
                                <Route path="/page/notes" component={Note} />
                                <Route path="/page/login" component={SignIn} />

                                <Route path='*' exact>
                                    <Redirect to="/page/notes"/>
                                </Route>
                            </Switch>
                        </UniversalTemplate>
                    </Route>
                    <Route path='*' exact>
                        <Redirect to="/page/notes" />
                    </Route>
                </Switch>
            </App>
        </Router>
    );
}
