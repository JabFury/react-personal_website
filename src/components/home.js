import React, {Component} from 'react'
import '../css/home.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import {Icon, Button} from 'antd'
import Personal from './personal/personal'
import PhotoWall from './personal/photoWall'
import History from './history/history'
import FootPrint from './footprint/footprint'
import Skills from './skills/skills'
import Experience from './skills/experience'

import Connect from './connect/connect'

import welcome_top from '../images/welcome/welcome_top.jpg'
import welcome_bottom from '../images/welcome/welcome_bottom.jpg'
import home_bg from "../images/home/home_bg.jpg";

import chinese_data from '../common/chinese_data'
import english_data from '../common/english_data'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false,
            isHide: true,
            currentNum: 0,
            isFullScreen: false,
            wholePage: null,
            thirdIndex: 0,
            thirdWholePage: null,
            isChinese: true,
            deviceName: null
        }
    }

    componentWillMount() {
        // if (UserDevise[0]){
        //     this.setState({deviceName: UserDevise[0]})
        // }
        // else {
        //     this.setState({deviceName: 'web'})
        // }

        if (/Android|webOS|iPhone|iPad|Windows Phone|iPod|BlackBerry|SymbianOS|Nokia|Mobile/i.test(navigator.userAgent)) {
            this.setState({deviceName: 'mobile'})
            var sUserAgent = navigator.userAgent.toLowerCase();
            var UserDevise = sUserAgent.match(/android/i) || sUserAgent.match(/iPhone/i) || sUserAgent.match(/iPad/i);
            // UserDevise 就是判断非pc设备的类型(android---iphone---iPad)
        } else {
            this.setState({deviceName: 'web'})
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
            width: window.innerWidth,
            height: window.innerHeight,
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.third_next',
                prevEl: '.third_prev',
            },
            // scrollbar: {
            //     el: '.swiper-scrollbar',
            //     snapOnRelease: false,
            // },
            on: {
                slideChangeTransitionStart: function () {
                    _this.setState({
                        thirdIndex: this.activeIndex,
                        thirdWholePage: this.slides.length
                    });
                },
            },
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
        let contentData = this.state.isChinese === true ? chinese_data : english_data;
        let {deviceName} = this.state;
        return (
            <div>
                <div className='whole'
                     style={(this.state.isFullScreen === true && this.state.isChinese === false) ? {width: '115px'} : {width: '90px'}}>
                    {
                        deviceName === 'mobile' ? null :
                            this.state.isFullScreen === false ?
                                <div>
                                    <svg onClick={() => {
                                        this.requestFullScreen()
                                    }} className="icon_fullScreen" aria-hidden="true">
                                        <use xlinkHref='#icon-quanping'></use>
                                    </svg>
                                    <label
                                        style={{cursor: 'pointer'}}
                                    >
                                        {this.state.isChinese === true ? '全屏显示' : 'FullScreen'}
                                    </label>
                                </div>
                                :
                                <div>
                                    <svg onClick={() => {
                                        this.exitFullscreen()
                                    }} className="icon_fullScreen" aria-hidden="true">
                                        <use xlinkHref='#icon-quitquanping'></use>
                                    </svg>
                                    <label
                                        style={{cursor: 'pointer'}}
                                    >
                                        {this.state.isChinese === true ? '退出全屏' : 'ExitFullScreen'}
                                    </label>
                                </div>
                    }

                </div>

                {
                    this.state.isChinese === false ?
                        <div className='change_en'
                             style={deviceName === 'mobile' ? {right: 0} : {right: '8.5%'}}
                             onClick={() => {
                                 this.setState({isChinese: true})
                             }}>
                            <label style={{cursor: 'pointer'}}>
                                切换成中文
                            </label>
                        </div>
                        :
                        <div className='change_zh'
                             style={deviceName === 'mobile' ? {right: 0} : {right: '8.5%'}}
                             onClick={() => {
                                 this.setState({isChinese: false})
                             }}>
                            <label style={{cursor: 'pointer'}}>
                                View in English
                            </label>
                        </div>
                }


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
                                        <Personal contentData={contentData.introduceData} deviceName={this.state.deviceName}/>
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
                            <FootPrint contentData={contentData.footPointData} currentNum={this.state.currentNum}
                                       isChinese={this.state.isChinese}  deviceName={this.state.deviceName}/>
                        </div>
                        <div className="swiper-slide" style={{background: '#333333', opacity: '0.7'}}>
                            <History contentData={contentData.history.pageData} currentNum={this.state.currentNum}/>
                        </div>
                        <div className="swiper-slide">
                            <div className="third_banner">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" style={{background: 'transparent'}}>
                                        <Skills contentData={contentData.skills} isChinese={this.state.isChinese}
                                                currentNum={this.state.currentNum} thirdIndex={this.state.thirdIndex}/>
                                    </div>
                                    <div className="swiper-slide" style={{background: 'transparent'}}>
                                        <Experience contentData={contentData.experience.enData}
                                                    thirdIndex={this.state.thirdIndex}
                                                    isChinese={this.state.isChinese}/>
                                    </div>
                                    {/*<div className="swiper-slide" style={{background: '#69c2ff'}}>child 3</div>*/}
                                </div>
                                <div className='first_prev third_prev'>
                                    <Icon type="left" theme="outlined"/>
                                </div>
                                <div className='first_next third_next'>
                                    <Icon type="right" theme="outlined"/>
                                </div>
                                <div className='third_next more_btn'>
                                    {
                                        (this.state.thirdIndex + 1) === this.state.thirdWholePage ? null :
                                            <div>
                                                {this.state.isChinese == true ? '了解更多' : 'More'}
                                                < Icon type="arrow-right" theme="outlined"/>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{background: '#333333'}}>
                            <Connect currentNum={this.state.currentNum}
                                     isChinese={this.state.isChinese}
                                     deviceName={this.state.deviceName}
                            />
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
