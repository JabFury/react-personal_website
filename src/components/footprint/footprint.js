import React, {Component} from 'react'
import '../../css/footprint/footprint.scss'
import 'echarts/lib/chart/map'
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/china.js');

let option = {
    title : {
        text: '分享一下我的足迹吧',
        left: 'center',
        textStyle:{color:'#ffffff',fontSize:25,fontWeight:'lighter'}
    },
    tooltip : {
    //     // trigger: 'item'
        formatter:'还没去过哟～～'
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
    series : [
        {
            name: '我的足迹',
            type: 'map',
            mapType: 'china',
            roam: false,
            layoutSize:100,
            itemStyle:{
                areaColor:'#666666',
                borderColor:'#ffffff'
            },
            label: {
                show:false,  //显示地名
                color:'#ffffff'
            },
            emphasis :{
                itemStyle:{areaColor:'#cccccc', opacity: 0.8},
                label: {color:'#ffffff'},
                // tooltip:
            },
            data:[
                {name: '四川',value: 0,itemStyle:{areaColor:'#ff2d4d'},tooltip: {formatter:'2004-10 九寨沟，2008-6 成都，2008-7 乐山，峨眉山，2014-11 青城山，2016-10 西昌'}},
                {name: '甘肃',value: 0,itemStyle:{areaColor:'#08ee65'},tooltip: {formatter:'出生地  兰州，2001-5 永登，2005-6 敦煌，2013-12 嘉峪关'}},
                {name: '青海',value: 0,itemStyle:{areaColor:'#8fceff'},tooltip: {formatter:'2008-6 西宁'}},
                {name: '河北',value: 0,itemStyle:{areaColor:'#cfa2e5'},tooltip: {formatter:'2006-8 山海关，2018-8 秦皇岛'}},
                {name: '江苏',value: 0,itemStyle:{areaColor:'#ff973b'},tooltip: {formatter:'2004-1 苏州，2018-5 无锡'}},
                {name: '湖北',value: 0,itemStyle:{areaColor:'#ff973b'},tooltip: {formatter:'2005-6 武汉'}},
                {name: '重庆',value: 0,itemStyle:{areaColor:'#09ff70'},tooltip: {formatter:'2008-7 三峡，2015-4 重庆，2015-10 武隆'}},
                {name: '贵州',value: 0,itemStyle:{areaColor:'#cfa2e5'},tooltip: {formatter:'2017-10 安顺'}},
                {name: '湖南',value: 0,itemStyle:{areaColor:'#8fceff'},tooltip: {formatter:'2012-7 张家界，2012-8 长沙'}},
                {name: '浙江',value: 0,itemStyle:{areaColor:'#a584ce'},tooltip: {formatter:'2004-1 杭州'}},
                {name: '广东',value: 0,itemStyle:{areaColor:'#fdff10'},tooltip: {formatter:'2016-5 广州，2018-5 深圳'}},
                {name: '天津',value: 0,itemStyle:{areaColor:'#ff2d4d'},tooltip: {formatter:'2018-8 天津'}},
                {name: '北京',value: 0,itemStyle:{areaColor:'#fdff10'},tooltip: {formatter:'2006-7 北京'}},
            ],
            markPoint:{symbol:'circle'}
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
        return (
            <div>
                <div style={{width: '100vw', height: '100vh', background: '#333333', opacity: '0.5'}}>
                </div>
                <div className={['foot_txt_div', isCurrentPage === true ? 'foot_article_div_active' : null].join(' ')}>
                    <label className='foot_title'>我热爱旅游</label>
                    <div className='foot_article_div'>
                    <label className='foot_article'>
                          喜欢走遍大江南北，品尝各个地方不同风味的小吃，
                        享受漫步在美丽至极的山间，让 它们可以能够被我的相
                        机所记录下来的感觉。
                    </label>
                        <br />
                        <br />
                    <label className='foot_article'>
                          更加喜爱被碧海蓝天点缀着的沙滩，躺在上面感受着
                        太阳带来的温暖，浸泡着海水带来的清凉。晚上一道月光
                        延伸到下一天太阳升起的海平面的远方。
                    </label>
                        <br />
                        <br />
                    <label className='foot_article'>
                          享受草原的广阔，羡慕慵懒的牛儿羊儿吃饱就睡，睡醒
                        就吃的悠闲生活。骑在马背上，仿佛自己也是一名凶猛的
                        猎人，左牵黄右擎苍，千骑卷平冈。
                    </label>
                        <br />
                        <br />
                    <label className='foot_article'>
                          翘首站在橘子洲头，到中流击水，浪遏飞舟；独登故人
                        西辞的黄鹤楼，远眺那晴川历历的汉阳树，也同时感受着
                        芳草萋萋的鹦鹉洲。
                    </label>
                        <br />
                        <br />
                    <label className='foot_article'>
                          感受佛教文化，朝拜乐山大佛、灵山大佛。领悟青城山
                        上道教风俗，听闻莫高窟上释迦摩尼和九色鹿的奉献精神
                    </label>
                    </div>
                </div>
                <ReactEcharts
                    className={['myEcharts', isCurrentPage === true ? 'echart_active' : null].join(' ')}
                    style={{width:'70vw',height:'80vh'}}
                    option={option}
                    lazyUpdate = { true }
                />
            </div>
        )
    }
}

export default FootPrint
