<template>
<div class="pic-container">
    <div class="pic-hidden-gradient"><div class="pic-hidden1"></div></div>
    <!-- 评论页的封面 -->
    <div v-if="showPageType==='deptname'" class="pic-text2">
    <span id="course-type">{{subtitle}}</span>
    <span id="course-name">{{deptTitle}}</span>
    <!-- 文字部分 -->
    <div class="pic-block-section">
    </div>
    </div>
    <div v-else-if="showPageType==='coursename'" class="pic-text2">
    <span id="course-type">{{subtitle}}</span>
    <span id="course-name">{{courseTitle}}</span>
    <!-- 文字部分 -->
    <div class="pic-block-section">
    </div>
    </div>

    <div v-else class="pic-text1">
    <span id="course-type">{{type}}</span>
    <span id="course-name">{{name}}</span>
    <span id="course-teacher">{{teacher}}</span>
    <!-- 文字部分 -->
    <div class="pic-block-section">
        <div class="pic-block">
        <span class="pic-block-text">难度</span>
        <span class="pic-block-number">{{difficulty}}</span>
        <!-- <md-spinner :md-size="150" :md-progress="50"></md-spinner> -->
        </div>
        <div class="pic-block">
        <span class="pic-block-text">点名情况</span>
        <span class="pic-block-number">{{attendance}}</span>
        <!-- <md-spinner :md-size="150" :md-progress="20"></md-spinner> -->
        </div>
        <div class="pic-block">
        <span class="pic-block-text">平均成绩</span>
        <span class="pic-block-number">{{grade}}</span>
        <!-- <md-spinner :md-size="150" :md-progress="70"></md-spinner> -->
        </div>
        <div class="pic-block">
        <span class="pic-block-text">总评</span>
        <span class="pic-block-number">{{overallQuality}}</span>
        <!-- <md-spinner :md-size="150" :md-progress="30"></md-spinner> -->
        </div>
    </div>
    <div class="pic-button">
        <md-button 
        v-on:click="backToParent" 
        :href="'#anchor-form'"
        class="md-raised md-primary"
        >评一评</md-button>
    </div>
    </div>
    <!-- 图片部分 -->
    <img src="../assets/nuaa1.jpg" alt="cover">
    <div class="action-items-container">
        <div class="action-item">          
            <md-button class="md-fab md-primary" @click="shareThisCourse">
                <md-icon md-iconset="fa fa-share-alt"></md-icon>
            </md-button>
        </div>
        <div class="action-item">
            <md-button class="md-fab md-primary">
                <md-icon md-iconset="fa fa-heart"></md-icon>
            </md-button>
        </div>
        <div class="action-item">
            <md-button class="md-fab md-primary" @click="reportThisCourse">
                <md-icon md-iconset="fa fa-flag"></md-icon>
            </md-button>
        </div>
    </div>
</div>
</template>

<style scoped>
.icon {
font-size: 25px;
height: 25px;
}
.pic-container{
position: relative;
height: 607.5px;
margin-bottom: 25px;
}
.pic-hidden-gradient {
content: "";
width: 100%;
height: 100%;
background-color: transparent;
background-image: linear-gradient(135deg,#2a9490,#7e57a9);
background-size: 100% 100%;
background-repeat: no-repeat;
opacity: .8;
position: absolute;
top: 0;
left: 0;
}
.pic-hidden1 {
content: "";
width: 100%;
height: 100%;
border: 1px solid #EAEAEA;
border-radius: 5px;
background-color: #000;
opacity: .3;
position: absolute;
top: 0;
left: 0;

}

.pic-text1 {
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
}
.pic-text2 {
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
display: flex;
flex-direction: column;
align-items: center;
padding-top: 100px;
}
.pic-block-section {
width: 100%;
display: flex;
}
.pic-block{
width:25%;
height: 200px;
/* background-color: green; */
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-top: 50px;
}
.pic-block-text {
color: #fff;
font-size: 18px;
font-weight: 300;
letter-spacing: 2px;
}
.pic-block-number {
color: #fff;
font-size: 28px;
font-weight: 600;
text-align: center;
line-height: 36px;
}
#page-title {
margin-top: 40px;
padding-left: 24px;
}
#course-type {
font-size: 13px;
font-weight: 600;
letter-spacing: 0.125rem;
color: #fff;
margin-top: 120px;
display: block;
}
#course-name {
font-size: 40px;
font-weight: 300;
/* color: #ff5a5f; */
color: #fff;
letter-spacing: 5px;
display: block;
margin-top: 30px;
}
#course-teacher {
font-size: 18px;
font-weight: 600;
color: #fff;
margin-top: 30px;
}
h2 {
font-size: 48px;
font-weight: 300;
color: #484848;
}
.pic-button {
z-index: 100;
}
.action-items-container {
z-index: 100;
position: absolute;
top: 560px;
left: 850px;
display: flex;

}
.action-item {
/* background-color: red; */
width: 50px;
height: 50px;
border-radius: 50%;
/* display: inline-block; */
margin-left: 10px;
padding-top: 12px;
padding-left: 12px;
color: #fff;
}
.action-item-red {
background-color: #d81b60;
}
.action-item-blue {
background-color: #2196f3;
}
.action-item-orange {
background-color: #f4511e;
}
</style>

<script>
import Reporter from './Reporter.vue'
import axios from 'axios';

export default {

props:['type', 'name', 'teacher','id', 'showPageType', 'difficulty', 'attendance', 'grade', 'overallQuality', 'subtitle', 'deptTitle', 'courseTitle'],

methods: {
    backToParent: function (){
        this.$emit('rate')
    },
    shareThisCourse: function(){
        console.log("分享这门课程到qq空间");

        // (function(){
        // var p = {
        // url:location.href,
        // showcount:'1',/*是否显示分享总数,显示：'1'，不显示：'0' */
        // desc:'',/*默认分享理由(可选)*/
        // summary:'',/*分享摘要(可选)*/
        // title:'',/*分享标题(可选)*/
        // site:'',/*分享来源 如：腾讯网(可选)*/
        // pics:'', /*分享图片的路径(可选)*/
        // style:'203',
        // width:98,
        // height:22
        // };
        // var s = [];
        // for(var i in p){
        // s.push(i + '=' + encodeURIComponent(p[i]||''));
        // }
        // document.write(['<a version="1.0" class="qzOpenerDiv" href="http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?',s.join('&'),'" target="_blank">分享</a>'].join(''));
        // })();

    },
    // reportThisCourse: function (){
    //     const h = this.$createElement;
    //     this.$msgbox({
    //       title: '举报',
    //       message:(
    //           <Reporter reportType={'Course'}></Reporter>
    //       ),
    //       showCancelButton: true,
    //       confirmButtonText: '确定',
    //       cancelButtonText: '取消',
    //       beforeClose: (action, instance, done) => {
    //         if (action === 'confirm') {
    //             var data = "courseId="+this.id
    //                         +"&reportType="+this.$store.state.reportInfo.reportType
    //                         +"&reportReason="+this.$store.state.reportInfo.reportReason
    //                         +"&reporterEmail="+this.$store.state.reportInfo.reporterEmail;
    //             console.log(data);
    //             axios.post('/api/?s=Report.ReportCourse', data)
    //                 .then(function (response) {
    //                     console.log(response);
    //                 })
    //                 .catch(function (error) {
    //                     console.log(error);
    //                 });
    //             done();
    //         } else {
    //           done();
    //         }
    //       }
    //     }).then(action => {
    //       this.$message({
    //         type: 'info',
    //         message: 'action: ' + action
    //       });
    //     });
    // },
},
}
</script>
