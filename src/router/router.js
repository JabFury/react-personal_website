import React, {Component} from 'react';

// import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import {HashRouter as Router, Route, Link, hashHistory, Switch} from 'react-router-dom';
import Bundle from './Bundle';

// import Home from 'bundle-loader?lazy&name=home!../components/home';
import Test1 from '../components/test/test1'
import Test2 from '../components/test/test2'
import Test3 from '../components/test/test3'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import '../css/index.scss'
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


class getRouter extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        new Swiper('.wxchat-banner', {
            direction: 'vertical',
            speed:800,
            observer: true,
            mousewheel: true,
            keyboard:true,
            hashNavigation: true,
            // pagination: {
            //     el: '.swiper-pagination',
            // },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    render() {
        return (
            <div>
                <div className="wxchat-banner">
                    <div className="swiper-wrapper panel_div">
                        <div className="swiper-slide" style={{background:'#08ee65'}} data-hash="test1">
                            <Test1 />
                        </div>
                        <div className="swiper-slide" style={{background:'#8fceff'}} data-hash="test2">
                            <Test2 />
                        </div>
                        <div className="swiper-slide" style={{background:'#c7d6e5'}} data-hash="test3">
                            <Test3 />
                        </div>
                    </div>
                    {/*如果需要导航按钮*/}
                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>

                    {/*如果需要分页器*/}
                    {/*<div class="swiper-pagination"></div>*/}
                </div>
                {/*<Router history={hashHistory}>*/}
                    {/*<Switch>*/}
                        {/*<Route exact path="/" component={createComponent(Home)}/>*/}
                        {/*<Route exact path="/test1" component={createComponent(Test1)}/>*/}
                        {/*<Route exact path="/test2" component={createComponent(Test2)}/>*/}
                        {/*<Route exact path="/test3" component={createComponent(Test3)}/>*/}
                        {/*/!*<Route path="/child" component={createComponent(Child)}/>*!/*/}
                        {/*/!*<Route path="/counter" component={createComponent(Counter)}/>*!/*/}
                        {/*/!*<Route path="/user-info" component={createComponent(GetUserInfo)}/>*!/*/}
                    {/*</Switch>*/}
                {/*</Router>*/}
            </div>

        )
    }

}

export default getRouter;