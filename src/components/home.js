import React, {Component} from 'react'
import '../css/home.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'
import {Icon} from 'antd'
import Personal from './personal/personal'
import History from './history/history'

import welcome_top from '../images/welcome/welcome_top.jpg'
import welcome_bottom from '../images/welcome/welcome_bottom.jpg'
import home_bg from "../images/home/home_bg.jpg";

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false,
            isHide: true,
            num:null
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoad: true});
        }, 500)
        setTimeout(() => {this.setState({isHide: false})},1500);
        let mySwiper1 =new Swiper('.index_banner', {
            direction: 'vertical',
            speed: 800,
            observer: true,
            mousewheel: true,
            keyboard: true,
            allowTouchMove: true,
            navigation: {
                nextEl: '.next_btn',
            },
        });
        let mySwiper2 = new Swiper('.first_banner', {
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

        console.log(mySwiper1.activeIndex);
        this.setState({num: mySwiper1.activeIndex})


    }

    render() {
        return (
            <div>
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
                <img style={{position:'absolute',zIndex:'-100'}} src={home_bg}/>
                <div className="index_banner">
                    <div className="swiper-wrapper panel_div">
                        <div className="swiper-slide" style={{background: 'transparent'}}>

                            <div className="first_banner">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" style={{background: 'transparent'}}>
                                        <Personal/>
                                    </div>
                                    <div className="swiper-slide" style={{background: '#ff2d4d'}}>child 2</div>
                                    <div className="swiper-slide" style={{background: '#ba93ce'}}>child 3</div>
                                </div>
                                <div className='first_prev' >
                                    <Icon type="left" theme="outlined" />
                                </div>
                                <div className='first_next'>
                                    <Icon type="right" theme="outlined" />
                                </div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{background: '#333333',opacity:'0.6'}}>
                            <History currentNum={this.state.num}/>
                        </div>
                        <div className="swiper-slide" style={{background: '#333333',opacity:'0.9'}}>
                            3
                        </div>
                    </div>
                    <div className="next_btn">
                        <Icon type="arrow-down" theme="outlined" />
                    </div>
                </div>
            </div>

        )
    }
}

export default Home
