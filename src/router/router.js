import React, {Component} from 'react';

// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {HashRouter as Router, Route, Link, hashHistory, Switch} from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!../components/home';
import Welcome from 'bundle-loader?lazy&name=home!../components/welcome';
import '../css/router.scss'


const Loading = function () {
    return (
        <div
            style={{
                width:'100vw',height:'100vh',background:'transparent',
                position:'absolute',top:0,left:0,zIndex:1000
            }}>
            <div className="spinner">
                <div className="rect1"></div>
                <div className="rect2"></div>
                <div className="rect3"></div>
                <div className="rect4"></div>
                <div className="rect5"></div>
            </div>

        </div>
    )
};
const createComponent = (component) => (props) => (
    <Bundle load={component}>
        {
            (Component) => Component ? <Component {...props} /> : <Loading/>
        }
    </Bundle>
);


const getRouter = () => (
    <Router history={hashHistory}>
        <div>
            <Route exact path="/" component={createComponent(Welcome)}/>
            <Route path="/home" component={createComponent(Home)}/>
        </div>
    </Router>
);

export default getRouter;
