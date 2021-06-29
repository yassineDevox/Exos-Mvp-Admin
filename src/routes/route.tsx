import React from 'react'
import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import DashboardPage from '../pages/dashboard';
import Error404 from '../pages/error-404';
import PostsPage from '../pages/posts';
import UsersPage from '../pages/users';
import Theme from "../theme/theme";

const AppRoute = () => {
    return (
        <Router>
            <Theme>
                <Switch>
                    <Route exact path="/" component={DashboardPage} />
                    <Route  path="/users" component={UsersPage} />
                    <Route  path="/posts" component={PostsPage} />
                    <Route  path="*" component={Error404} />

                </Switch>
            </Theme>
        </Router>
    )
}

export default AppRoute
