import React, {Component} from 'react'
import '../../css/connect/connect.scss'
import '../icons/iconfont'

export default class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowWeChat: false
        }
    }

    componentDidMount() {

    }

    render() {
        let isCurrentPage = (this.props.currentNum === 2);
        return (
            <div>
                <div className='main_title'>
                    <div className={['main_title_div', isCurrentPage === true ? 'main_active' : null].join(' ')}>
                        <label className='title_label'>交</label>
                        <label className='title_label'>个</label>
                        <label className='title_label'>朋</label>
                        <label className='title_label'>友</label>
                        <label className='title_label'>吧</label>
                    </div>
                    <div className={['poem', isCurrentPage === true ? 'poem_active' : null].join(' ')}>
                        <label>——相知何必旧，倾盖定前言</label>
                    </div>
                </div>
                <div className={['connect_header', isCurrentPage === true ? 'connectHeader_active' : null].join(' ')}>
                    <label className='connect_title'>你可以通过以下方式找到我</label>

                    <div className='icon_div'>
                        <a target="_blank" href='http://wpa.qq.com/msgrd?v=3&uin=47890165&menu=yes'>
                            <svg className="connect_icon_svg" aria-hidden="true">
                                <use xlinkHref="#icon-qq"></use>
                            </svg>
                        </a>
                        <a target="_blank" href='https://github.com/JabFury'>
                            <svg className="connect_icon_svg" aria-hidden="true">
                                <use xlinkHref="#icon-github000"></use>
                            </svg>
                        </a>
                        <a target="_blank"
                           href='https://weibo.com/5433476675/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1'>
                            <svg className="connect_icon_svg" aria-hidden="true">
                                <use xlinkHref="#icon-weibo"></use>
                            </svg>
                        </a>
                        <a target="_blank" href='https://twitter.com/FuryJab'>
                            <svg className="connect_icon_svg" aria-hidden="true">
                                <use xlinkHref="#icon-twitter"></use>
                            </svg>
                        </a>
                        <a style={{cursor: 'pointer'}} onClick={() => {
                            this.setState({isShowWeChat: true})
                        }}>
                            <svg className="connect_icon_svg wechat" aria-hidden="true">
                                <use xlinkHref="#icon-weixin"></use>
                            </svg>
                        </a>
                    </div>

                </div>

                {
                    this.state.isShowWeChat === true ?
                        <div onClick={() => {
                            this.setState({isShowWeChat: false})
                        }}>
                            <div
                                className={['wechat_model', this.state.isShowWeChat === true ? 'show_wechat_model' : null].join(' ')}></div>
                            <div
                                className={['we-chat', this.state.isShowWeChat === true ? 'show_wechat' : null].join(' ')}>
                                <img src={require('../../images/wechat_code.png')}/>
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}
