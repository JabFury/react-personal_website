import React, {Component} from 'react'
import '../../css/skills/skills.scss'

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className='skills_bg'>
                <div className='bg'>
                    <label className='skills_title'>我所掌握的技能</label>
                </div>

                <div className='skills_div'>
                    <div className='web_div'>
                        <div className='skills_line skills_line_top'></div>
                        <label className='web_txt'>Web 前端</label>
                        <div className='skills_line skills_line_bottom'></div>
                        <div className='skills_line_right' style={{width: '13vh', right: '-13vh'}}></div>
                    </div>
                    <div className='double_title_div other_div'>
                        <label className='double_txt'>其他</label>
                        <div className='skills_line_right'>
                            <label className='skills_label linux_txt'>Linux</label>
                        </div>
                    </div>


                    <div className='double_title_div css_div'>
                        <label className='double_txt'>HTML5 + CSS3</label>
                        <div className='skills_line_right'>
                            <label className='skills_label linux_txt'>Sass</label>
                        </div>
                    </div>
                    <div className='double_title_div js_div'>
                        <label className='double_txt'>JavaScript</label>
                        <div className='skills_line_right'>
                            <label className='skills_label react_txt'>React.js</label>
                        </div>
                    </div>


                    <div className='border_div other_border_div'>
                        <label className='skills_label git_txt'>git</label>
                        <label className='skills_label adobe_txt'>Adobe XD , Axure</label>
                    </div>
                    <div className='border_div js_border_div'>
                        <label className='skills_label rn_txt'>React Native</label>
                        <label className='skills_label vue_txt'>Vue.js </label>
                    </div>
                    <div className='border_div css_border_div'>
                        <label className='skills_label xiang_txt'>响应式布局</label>
                        <label className='skills_label antd_txt'>Antd , ElementUI , BootStrap </label>
                    </div>


                    <div className='rn_inform_div'>
                        <label className='skills_inform_txt'>
                            基于WebPack，主要开发公司项目安卓端项目，
                            研发、打包、link三方插件。研发手机直播APP，
                            视频APP
                        </label>
                    </div>
                    <div className='react_inform_div'>
                        <label className='skills_inform_txt'>
                            基于WebPack，能够从'0'配置React全家桶项目，
                            工作期间使用React研发产品后台管理系统，公司敏
                            捷项目管 理项目，本官网也是用React开发的
                        </label>
                    </div>
                    <div className='vue_inform_div'>
                        <label className='skills_inform_txt'>
                            基于WebPack，熟悉使用Vue.js全家桶，工作期间
                            主要负责研发项目产品官网及手机适配界面， 手机
                            微信分享页面
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

