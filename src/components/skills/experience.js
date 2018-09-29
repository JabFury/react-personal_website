import React, {Component} from 'react'
import '../../css/skills/experience.scss'
import {Collapse} from 'antd';

const Panel = Collapse.Panel;

class Experience extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let isChinese = this.props.isChinese;
        let contentData = this.props.contentData;
        let deviceName = this.props.deviceName;
        return (
            <div className='experience_bg'>
                {
                    deviceName === "mobile" ?
                        <div>
                            <div className='ex_title_mobile'>
                                <label>{isChinese === true ? '我写过什么' : 'What have I written'}</label>
                            </div>
                            <Collapse accordion className='collapse_mobile'>
                                {
                                    contentData.length > 0 ?
                                        contentData.map((item, index) => {
                                            return (
                                                <Panel header={item.title} key={index}>
                                                    <p>{item.text}</p>
                                                </Panel>
                                            )
                                        }) : null
                                }
                            </Collapse>,
                        </div>
                        :
                        <div>
                            <div className='ex_title'>
                                <label>{isChinese === true ? '我写过什么' : 'What have I written'}</label>
                            </div>
                            <div className='en_div'>
                                {
                                    contentData ? contentData.map((item, index) => {
                                        return (
                                            <div className='en_list' key={index}>
                                                <div className='b_title_div'>
                                                    <label className='b_title'>{item.belong}</label>
                                                </div>
                                                <div className='b_title_div'>
                                                    <label className='b_title'>{item.title}</label>
                                                </div>
                                                <div className='en_article_div'>
                                                    <label
                                                        className={isChinese === true ? 'en_inform_txt' : 'en_inform_txt_english'}>
                                                        {item.text}
                                                    </label>
                                                </div>
                                            </div>
                                        )
                                    }) : null
                                }
                            </div>
                        </div>
                }

            </div>
        )
    }
}

export default Experience
