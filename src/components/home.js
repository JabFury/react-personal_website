import React, {Component} from 'react'
import Swiper from 'swiper/dist/js/swiper.js'

import 'swiper/dist/css/swiper.css'
import '../css/home.scss'
import img from '../images/2.png'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        new Swiper('.wxchat-banner', {
            direction: 'vertical',
            observer: true,
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
        const items = [img, img, img];
        return (
            <div className="wxchat-banner">
                <div className="swiper-wrapper panel_div">
                    <div className="swiper-slide" style={{background:'#08ee65'}}>Slide 1</div>
                    <div className="swiper-slide" style={{background:'#8fceff'}}>Slide 2</div>
                    <div className="swiper-slide" style={{background:'#c7d6e5'}}>Slide 3</div>
                </div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        )
    }
}

export default Home

// export default class Home extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             list: [1, 2, 3]
//         }
//     }
//
//     componentDidMount() {
//
//     }
//
//     render() {
//
//         let {list} = this.state
//         return (
//             <div>
//                 {
//                     list.length>0? <Child list={list} /> : null
//                 }
//             </div>
//
//         )
//     }
// }