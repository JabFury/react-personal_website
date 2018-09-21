import React, {Component} from 'react'
import '../../css/skills/skills.scss'

export default class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        let isCurrentPage = (this.props.currentNum === 3);
        let contentData = this.props.contentData;
        let isChinese = this.props.isChinese;
        return (
            <div className='skills_bg'>
                <div className='bg'>
                    <label
                        className={isChinese === true ? 'skills_title' : 'en_title'}>{isChinese === true ? '我所掌握的技能' : " I'm Skilled in"}</label>
                </div>

                <div className='skills_div'>
                    <div className='web_div'>
                        <div
                            className={['skills_line', isCurrentPage === true ? 'skills_line_top' : null].join(' ')}></div>
                        <label className='web_txt'>Web {isChinese === true ? '前端' : 'Front'}</label>
                        <div
                            className={['skills_line', isCurrentPage === true ? 'skills_line_bottom' : null].join(' ')}></div>
                        <div
                            className={['web_line_right', isCurrentPage === true ? 'web_line_right_move' : null].join(' ')}></div>
                    </div>


                    <div className={['double_title_div', isCurrentPage === true ? 'other_div' : null].join(' ')}>
                        <label className='double_txt'>{isChinese === true ? '其他' : 'Other'}</label>
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
                            className={['skills_label', isCurrentPage === true ? (isChinese === true ? 'xiang_txt' : 'en_label') : null].join(' ')}>{isChinese === true ? '响应式布局' : 'Responsive layout'}</label>
                        <label className={['skills_label ', isCurrentPage === true ? 'antd_txt' : null].join(' ')}>Antd
                            , ElementUI , BootStrap </label>
                    </div>


                    <div className='rn_inform_div'>
                        <label
                            className={[isChinese === true ? 'skills_inform_txt' : 'en_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                            {contentData.rn}
                        </label>
                    </div>
                    <div className='react_inform_div'>
                        <label
                            className={[isChinese === true ? 'skills_inform_txt' : 'en_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                            {contentData.reactTitle}
                        </label>
                    </div>
                    <div className='vue_inform_div'>
                        <label
                            className={[isChinese === true ? 'skills_inform_txt' : 'en_inform_txt', isCurrentPage === true ? 'inform_txt_active' : null].join(' ')}>
                            {contentData.vue}
                        </label>
                    </div>
                </div>
            </div>
        )
    }
}

