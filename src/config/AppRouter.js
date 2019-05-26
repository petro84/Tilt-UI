import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import Banner from '../components/Banner'
import Dashboard from '../components/Dashboard'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <Router>
        <div>
            <CssBaseline />
            <Banner />
            <Switch>
                <Route path='/' component={Dashboard} exact={true} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);

export default AppRouter