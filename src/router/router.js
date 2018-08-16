import React from 'react';

// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {HashRouter as Router, Route, Link, hashHistory,Switch} from 'react-router-dom';
import Bundle from './Bundle';

import Home from 'bundle-loader?lazy&name=home!../components/home';
// import PageScroll from 'bundle-loader?lazy&name=home!../components/pageScroll';
// import Child from 'bundle-loader?lazy&name=child!../components/child';
// import Counter from 'bundle-loader?lazy&name=counter!../components/counter';
// import GetUserInfo from 'bundle-loader?lazy&name=getUserInfo!../components/getUserInfo';

const Loading = function () {
    return <div>Loading...</div>
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
            {/*<ul>*/}
            {/*<li><Link to="/">首页</Link></li>*/}
            {/*<li><Link to="/child">Page1</Link></li>*/}
            {/*<li><Link to="/counter">Counter</Link></li>*/}
            {/*<li><Link to="/user-info">userInfo</Link></li>*/}
            {/*</ul>*/}
            <Switch>
                <Route exact path="/" component={createComponent(Home)}/>
                {/*<Route path="/child" component={createComponent(Child)}/>*/}
                {/*<Route path="/counter" component={createComponent(Counter)}/>*/}
                {/*<Route path="/user-info" component={createComponent(GetUserInfo)}/>*/}
            </Switch>
        </div>
    </Router>
);

export default getRouter;