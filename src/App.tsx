import React from 'react';
import './styles/styles.scss';
import {Hello, HelloProps} from "./components/Hello";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Login} from "./components/Login";
import {Register} from "./components/Register";
import {Navigation} from "./components/Navigation";

function App() {
    return (
        <Router>
            <Navigation/>
            <div className="body-content">
                <Switch>
                    <Route path="/welcome/:id"
                           component={(props: HelloProps) => <Hello title="Mr." name="Marcin"
                                                                    age={25} {...props}/>}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/" component={Register}/>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
