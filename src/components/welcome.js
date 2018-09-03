import React, {Component} from 'react';
import '../css/welcome/welcome.scss'
import welcome from '../images/welcome/welcome.jpg'

class Welcome extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div className='welcome'>
                <div className='bg_div'>
                    <img src={welcome}/>
                </div>
                <div className='title_div'>
                    <label className='name'>Jab Fury</label>
                </div>
                <span
                    className='begin'
                    onClick={()=>{this.props.history.push('/home')}}
                >
                    <label className='begin_txt'>开 始</label>
                    <span className='line_top'/>
                    <span className='line_bottom'/>
                    <span className='line_left'/>
                    <span className='line_right'/>
                </span>

            </div>
        )
    }
}

export default Welcome;
