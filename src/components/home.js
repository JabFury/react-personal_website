import React, {Component} from 'react'
import '../css/home.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import {Icon} from 'antd'
import Personal from './personal/personal'
import PhotoWall from './personal/photoWall'
import History from './history/history'
import FootPrint from './footprint/footprint'
import Skills from './skills/skills'

import Connect from './connect/connect'

import welcome_top from '../images/welcome/welcome_top.jpg'
import welcome_bottom from '../images/welcome/welcome_bottom.jpg'
import home_bg from "../images/home/home_bg.jpg";


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false,
            isHide: true,
            currentNum: 0,
            isFullScreen: false,
            wholePage: null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoad: true});
        }, 500);
        let _this = this;
        setTimeout(() => {
            this.setState({isHide: false})
        }, 1500);
        var mySwiper1 = new Swiper('.index_banner', {
            direction: 'vertical',
            speed: 800,
            observer: true,
            mousewheel: true,
            keyboard: true,
            allowTouchMove: true,
            navigation: {
                nextEl: '.next_btn',
            },
            on: {
                slideChangeTransitionStart: function () {
                    _this.setState({
                        currentNum: this.activeIndex,
                        wholePage: this.slides.length
                    });
                },
            },
        });
        var mySwiper2 = new Swiper('.first_banner', {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.first_next',
                prevEl: '.first_prev',
            },
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     snapOnRelease: false,
            // },
            speed: 600,
            observer: true,
            keyboard: true,
            grabCursor: true,
            allowTouchMove: true,
        });

        var mySwiper3 = new Swiper('.third_banner', {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.first_next',
                prevEl: '.first_prev',
            },
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     snapOnRelease: false,
            // },
            speed: 600,
            observer: true,
            keyboard: true,
            grabCursor: true,
            allowTouchMove: true,
        });
        // mySwiper2.scrollbar.$el.css({
        //     position: 'absolute',
        //     top: 0,
        //     left: 0
        // });
    }

    requestFullScreen() {
        this.setState({isFullScreen: true});
        var de = document.documentElement;
        if (de.requestFullscreen) {
            de.requestFullscreen();
        } else if (de.mozRequestFullScreen) {
            de.mozRequestFullScreen();
        } else if (de.webkitRequestFullScreen) {
            de.webkitRequestFullScreen();
        }
    }

    exitFullscreen() {
        this.setState({isFullScreen: false});
        var de = document;
        if (de.exitFullscreen) {
            de.exitFullscreen();
        } else if (de.mozCancelFullScreen) {
            de.mozCancelFullScreen();
        } else if (de.webkitCancelFullScreen) {
            de.webkitCancelFullScreen();
        }
    }


    render() {
        return (
            <div>
                <div className='whole'>
                    {
                        this.state.isFullScreen === false ?
                            <div>
                                <label style={{cursor: 'pointer'}}>全屏显示</label>
                                <svg onClick={() => {
                                    this.requestFullScreen()
                                }} className="icon_fullScreen" aria-hidden="true">
                                    <use xlinkHref='#icon-quanping'></use>
                                </svg>
                            </div>
                            :
                            <div>
                                <label style={{cursor: 'pointer'}}>退出全屏</label>
                                <svg onClick={() => {
                                    this.exitFullscreen()
                                }} className="icon_fullScreen" aria-hidden="true">
                                    <use xlinkHref='#icon-quitquanping'></use>
                                </svg>
                            </div>
                    }

                </div>
                {
                    this.state.isHide === false ? null :
                        <div className={['donghua1', this.state.isLoad === true ? 'activeMove1' : null].join(' ')}>
                            <img src={welcome_top}/>
                        </div>
                }
                {
                    this.state.isHide === false ? null :
                        <div className={['donghua2', this.state.isLoad === true ? 'activeMove2' : null].join(' ')}>
                            <img src={welcome_bottom}/>
                        </div>
                }
                <img style={{position: 'absolute', zIndex: '-100'}} src={home_bg}/>
                <div className="index_banner">
                    <div className="swiper-wrapper panel_div">
                        <div className="swiper-slide" style={{background: 'transparent'}}>

                            <div className="first_banner">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" style={{background: 'transparent'}}>
                                        <Personal/>
                                    </div>
                                    <div className="swiper-slide" style={{background: '#fff6e4'}}>
                                        <PhotoWall/>
                                    </div>
                                    <div className="swiper-slide" style={{background: '#ba93ce'}}>child 3</div>
                                </div>
                                <div className='first_prev'>
                                    <Icon type="left" theme="outlined"/>
                                </div>
                                <div className='first_next'>
                                    <Icon type="right" theme="outlined"/>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide">
                            <FootPrint currentNum={this.state.currentNum}/>
                        </div>
                        <div className="swiper-slide" style={{background: '#333333', opacity: '0.7'}}>
                            <History currentNum={this.state.currentNum}/>
                        </div>
                        <div className="swiper-slide">
                            <div className="third_banner">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" style={{background: 'transparent'}}>
                                        <Skills/>
                                    </div>
                                    <div className="swiper-slide" style={{background: '#66dba3'}}>
                                        child 2
                                    </div>
                                    <div className="swiper-slide" style={{background: '#69c2ff'}}>child 3</div>
                                </div>
                                <div className='first_prev'>
                                    <Icon type="left" theme="outlined"/>
                                </div>
                                <div className='first_next'>
                                    <Icon type="right" theme="outlined"/>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{background: '#333333'}}>
                            <Connect currentNum={this.state.currentNum}/>
                        </div>
                    </div>
                    <div className="next_btn">
                        {
                            (this.state.currentNum + 1) === this.state.wholePage ? null :
                                <Icon type="arrow-down" theme="outlined"/>
                        }
                    </div>
                </div>
            </div>

        )
    }
}

export default Home
