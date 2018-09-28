module.exports = {
    introduceData: {
        title: '我是程嘉丰', intro_1: '一个22岁的前端攻城狮', intro_2: '篮球 美食 音乐', intro_3: '追求新鲜事物，享受美妙视觉感悟',
    },
    footPointData : {
        title: '我热爱旅游',
        foot_1 :'喜欢走遍大江南北，品尝各个地方不同风味的小吃，享受漫步在美丽至极的山间，让 它们可以能够被我的相机所记录下来的感觉。',
        foot_2 : '更加喜爱被碧海蓝天点缀着的沙滩，躺在上面感受着 太阳带来的温暖，浸泡着海水带来的清凉。晚上一道月光 延伸到下一天太阳升起的海平面的远方。',
        foot_3 : '享受草原的广阔，羡慕慵懒的牛儿羊儿吃饱就睡，睡醒 就吃的悠闲生活。骑在马背上，仿佛自己也是一名凶猛的 猎人，左牵黄右擎苍，千骑卷平冈。',
        foot_4 : '翘首站在橘子洲头，到中流击水，浪遏飞舟；独登故人 西辞的黄鹤楼，远眺那晴川历历的汉阳树，也同时感受着 芳草萋萋的鹦鹉洲。',
        foot_5 : '感受佛教文化，朝拜乐山大佛、灵山大佛。领悟青城山 上道教风俗，听闻莫高窟上释迦摩尼和九色鹿的奉献精神',
    },
    history : {
        pageData : [
            {iconUrl: '#icon-chusheng', type: 'shu_dan', year: '1996.2', txt: '感谢父母赐予生命，让我降临到这个世界'},
            {iconUrl: '#icon-xiaoxue', type: 'shu_shuang', year: '2002.9', txt: '步入校园，开始追寻探索求学之路的奇妙旅程'},
            {iconUrl: '#icon-biye', type: 'shu_dan', year: '2008.6', txt: '小学毕业，当了为期6年的组长，课代表'},
            {iconUrl: '#icon-pingpangqiu1', type: 'shu_shuang', year: '2009.8', txt: '参加甘肃省乒乓球省级比赛'},
            {iconUrl: '#icon-18', type: 'shu_dan', year: '2014.2', txt: '18岁，成为了一名要履行社会责任的青年'},
            {iconUrl: '#icon-daxue1', type: 'shu_shuang', year: '2014.9', txt: '步入大学校园，软件工程专业'},
            {iconUrl: '#icon-diannao', type: 'shu_dan', year: '2016.7', txt: '结合学校知识，开始钻研Web前端开发'},
            {iconUrl: '#icon-shixi', type: 'shu_shuang', year: '2017.9', txt: '实习，Web前端开发'},
            {iconUrl: '#icon-tubiao64', type: 'shu_dan', year: '2018.6', txt: 'Web前端开发工程师'},
            {iconUrl: '#icon-more', type: 'shu_shuang', txt: '未完待续'},
        ]
    },
    skills : {
        git:{title:'git',text :'能够有效的用于团队开发，项目管理。'},
        linux:{title:'linxu',text:'会使用一些linux系统的基础功能，用于日常编程'},
        xiang:{title:'响应式布局',text:'可以写出pc端和手机端兼容的样式。也可以根据不同设备选择进入的不同路由从而改变页面样式'},
        sass:{title:'Sass',text:'用Sass替代Css，会以变量形式储存样式。也可以利用WebPack进行配置到项目中'},
        antd:{title:'UI框架',text:'使用AntdUI框架进行React开发，ElementUI进行Vue开发，同样均可使用BootStrap进行开发'},
        axure:{title:'Adobe XD,Axure',text:'利用Adobe XD与UI美工进行产品交互，同时使用此两款app设计界面'},
        rn:{title:'React Native',text:'基于WebPack，主要开发公司项目安卓端项目， 研发、打包、link三方插件。研发手机直播APP， 视频APP'},
        react:{title:'React',text:'基于WebPack，能够从\'0\'配置React全家桶项目， 工作期间使用React研发产品后台管理系统，公司敏 捷项目管 理项目，本官网也是用React开发的'},
        vue:{title:'Vue',text:'基于WebPack，熟悉使用Vue.js全家桶，工作期间 主要负责研发项目产品官网及手机适配界面， 手机 微信分享页面\n'}
    },
    experience : {
        enData : [
            {belong:'Better',title:'后台管理系统',text:'从\'0\'开始搭建完整一套React全家桶的项目，其中配置了Antd的UI框架， 数据从后台通过调用的接口返回，使用了封装过的Fetch方法。其功能有 管理员的登录注册，用户信息，课程信息，直播间信息，修改学校、老师的 认证状态等，同时通过获取到的直播推流地址可以进行查看正在直播的直播间 信息，并根据其是否违规作出相应的禁言、强制关闭直播。通过socket.io 实时获取学生的弹幕信息，并且可以管理员发送单独的弹幕让老师看到。'},
            {belong:'Better',title:'在线直播教育',text:'用React Native写的手机在线观看直播的APP，整个项目分为ios端和Android端，本人从事的是Android端开发，自行编写切换城市的组件和分类列表等功能，以及其他传统功能。'},
            {belong:'MostAgile',title:'敏捷项目开发管理',text:'参与公司研发敏捷开发管理项目，为其加入三方图表组件Echarts，利用bootstrap编写一些model组件。适配页面组件大小及封装css样式。通过接口与后台进行数据交互。'},
        ]
    }
};
