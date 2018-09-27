import React, {Component} from 'react'
import '../../css/skills/experience.scss'

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
                <div className='ex_title'><label>{isChinese===true?'我写过什么':'What have I written'}</label></div>
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
                                        <label className={isChinese===true?'en_inform_txt':'en_inform_txt_english'}>
                                            {item.text}
                                        </label>
                                    </div>
                                    {/*<label className='en_more'>{isChinese===true?'了解更多':'More...'}</label>*/}
                                </div>
                            )
                        }) : null
                    }
                </div>
            </div>
        )
    }
}

export default Experience
