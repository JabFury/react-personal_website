import React, {Component} from 'react'
import '../../css/skills/skills.scss'

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let isCurrentPage = (this.props.currentNum === 3);
        return (
            <div className='skills_bg'>
                <div className='bg'>
                    <label className='skills_title'>我所掌握的技能</label>
                </div>

                <div className='skills_div'>
                    <div className='web_div'>
                        <div
                            className={['skills_line', isCurrentPage === true ? 'skills_line_top' : null].join(' ')}></div>
                        <label className='web_txt'>Web 前端</label>
                        <div
                            className={['skills_line', isCurrentPage === true ? 'skills_line_bottom' : null].join(' ')}></div>
                        <div
                            className={['web_line_right', isCurrentPage === true ? 'web_line_right_move' : null].join(' ')}></div>
                    </div>


                    <div className={['double_title_div', isCurrentPage === true ? 'other_div' : null].join(' ')}>
                        <label className='double_txt'>其他</label>
                    </div>
                    <div
                        className={['skills_line_right', isCurrentPage === true ? 'linux_line_active' : null].join(' ')}>
                        <label
                            className={['skills_label', isCurrentPage === true ? 'linux_txt' : null].join(' ')}>Linux</label>
                    </div>


                    <div className={['double_title_div', isCurrentPage === true ? 'css_div' : null].join(' ')}>
                        <label className='double_txt'>HTML5 + CSS3</label>
                    </div>
                    <div
                        className={['skills_line_right', isCurrentPage === true ? 'sass_line_active' : null].join(' ')}>
                        <label
                            className={['skills_label', isCurrentPage === true ? 'linux_txt' : null].join(' ')}>Sass</label>
                    </div>


                    <div className={['double_title_div', isCurrentPage === true ? 'js_div' : null].join(' ')}>
                        <label className='double_txt'>JavaScript</label>
                    </div>
                    <div
                        className={['skills_line_right', isCurrentPage === true ? 'react_line_active' : null].join(' ')}>
                        <label
                            className={['skills_label', isCurrentPage === true ? 'react_txt' : null].join(' ')}>React.js</label>
                    </div>


                    <div className={['border_div ', isCurrentPage === true ? 'other_border_div' : null].join(' ')}>
                        <label
                            className={['skills_label ', isCurrentPage === true ? 'git_txt' : null].join(' ')}>git</label>
                        <label className={['skills_label ', isCurrentPage === true ? 'adobe_txt' : null].join(' ')}>Adobe
                            XD , Axure</label>
                    </div>
                    <div className={['border_div ', isCurrentPage === true ? 'js_border_div' : null].join(' ')}>
                        <label className={['skills_label ', isCurrentPage === true ? 'rn_txt' : null].join(' ')}>React
                            Native</label>
                        <label
                            className={['skills_label ', isCurrentPage === true ? 'vue_txt' : null].join(' ')}>Vue.js </label>
                    </div>
                    <div className={['border_div ', isCurrentPage === true ? 'css_border_div' : null].join(' ')}>
                        <label
                            className={['skills_label ', isCurrentPage === true ? 'xiang_txt' : null].join(' ')}>响应式布局</label>
                        <label className={['skills_label ', isCurrentPage === true ? 'antd_txt' : null].join(' ')}>Antd
                            , ElementUI , BootStrap </label>
                    </div>


                    <div className='rn_inform_div'>
                        <label
                            className={['skills_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                            基于WebPack，主要开发公司项目安卓端项目，
                            研发、打包、link三方插件。研发手机直播APP，
                            视频APP
                        </label>
                    </div>
                    <div className='react_inform_div'>
                        <label
                            className={['skills_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                            基于WebPack，能够从'0'配置React全家桶项目，
                            工作期间使用React研发产品后台管理系统，公司敏
                            捷项目管 理项目，本官网也是用React开发的
                        </label>
                    </div>
                    <div className='vue_inform_div'>
                        <label
                            className={['skills_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
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

