import React, {Component} from 'react'
import '../../css/personal/personal.scss'

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let contentData = this.props.contentData;
        let deviceName = this.props.deviceName;
        return (
            <div className='personal_bg'>
                <div className='inform_div'>

                    <div className='introduce' style={deviceName==='mobile'?{fontSize:'15px'}:{fontSize:'23px'}}>
                        <p style={deviceName==='mobile' ? {fontSize: '20px'} : {
                            fontWeight: 'lighter',
                            marginBottom: '3vh',
                            fontSize: '35px'
                        }}>
                            {contentData.title}
                        </p>
                        <p>{contentData.intro_1}</p>
                        <p>{contentData.intro_2}</p>
                        <p>{contentData.intro_3}</p>
                    </div>
                    {/*{*/}
                        {/*deviceName==='mobile' ? null :*/}
                            {/*<div className='header_img'>*/}

                            {/*</div>*/}
                    {/*}*/}

                </div>
            </div>
        )
    }
}

export default Personal
