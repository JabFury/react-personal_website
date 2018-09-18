import React, {Component} from 'react'
import '../../css/personal/photoWall.scss'
import {Row, Col} from 'antd'
export default class PhotoWall extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullScreenImg:false,
            photoData : null
        }
    }

    showPhoto (itemData) {
        this.setState({
            fullScreenImg:true,
            photoData : itemData
        })
    }

    passChild (result) {
        this.setState({
            fullScreenImg : result
        })
    }

    render() {
        let imgData = [
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            {url: <img src={require('../../images/home/personal_bg.jpg')} />},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
            // {url: '../../images/home/', zDex: ((Math.random() + 1) * 6), rotateNum: ((Math.random() + 1) * 360), topNum: (Math.random() * 80), leftNum: (Math.random() * 80)},
        ];
        return (
            <div className='photo_container'>
                {/*<div className='bg_wall'>*/}
                    {/*<img src={require('../../images/home/photoWall_bg.jpg')}/>*/}
                {/*</div>*/}
            <div className='photo_wall'>
                {
                    imgData ? imgData.map((item, index) => {
                        return (
                            <div
                                onClick={()=>{this.showPhoto(item)}}
                                className='photo_div'
                                key={index}
                                style={{
                                    position: 'absolute',
                                    top: `${(Math.random() * 80)}%`,
                                    left: `${(Math.random() * 80)}%`,
                                    transform: `rotate(${((Math.random() + 1) * 360)}deg)`,
                                    zIndex: item.zDex
                                }}
                            >
                                {item.url}
                            </div>
                        )
                    }) : null
                }
            </div>
                {
                    this.state.fullScreenImg===true?
                        <ImgComponent
                            passChild={this.passChild.bind(this)}
                            photoData={this.state.photoData}
                        /> : null
                }

            </div>
        )
    }
}

class ImgComponent extends Component{
    constructor(props) {
        super(props);
        this.state={};
    }

    hidePhoto (result) {
        // this.setState({fullScreenImg:false})
        this.props.passChild(result)
    }

    render () {
        console.log(this.props.photoData,'123123112');
        return (
            <div onClick={()=>{this.hidePhoto(false)}}>
                <div className='photo_bg_div'></div>
                <div className='picture_show_div'>
                {this.props.photoData.url}
            </div>
            </div>
        )
    }
}

