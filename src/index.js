import React from 'react'
import { render } from 'react-dom'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import './index.css'
import App from './App'
import ContactUs from './ContactUs'

const Main = () => {
    return(
        <Router>
            <Switch>
                <Route component={App} exact={true} path="/" />
                <Route component={ContactUs} path="/contact" />
            </Switch>
        </Router>
    )
}

render(<Main/>, document.querySelector('#root'))