import React, {Component} from 'react'
import '../../css/personal/personal.scss'

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let contentData = this.props.contentData;
        return (
            <div className='personal_bg'>
                <div className='inform_div'>

                    <div className='introduce'>
                        <p style={{fontWeight:'lighter',marginBottom:'3vh',fontSize:'35px'}}>{contentData.title}</p>
                        <p>{contentData.intro_1}</p>
                        <p>{contentData.intro_2}</p>
                        <p>{contentData.intro_3}</p>
                    </div>
                    <div className='header_img'>

                    </div>
                </div>
            </div>
        )
    }
}

export default Personal
