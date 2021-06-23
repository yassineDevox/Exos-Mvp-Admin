import React from 'react'
import { Route, Link, BrowserRouter as Router,Switch } from 'react-router-dom'
import DashboardPage from '../pages/dashboard';
import UsersPage from '../pages/users';
import Theme from "../theme/theme";

const AppRoute = () => {
    return (
        <Router>
            <Theme>
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route exact path="/" component={UsersPage} />
                </Switch>
            </Theme>
        </Router>
    )
}

export default AppRoute
