import React, {Component} from 'react'
import '../../css/personal/money.scss'

class Money extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let contentData = this.props.contentData;
        let deviceName = this.props.deviceName;
        return (
            <div className='money_bg'>
                <div className='m_title_div'>
                    <label>该页面正在建设中...</label>
                </div>
                <div className='m_text_div_1'>
                    <label>思路堵车啦~~</label>
                </div>
                <div className='m_text_div_2'>
                    <label>如果您有好的建议或意见可以在底部找到我的联系方式联系我，不胜感谢</label>
                </div>
            </div>
        )
    }
}

export default Money
