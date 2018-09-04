import React, {Component} from 'react'
import '../../css/personal/personal.scss'
import {Row, Col} from 'antd'
class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='personal_bg'>
                <div className='inform_div'>

                    <div className='introduce'>
                        <p style={{fontWeight:'lighter',marginBottom:'3vh',fontSize:'40px'}}>我是程嘉丰</p>
                        <p>一个22岁的前端攻城狮</p>
                        <p>篮球 乒乓球 音乐</p>
                        <p>追求新鲜事物，享受美妙视觉感悟</p>
                    </div>
                    <div className='header_img'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Personal
