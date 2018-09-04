import React, {Component} from 'react'
import '../../css/history/history.scss'
export default class History extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:false
        }
    }
    componentDidMount () {
        setTimeout(() => {
            this.setState({isShow: true});
        }, 500)
    }
    render () {
        console.log(this.state.isShow);
        console.log(this.props);
        console.log(window);
        return (
            <div style={{position:'absolute',zIndex:110,width: '100vw',height:'100vh'}}>
                <div className='line'></div>
                <div className={['foot',this.state.isShow===true? 'foot_1':null].join(' ')}> </div>
                <div className={['foot',this.state.isShow===true? 'foot_2':null].join(' ')}> </div>
            </div>
        )
    }
}
