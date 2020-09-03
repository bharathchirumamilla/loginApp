import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components';
import { Login, LoginSuccess, LoginFailure } from '../components';

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/loginsuccess" exact component={LoginSuccess} />
                <Route path="/loginfailure" exact component={LoginFailure} />
            </Switch>
        </Router>
    )
}

export default App
