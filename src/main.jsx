import React from 'react'
import { Redirect, Route,BrowserRouter as Router, Switch } from 'react-router-dom'
import Login from './pages/Login/login'
import Dashboard from './pages/dashboard/dashboard'
import './main.css'

export default class main extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            isAuthenticated : false,
        }
    }

    render(){
        return(
            this.authenticate()
        )
    }

    performLogin(){ 
        return (
            this.setState({isAuthenticated : true})
        )
    }

    authenticate(){
        return (
            <Router>
                {/*use the authentification to get to the route*/}
                {this.state.isAuthenticated ? <Redirect from="/" to="/maintain/dashboard" /> :
                    <Redirect from="/" to="/login" /> }
                <Switch>
                    <Route path="/login">
                        <Login onClick={() => this.performLogin()}/>
                    </Route>
                    <Route path="/maintain/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Router>
        )
    }
}
