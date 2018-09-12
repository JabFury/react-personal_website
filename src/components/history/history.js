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
        let isCurrentPage = (this.props.currentNum === 1);
        const pageData = [
            {iconUrl: '#icon-chusheng', type: 'shu_dan', year: '1996.2', txt: '感谢父母赐予生命，让我降临到这个世界'},
            {iconUrl: '#icon-xiaoxue', type: 'shu_shuang', year: '2002.9', txt: '步入校园，开始追寻探索求学之路的奇妙旅程'},
            {iconUrl: '#icon-biye', type: 'shu_dan', year: '2008.6', txt: '小学毕业，当了为期6年的组长，课代表'},
            {iconUrl: '#icon-pingpangqiu1', type: 'shu_shuang', year: '2009.8', txt: '参加甘肃省乒乓球省级比赛'},
            {iconUrl: '#icon-18', type: 'shu_dan', year: '2014.2', txt: '18岁，成为了一名要履行社会责任的青年'},
            {iconUrl: '#icon-daxue1', type: 'shu_shuang', year: '2014.9', txt: '步入大学校园，软件工程专业'},
            {iconUrl: '#icon-diannao', type: 'shu_dan', year: '2016.7', txt: '结合学校知识，开始钻研Web前端开发'},
            {iconUrl: '#icon-shixi', type: 'shu_shuang', year: '2017.9', txt: '实习，Web前端开发'},
            {iconUrl: '#icon-tubiao64', type: 'shu_dan', year: '2018.6', txt: 'Web前端开发工程师'},
            {iconUrl: '#icon-more', type: 'shu_shuang', txt: '未完待续'},
        ]
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
