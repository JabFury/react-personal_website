import React, {Component} from 'react'
import '../../css/footprint/footprint.scss'
import 'echarts/lib/chart/map'
import ReactEcharts from 'echarts-for-react';
require('echarts/map/js/china.js');

let option = {
    tooltip : {
    //     // trigger: 'item'
        formatter:'还没去过哟～～'
    },
    legend: {
        orient: 'horizontal',
        // left: 'left',
        data:['我的足迹'],
        textStyle:{color:'#ffffff',fontSize:15},
        pageIconColor:'#8fceff',
        pageIconInactiveColor:'#8fceff'
    },
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
                itemStyle:{areaColor:'#999999', opacity: 0.8},
                label: {color:'#ffffff'},
                // tooltip:
            },
            data:[
                {name: '四川',value: 0,tooltip: {formatter:'2008-1 成都，2004-10 九寨沟'}},
                {name: '四川',value:0},
            ]
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
        // let isCurrentPage = (this.props.currentNum === 1);
        return (
            <div>
                <div style={{width: '100vw', height: '100vh', background: '#333333', opacity: '0.5'}}>
                </div>
                <ReactEcharts
                    className='myEcharts'
                    style={{width:'70vw',height:'80vh'}}
                    option={option}
                    lazyUpdate = { true }
                />
            </div>
        )
    }
}

export default FootPrint
