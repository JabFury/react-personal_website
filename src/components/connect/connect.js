import React, {Component} from 'react'
import '../../css/connect/connect.scss'
import '../icons/iconfont'

export default class Connect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowWeChat: false,
            isQQ: false
        }
    }

    componentDidMount() {

    }

    render() {
        let isCurrentPage = (this.props.currentNum === 4);
        let isChinese = this.props.isChinese;
        let deviceName = this.props.deviceName;
        return (
            <div>
                <div className='main_title'>
                    <div className={deviceName === 'mobile' ?
                        ['main_title_div_mobile', isCurrentPage === true ? 'main_active_mobile' : null].join(' ')
                        :
                        ['main_title_div', isCurrentPage === true ? 'main_active' : null].join(' ')}>
                        {
                            isChinese === true ?
                                <div>
                                    <label className='title_label'>交</label>
                                    <label className='title_label'>个</label>
                                    <label className='title_label'>朋</label>
                                    <label className='title_label'>友</label>
                                    <label className='title_label'>吧</label>
                                </div>
                                :
                                deviceName === 'mobile' ?
                                    <label
                                        className={['en_title_label_mobile', isCurrentPage === true ? 'en_active_mobile' : null].join(' ')}>
                                        Hey Friend !
                                    </label>
                                    :
                                    <label
                                        className={['en_title_label', isCurrentPage === true ? 'en_active' : null].join(' ')}>
                                        I want to make a friend with You
                                    </label>
                        }
                    </div>
                    <div className={
                        deviceName === 'mobile' ?
                            ['poem_mobile', isCurrentPage === true ? 'poem_active_mobile' : null].join(' ')
                            :
                            ['poem', isCurrentPage === true ? 'poem_active' : null].join(' ')
                    }
                    >
                        {
                            isChinese === true ?
                                <label
                                    style={{fontSize: '20px'}}>{deviceName === 'mobile' ? '' : '——'}相知何必旧，倾盖定前言</label> :
                                <label style={deviceName === 'mobile' ? {fontSize: '14px'} : {fontSize: '20px'}}>
                                    {deviceName === 'mobile' ? '' : '——'}
                                    A friend in court is better than a penny in purse.
                                </label>
                        }
                    </div>
                </div>
                <div className={['connect_header', isCurrentPage === true ? 'connectHeader_active' : null].join(' ')}>
                    {
                        deviceName === "mobile" ?
                            <label
                                className='connect_title_mobile'>{isChinese === true ? '你可以通过以下方式找到我' : 'Contect Me With'}
                            </label>
                            :
                            <label
                                className='connect_title'>{isChinese === true ? '你可以通过以下方式找到我' : 'Contect Me With'}
                            </label>
                    }
                    <div className={deviceName === "mobile" ? 'icon_div_mobile' : 'icon_div'}>
                        <div className='icon-div'>
                            {
                                deviceName === "mobile" ?
                                    <a onClick={() => {this.setState({isShowWeChat: true,isQQ: true})}}>
                                        <svg
                                            className={deviceName === "mobile" ? "connect_icon_svg_mobile" : "connect_icon_svg"}
                                            aria-hidden="true">
                                            <use xlinkHref="#icon-qq"></use>
                                        </svg>
                                    </a>
                                    :
                                    <a target="_blank" href='http://wpa.qq.com/msgrd?v=3&uin=47890165&menu=yes'>
                                        <svg
                                            className={deviceName === "mobile" ? "connect_icon_svg_mobile" : "connect_icon_svg"}
                                            aria-hidden="true">
                                            <use xlinkHref="#icon-qq"></use>
                                        </svg>
                                    </a>
                            }

                        </div>
                        <div className='icon-div'>
                            <a target="_blank" href='https://github.com/JabFury'>
                                <svg
                                    className={deviceName === "mobile" ? "connect_icon_svg_mobile" : "connect_icon_svg"}
                                    aria-hidden="true">
                                    <use xlinkHref="#icon-github000"></use>
                                </svg>
                            </a>
                        </div>

                        <div className='icon-div'>
                            <a target="_blank"
                               href='https://weibo.com/5433476675/profile?rightmod=1&wvr=6&mod=personinfo&is_all=1'>
                                <svg
                                    className={deviceName === "mobile" ? "connect_icon_svg_mobile" : "connect_icon_svg"}
                                    aria-hidden="true">
                                    <use xlinkHref="#icon-weibo"></use>
                                </svg>
                            </a>
                        </div>

                        <div className='icon-div'>
                            <a target="_blank" href='https://twitter.com/FuryJab'>
                                <svg
                                    className={deviceName === "mobile" ? "connect_icon_svg_mobile" : "connect_icon_svg"}
                                    aria-hidden="true">
                                    <use xlinkHref="#icon-twitter"></use>
                                </svg>
                            </a>
                        </div>

                        <div className='icon-div'>
                            <a style={{cursor: 'pointer'}} onClick={() => {
                                this.setState({isShowWeChat: true, isQQ: false})
                            }}>
                                <svg
                                    className={deviceName === "mobile" ? "connect_icon_svg_mobile" : "connect_icon_svg wechat"}
                                    aria-hidden="true">
                                    <use xlinkHref="#icon-weixin"></use>
                                </svg>
                            </a>
                        </div>
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
                                className={['we-chat', this.state.isShowWeChat === true ? deviceName === "mobile" ? 'show_wechat_mobile' : 'show_wechat' : null].join(' ')}>
                                {
                                    this.state.isQQ===true ?
                                        <img src={require('../../images/qq_code.png')}/>
                                        :
                                        <img src={require('../../images/wechat_code.png')}/>
                                }
                            </div>
                        </div>
                        : null
                }
            </div>
        )
    }
}
