import React, {Component} from 'react'
import '../css/home.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.css'

import Personal from './personal/personal'
import welcome_top from '../images/welcome/welcome_top.jpg'
import welcome_bottom from '../images/welcome/welcome_bottom.jpg'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoad: false,
            isHide: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({isLoad: true});
        }, 300)
        setTimeout(() => {this.setState({isHide: false})},1500);
        new Swiper('.index_banner', {
            direction: 'vertical',
            speed: 800,
            observer: true,
            mousewheel: true,
            keyboard: true,
            allowTouchMove: true,
        });
        let mySwiper2 = new Swiper('.first_banner', {
            direction: 'horizontal',
            pagination: {
                el: '.swiper-pagination',
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            scrollbar: {
                el: '.swiper-scrollbar',
            },
            speed: 600,
            observer: true,
            keyboard: true,
            grabCursor: true,
            allowTouchMove: true,
        });
        mySwiper2.scrollbar.$el.css({
            position: 'absolute',
            top: 0,
            left: 0
        });


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
                <div className="index_banner">
                    <div className="swiper-wrapper panel_div">
                        <div className="swiper-slide" style={{background: '#08ee65'}}>

                            <div className="first_banner">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide" style={{background: '#ff973b'}}>
                                        <Personal/>
                                    </div>
                                    <div className="swiper-slide" style={{background: '#ff2d4d'}}>child 2</div>
                                    <div className="swiper-slide" style={{background: '#ba93ce'}}>child 3</div>
                                </div>
                                <div className="swiper-scrollbar"></div>
                            </div>
                        </div>
                        <div className="swiper-slide" style={{background: '#8fceff'}}>
                            2
                        </div>
                        <div className="swiper-slide" style={{background: '#c7d6e5'}}>
                            3
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default Home
