import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Main from '../components/Main/Main';

export default class Routes extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Main} /> 
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}