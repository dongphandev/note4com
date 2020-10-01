import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router';

import { scrollToTop } from '../utils/ui';

import App from './index';
import UniversalTemplate from './templates/UniversalTemplate';

import Dashboard from '../modules/Dashboard';
import SignIn from '../modules/SignIn';


export default ({ history }) => {
    return (
        <Router history={history}>
            <Route path="/" onChange={() => { scrollToTop() }}>
                <App>
                    <Switch>
                        <Route path="/page">
                            <UniversalTemplate>
                                <Switch>
                                    <Route path="/page/dashboard" component={Dashboard} />
                                    <Route path="/page/notes" component={Dashboard} />
                                    <Route path="/page/login" component={SignIn} />

                                    <Route path='*' exact>
                                        <Redirect to="/page/dashboard"/>
                                    </Route>
                                </Switch>
                            </UniversalTemplate>
                        </Route>
                        <Route path='*' exact>
                            <Redirect to="/page/dashboard"/>
                        </Route>
                    </Switch>
                </App>
            </Route>
        </Router>
    );
}
