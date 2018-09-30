import React, {Component} from 'react'
import '../../css/history/history.scss'
import '../icons/iconfont'
import FootPrint from "components/footprint/footprint";

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentWillMount () {
        // console.log(/Safari/.test(navigator.userAgent)&& !/Chrome/.test(navigator.userAgent),'123412412');
    }
    componentDidMount() {

    }

    render() {
        let isCurrentPage = (this.props.currentNum === 2);
        let pageData = this.props.contentData;
        let deviceName = this.props.deviceName;
        return (
            <div style={{position: 'absolute', zIndex: 110, width: '100vw', height: '100vh'}}>
                <div className={deviceName === "mobile" ? 'line_mobile' : 'line'}></div>
                {
                    pageData.length <= 0 ? null :
                        pageData.map((item, index) => {
                            return (
                                <div key={index}
                                     className={[deviceName === 'mobile' ? 'foot_mobile' : 'foot', isCurrentPage === true ? (deviceName === 'mobile' ? (`foot_` + (index + 1) + '_mobile') : (`foot_` + (index + 1))) : null].join(' ')}>
                                    <svg className={deviceName === "mobile" ? "icon-svg_mobile" : "icon-svg"}
                                         aria-hidden="true">
                                        <use xlinkHref={item.iconUrl}></use>
                                    </svg>
                                    <span
                                        className={[deviceName === 'mobile' ? 'shu_mobile' : 'shu', isCurrentPage === true ? (deviceName === 'mobile' ?(item.type + '_mobile'):item.type) : null].join(' ')}></span>
                                    {
                                        deviceName === "mobile" ?
                                            <div
                                                className={['inform_txt_mobile', isCurrentPage === true ? item.type === 'shu_dan' ? 'txt_dan_mobile' : 'txt_shuang_mobile' : null].join(' ')}>
                                                <label className='txt'>{item.txt}</label>
                                            </div>
                                            :
                                            <div
                                                className={['inform_txt', isCurrentPage === true ? item.type === 'shu_dan' ? 'txt_dan' : 'txt_shuang' : null].join(' ')}>
                                                <label className='txt'>{item.txt}</label>
                                            </div>
                                    }
                                    <label
                                        className={[deviceName === "mobile" ? 'year_txt_mobile' : 'year_txt', isCurrentPage === true ? item.type === 'shu_dan' ?
                                            (deviceName === "mobile" ? 'year_dan_mobile' : 'year_dan') : (deviceName === "mobile" ? 'year_shuang_mobile' : 'year_shuang')
                                            : null].join(' ')}
                                    >
                                        {item.year}
                                    </label>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}
