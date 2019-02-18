<template>
<md-card>
    <div class="comment-info-section">
    <span class="comment-info-date">{{date}}</span>
    <div class="comment-info-picandtext">
        <svg class="icon" aria-hidden="true">
        <use v-if="this.overallQuality == '5.0'" xlink:href="#icon-happy"></use>
        <use v-if="this.overallQuality == '4.0'" xlink:href="#icon-happy-2"></use>
        <use v-if="this.overallQuality == '3.0'" xlink:href="#icon-happy-1"></use>
        <use v-if="this.overallQuality == '2.0'" xlink:href="#icon-sad"></use>
        <use v-if="this.overallQuality == '1.0'" xlink:href="#icon-angry-1"></use>
        </svg>
        <span class="comment-feel">{{overallQualityText}}</span>
    </div>
    <div class="comment-info-picandtext">
        <div class="comment-number-container">
        <span v-bind:style="overallQualityColor">{{overallQuality}}</span>
        </div>
        <span class="comment-feel">总评</span>
    </div>
    <div class="comment-info-picandtext">
        <div class="comment-number-container">
        <span v-bind:style="difficultyColor">{{difficulty}}</span>
        </div>
        <span class="comment-feel">难度</span>
    </div>
    </div>
    <div class="comment-number-section">
    <div>
        <span class="c-coursename">数据结构</span>
    </div>
    <div class="comment-number-items">
        <div>
        <span class="c-question">获得的成绩:</span><span class="c-response">{{grade}}</span>
        </div>
        <div>
        <span class="c-question">点名可能性:</span><span class="c-response">{{attendance}}</span>
        </div>
        <div>
        <span class="c-question">考核形式:</span><span class="c-response">{{testType}}</span>
        </div>
    </div>
    </div>
    <div class="comment-content-section">
    <div class="comment-text-container">
        <p class="comment-content-text">{{content}}</p>
    </div>
    <div class="comment-bottom-section">
        <!-- 认为有用 -->
        <!-- <a @click="thinkUseful">
            <div class="comment-evaluation-item">           
            <svg class="icon icon-evaluate" aria-hidden="true">
                <use xlink:href="#icon-jiantoushang"></use>
            </svg>
            <span>{{isUseful}}</span>            
            </div>
        </a> -->
        <!-- 认为没用 -->
        <!-- <div class="comment-evaluation-item">
            <a @click="thinkNotUseful"><svg class="icon icon-evaluate" aria-hidden="true">
            <use xlink:href="#icon-jiantouxia"></use>
            </svg></a>
        </div> -->

        <div class="comment-action-item">
        <a @click="reportThisComment">
            <svg class="icon icon-evaluate" aria-hidden="true">
            <use xlink:href="#icon-fenxiang"></use>
            </svg>
            <span>分享</span>
        </a>
        </div>
        <div class="comment-action-item">
        <a @click="reportThisComment">
            <svg class="icon icon-evaluate" aria-hidden="true">
            <use xlink:href="#icon-iconfont"></use>
            </svg>
            <span>举报</span>
            </a>
        </div>
        <!-- 删除评论 -->
        <div 
        class="comment-action-item"
        v-if="this.userId==this.$store.state.user.user_id"
        @click="deleteComment"
        >
        <a @click="reportThisComment">
            <svg class="icon icon-evaluate" aria-hidden="true">
            <use xlink:href="#icon-changyonggoupiaorenshanchu"></use>
            </svg>
            <span>删除</span>
        </a>
        </div>
    </div>

    
    </div>
</md-card>
</template>
<style scoped>
.icon {
    font-size: 50px;
}
.icon-evaluate {
    font-size: 20px;
    height: 20px;
}
.md-theme-default a:not(.md-button) {
    color: #8590a6;
}
/* 评论部分 */
.md-card {
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 10px;
}
.comment-info-section {
    width: 20%;
    background-color: #EAEAEA;
    padding-left: 25px;
}
.comment-number-section {
    width: 20%;
    background-color: #EAEAEA;
    padding-left: 15px;
    padding-top: 20px;
}
.comment-content-section {
    width: 60%;
    background-color: #EAEAEA;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
}
.comment-info-date {
    font-size: 18px;
    font-weight: 600;
    line-height: 60px;
}
.comment-info-picandtext {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 60px;
}
.comment-feel {
    font-size: 20px;
    font-weight: 400;
    margin-left: 10px;
}
.comment-number-container {
    height: 40px;
    width: 42px;
    /* color: #df3d5f; */
    color: #f7cc20;
    background-color: white;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
    display: flex;
    align-items: center;
}
.comment-number-items {
    margin-top: 30px;
}
.c-coursename {
    font-size: 12px;
    font-weight: 700;
}
.c-question {
    font-size: 12px;
    font-weight: 700;
}
.c-response {
    font-size: 12px;
    font-weight: 300;
}
.comment-content-text {
    font-size: 16px;
    font-weight: 400;
}
.comment-text-container {
    margin-top: 20px;
}
/* .comment-useful-container {
margin-top: 60px;
font-size: 12px;
font-weight: 400;
display: flex
} */
/* .comment-report-container {
font-size: 12px;
font-weight: 400;
color: #a6a6a2;
} */
.comment-bottom-section {
    display: flex;
    margin-bottom: 7px;
}
.comment-evaluation-item {
    padding-left: 5px;
    padding-right: 5px;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #ebf3fb;
    border-color: #ebf3fb;
    color: #2d84cc;
}
.comment-action-item {
    color: #8590a6;
    font-size: 14px;
    font-weight: 400;
    margin-left: 10px;
}
</style>

<script>
import axios from 'axios';
import resource from '../utils/resource';
import Reporter from './Reporter.vue'

export default {
data(){
    return {
    usefulClickStatus: 0,
    notUsefulClickStatus: 0,
    isUseful: 0,
    notUseful: 0,
    overallQualityColor: {},
    overallQualityText: '',
    difficultyColor: {},
    };
},
props:['id', 'date', 'content', 'overallQuality', 'difficulty', 'grade', 'attendance', 'testType', 'userId'],

mounted(){
    this.getUsefulNumber();
    this.setTextColor(this.overallQuality, "overallQuality");
    this.setTextColor(this.difficulty, "difficulty");
},

methods:{
    // reportThisComment: function() {
    // const h = this.$createElement;
    //     this.$msgbox({
    //     title: '举报',
    //     message:(
    //         <Reporter reportType={'Comment'}></Reporter>
    //     ),
    //     showCancelButton: true,
    //     confirmButtonText: '确定',
    //     cancelButtonText: '取消',
    //     beforeClose: (action, instance, done) => {
    //         if (action === 'confirm') {
    //         var data = "commentId="+this.id
    //                     +"&reportType="+this.$store.state.reportInfo.reportType
    //                     +"&reportReason="+this.$store.state.reportInfo.reportReason
    //                     +"&reporterEmail="+this.$store.state.reportInfo.reporterEmail;
    //         console.log(data);
    //         axios.post('/api/?s=Report.ReportComment', data)
    //             .then(function (response) {
    //                 console.log(response);
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    //         done();
    //         } else {
    //         done();
    //         }
    //     }
    //     }).then(action => {
    //     this.$message({
    //         type: 'info',
    //         message: 'action: ' + action
    //     });
    //     });
    // },
    deleteComment: function() {
    var data = "commentId="+this.id
                +"&userId="+this.$store.state.user.user_id;
    axios.post('/api/?s=Comment.DeleteComment', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    },

    // 获得认为该评论有用的数量
    // async getUsefulNumber() {
    // const usefulData = await resource.post(
    //     "/api/?s=Comment.GetUseful&type=useful&belongToCommentId=" + this.id,
    //     this.filter
    // );
    // const notUsefulData = await resource.post(
    //     "/api/?s=Comment.GetUseful&type=notuseful&belongToCommentId=" + this.id,
    //     this.filter
    // );
    // this.isUseful = usefulData.length;
    // this.notUseful = notUsefulData.length;
    // console.log(this.isUseful);
    // },
    // thinkUseful: function() {
    // console.log("useful");
    // if (this.usefulClickStatus == 1){
    //     this.isUseful = parseInt(this.isUseful) - 1;
    //     this.usefulClickStatus = 0;
    //     this.minusOne('useful');
    // } else{
    //     this.isUseful = parseInt(this.isUseful) + 1;
    //     this.usefulClickStatus = 1;
    //     this.addOne('useful');
    // }
    // },
    // thinkNotUseful: function() {
    // console.log("notuseful");
    // if (this.notUsefulClickStatus == 1){
    //     this.notUseful = parseInt(this.notUseful) - 1;
    //     this.notUsefulClickStatus = 0;
    //     this.minusOne('notuseful');
    // } else{
    //     this.notUseful = parseInt(this.notUseful) + 1;
    //     this.notUsefulClickStatus = 1;
    //     this.addOne('notuseful');
    // }
    // },
    // addOne: function(type){
    // var data = "type="+type
    //                 +"&userId="+this.$store.state.user.user_id
    //                 +"&belongToCommentId="+this.id;
    // console.log(data);
    //         axios.post('/api/?s=Comment.AddOne', data)
    //             .then(function (response) {
    //                 console.log(response);
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    // },
    // minusOne: function(type) {
    // var data = "type="+type
    //                 +"&userId="+this.$store.state.user.user_id
    //                 +"&belongToCommentId="+this.id;
    // console.log(data);
    //         axios.post('/api/?s=Comment.MinusOne', data)
    //             .then(function (response) {
    //                 console.log(response);
    //             })
    //             .catch(function (error) {
    //                 console.log(error);
    //             });
    // },
    setTextColor: function(number, type){
    console.log(number);
    if (type == "overallQuality"){
        switch(number){
        case "1.0":
            this.overallQualityColor = {color: '#df3d5f'};
            this.overallQualityText = 'BAD';
            break;
        case "2.0":
            this.overallQualityColor = {color: '#f7cc20'};
            this.overallQualityText = 'POOR';
            break;
        case "3.0":
            this.overallQualityColor = {color: '#f7cc20'};
            this.overallQualityText = 'NORMAL';
            break;
        case "4.0":
            this.overallQualityColor = {color: '#b4d235'};
            this.overallQualityText = 'GOOD';
            break;
        case "5.0":
            this.overallQualityColor = {color: '#b4d235'};
            this.overallQualityText = 'WONDERFUL';
            break;
        default:
            return console.log('非法输入');
        }
    }
    if (type == "difficulty"){
        switch(number){
        case "1.0":
            this.difficultyColor = {color: '#df3d5f'};
            break;
        case "2.0":
            this.difficultyColor = {color: '#f7cc20'};
            break;
        case "3.0":
            this.difficultyColor = {color: '#f7cc20'};
            break;
        case "4.0":
            this.difficultyColor = {color: '#b4d235'};
            break;
        case "5.0":
            this.difficultyColor = {color: '#b4d235'};
            break;
        default:
            return console.log('非法输入');
        }
    }
    
    },
},
}
</script>
