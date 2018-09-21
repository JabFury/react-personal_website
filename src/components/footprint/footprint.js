import React, {Component} from 'react'
import '../../css/footprint/footprint.scss'
import 'echarts/lib/chart/map'
import ReactEcharts from 'echarts-for-react';

require('echarts/map/js/china.js');

let option = {
    title: {
        // text: '分享一下我的足迹吧',
        left: 'center',
        textStyle: {color: '#ffffff', fontSize: 25, fontWeight: 'lighter'}
    },
    tooltip: {
        //     // trigger: 'item'
        formatter: '还没去过哟～～'
    },
    // legend: {
    //     orient: 'horizontal',
    //     // left: 'left',
    //     data:['我的足迹'],
    //     textStyle:{color:'#ffffff',fontSize:15},
    //     pageIconColor:'#8fceff',
    //     pageIconInactiveColor:'#8fceff',
    //     top:'150px'
    // },
    series: [
        {
            name: '我的足迹',
            type: 'map',
            mapType: 'china',
            roam: false,
            layoutSize: 100,
            // tooltip: {
            //     position: {
            //         left: '-10%'
            //     }
            // },
            itemStyle: {
                areaColor: '#666666',
                borderColor: '#ffffff'
            },
            label: {
                show: false,  //显示地名
                color: '#ffffff'
            },
            emphasis: {
                itemStyle: {areaColor: '#cccccc', opacity: 0.8},
                label: {color: '#ffffff'},
                // tooltip:
            },
            data: [
                {
                    name: '四川',
                    value: 0,
                    itemStyle: {areaColor: '#ff2d4d'},
                    tooltip: {formatter: '2004-10 九寨沟，2008-6 成都，2008-7 乐山，峨眉山，2014-11 青城山，2016-10 西昌'}
                },
                {
                    name: '甘肃',
                    value: 0,
                    itemStyle: {areaColor: '#08ee65'},
                    tooltip: {formatter: '出生地  兰州，2001-5 永登，2005-6 敦煌，2013-12 嘉峪关'}
                },
                {name: '青海', value: 0, itemStyle: {areaColor: '#8fceff'}, tooltip: {formatter: '2008-6 西宁'}},
                {
                    name: '河北',
                    value: 0,
                    itemStyle: {areaColor: '#cfa2e5'},
                    tooltip: {formatter: '2006-8 山海关，2018-8 秦皇岛'}
                },
                {name: '江苏', value: 0, itemStyle: {areaColor: '#ff973b'}, tooltip: {formatter: '2004-1 苏州，2018-5 无锡'}},
                {name: '湖北', value: 0, itemStyle: {areaColor: '#ff973b'}, tooltip: {formatter: '2005-6 武汉'}},
                {
                    name: '重庆',
                    value: 0,
                    itemStyle: {areaColor: '#09ff70'},
                    tooltip: {formatter: '2008-7 三峡，2015-4 重庆，2015-10 武隆'}
                },
                {name: '贵州', value: 0, itemStyle: {areaColor: '#cfa2e5'}, tooltip: {formatter: '2017-10 安顺'}},
                {name: '湖南', value: 0, itemStyle: {areaColor: '#8fceff'}, tooltip: {formatter: '2012-7 张家界，2012-8 长沙'}},
                {name: '浙江', value: 0, itemStyle: {areaColor: '#a584ce'}, tooltip: {formatter: '2004-1 杭州'}},
                {name: '广东', value: 0, itemStyle: {areaColor: '#fdff10'}, tooltip: {formatter: '2016-5 广州，2018-5 深圳'}},
                {name: '天津', value: 0, itemStyle: {areaColor: '#ff2d4d'}, tooltip: {formatter: '2018-8 天津'}},
                {name: '北京', value: 0, itemStyle: {areaColor: '#fdff10'}, tooltip: {formatter: '2006-7 北京'}},
            ],
            markPoint: {symbol: 'circle'}
        }
    ]
};


class FootPrint extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: true
        }
    }

    componentDidMount() {
        this.setState({loaded: true});
    }

    render() {
        let isCurrentPage = (this.props.currentNum === 1);
        let contentData = this.props.contentData;
        let isChinese = this.props.isChinese;
        return (
            <div>
                <div style={{width: '100vw', height: '100vh', background: '#333333', opacity: '0.5'}}>
                </div>
                <div className={['foot_txt_div', isCurrentPage === true ? 'foot_article_div_active' : null].join(' ')}>
                    <label className='foot_title'>{contentData.title}</label>
                    <div className='foot_article_div'>
                        <label
                            className={isChinese === true ? 'foot_article' : 'en_article'}>{contentData.foot_1}</label>
                        <br/>
                        <br/>
                        <label
                            className={isChinese === true ? 'foot_article' : 'en_article'}>{contentData.foot_2}</label>
                        <br/>
                        <br/>
                        <label
                            className={isChinese === true ? 'foot_article' : 'en_article'}>{contentData.foot_3} </label>
                        <br/>
                        <br/>
                        <label
                            className={isChinese === true ? 'foot_article' : 'en_article'}>{contentData.foot_4}</label>
                        <br/>
                        <br/>
                        <label
                            className={isChinese === true ? 'foot_article' : 'en_article'}>{contentData.foot_5}</label>
                    </div>
                </div>
                <label
                    className={['share_footPoint', isCurrentPage === true ? 'share_footPoint_active' : null].join(' ')}
                >
                    {isChinese === true ? '分享一下我的足迹吧' : 'This is my FootPoint'}
                </label>
                <ReactEcharts
                    className={['myEcharts', isCurrentPage === true ? 'echart_active' : null].join(' ')}
                    style={{width: '60vw', height: '75vh'}}
                    option={option}
                    lazyUpdate={true}
                />
            </div>
        )
    }
}

export default FootPrint
