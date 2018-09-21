import React, {Component} from 'react'
import '../../css/history/history.scss'
import '../icons/iconfont'

export default class History extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {

    }

    render() {
        let isCurrentPage = (this.props.currentNum === 2);
        let pageData = this.props.contentData;
        return (
            <div style={{position: 'absolute', zIndex: 110, width: '100vw', height: '100vh'}}>
                <div className='line'></div>
                {
                    pageData.length <= 0 ? null :
                        pageData.map((item, index) => {
                            return (
                                <div key={index}
                                     className={['foot', isCurrentPage === true ? (`foot_` + (index + 1)) : null].join(' ')}>
                                    <svg className="icon-svg" aria-hidden="true">
                                        <use xlinkHref={item.iconUrl}></use>
                                    </svg>
                                    <span
                                        className={['shu', isCurrentPage === true ? item.type : null].join(' ')}></span>
                                    <div
                                        className={['inform_txt', isCurrentPage === true ? item.type === 'shu_dan' ? 'txt_dan' : 'txt_shuang' : null].join(' ')}>
                                        <label className='txt'>{item.txt}</label>
                                    </div>
                                    <label
                                        className={['year_txt', isCurrentPage === true ? item.type === 'shu_dan' ? 'year_dan' : 'year_shuang' : null].join(' ')}>{item.year}</label>
                                </div>
                            )
                        })
                }
            </div>
        )
    }
}
