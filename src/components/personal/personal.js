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
            <div>
                <Row style={{width:'100vw',height:'100vh',background: '#d1f6ff',margin:0,padding:0}}>
                    <Col xl={{span: 16, offset: 4}} sm={{span: 24, offset: 0}}
                         style={{marginTop: '1vh'}}
                    >
                        <h1>About Me</h1>
                        <hr/>
                        <div className='introduce'>
                            <p>My name is Cheng JiaFeng(程嘉丰). You can call me Jab Fury(English full name). I was born in
                                1990s.</p>
                            <p>I am an IT developer focusing on web technology, and a strong advocate and believer of
                                Free Software.
                                Now I am employed by ChengDu Seatell technology company as an Web front/JavaScript
                                engineer.</p>
                            <p>My professional degree is software engineering, and I was graduate in ChenngDu Nsusoft
                                University.</p>
                            <p>In spare time, I like playing games, surfing internet, watching movie and playing
                                basketball, also I
                                like to go outside looking this beautiful world.</p>
                            <p>My professional skills are HTML, CSS3, JavaScript, JQuery, React.js, React Native.js,
                                Vue.js, also I
                                can use kind of UI structure for the web page such as Bootstrap, Antd for React.js,
                                Element for Vue.js
                                I'm familiar with Git for works of cooperation, and I know how to build the web project
                                by Webpack.</p>
                            <p>My working experiences are plenty, such as mobile APP by React Native.js, Web
                                administrators system by
                                React.js, also I had written some share web page for users by Vue.js.</p>
                        </div>
                        <h1>External Links</h1>
                        <hr/>
                        <div className='external-link'>
                            <p>website : <a href='http://www.cjfcjf.com'>www.cjfcjf.com</a></p>
                            <p>GitHub : <a href='https://github.com/JabFury'>JabFury</a></p>
                            <p>email : 47890165@qq.com</p>
                        </div>
                    </Col>

                </Row>
            </div>
        )
    }
}

export default Personal