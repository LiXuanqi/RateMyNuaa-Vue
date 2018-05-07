<template>
  <!-- 评分部分 -->
  <md-stepper
    @completed="submitForm"
    :id="'anchor-form'"
    >
    <md-step md-label="注意事项">
        <div class="comment-notice-container">
        <div class="notice-title">
            <h1>Rating Do's and Don'ts</h1>
        </div>
        <div class="notice-contents">
            <div class="notice-content-container">
                <span class="notice-content-subtitle">Do</span>
                <p class="notice-content">Double check your comments before posting. Course codes must be accurate, and it doesn’t hurt to check grammar.</p>
            </div>
            <div class="notice-content-container">
                <span class="notice-content-subtitle">Do</span>
                <p class="notice-content">Discuss the professor’s professional abilities including teaching style and ability to convey the material clearly.</p>
            </div>
            <div class="notice-content-container">
                <span class="notice-content-subtitle">Do</span>
                <p class="notice-content">Use profanity, name-calling, derogatory terms, definitive language, (e.g., "always","never","etc."). And, don’t claim that the professor shows bias or favoritism for or against students.</p>
            </div>
        </div>
    </div>
    </md-step>
    <md-step md-label="综合评价">
        <h1>It's your turn to grade Professor Jairo Garcia.</h1>
        <div class="form-item">
            <div class="lable">
                <div class="counter-text">1</div>
                <div class="question-text">整体评价</div>
            </div>
            <Rater v-bind:rateType="'overallQuality'" v-on:rater="setMark"></Rater>
        </div>
        <div class="form-item">
            <div class="lable">
                <div class="counter-text">2</div>
                <div class="question-text">难度</div>
            </div>
            <Rater v-bind:rateType="'difficulty'" v-on:rater="setMark"></Rater>
        </div>
        <div class="form-item">
            <div class="lable">
                <div class="counter-text">3</div>
                <div class="question-text">作业</div>
            </div>
            <Rater v-bind:rateType="'homework'" v-on:rater="setMark"></Rater>
        </div>
        <div class="form-item">
            <div class="lable">
                <div class="counter-text">4</div>
                <div class="question-text">点名概率</div>
            </div>
            <Rater v-bind:rateType="'attendance'" v-on:rater="setMark"></Rater>
        </div>
        <div class="form-item">
            <div class="lable">
                <div class="counter-text">5</div>
                <div class="question-text">考核形式</div>
            </div>
            <md-checkbox id="开卷" md-value="开卷" v-model="testType" class="md-primary">开卷</md-checkbox>
            <md-checkbox  id="闭卷" md-value="闭卷" v-model="testType" class="md-primary">闭卷</md-checkbox>
            <md-checkbox id="半开卷" md-value="半开卷" v-model="testType" class="md-primary">半开卷</md-checkbox>
        </div>
    </md-step>
    <md-step md-label="具体评价">
        <div class="form-item-comment">
            <div class="lable-comment">
                <div class="counter-text">5</div>
                <div class="question-text">具体评价</div>
            </div>
            <textarea v-model="content" name="" id=""></textarea>
        </div>
    </md-step>
    <md-step md-label="更多信息" >
        <h1>Tell us more</h1>
        <div class="form-item">
            <div class="lable">
                <div class="counter-text">6</div>
                <div class="question-text">获得成绩</div>
            </div>
              <md-input-container>
                <label>所获成绩</label>
                <md-input v-model="grade" placeholder="成绩"></md-input>
              </md-input-container>
        </div>
    </md-step>
  </md-stepper>


</template>

<style scoped>
.notice-title{
    border-bottom: 3px solid rgb(166, 166, 162);
}
h1 {
    font-size: 30px;
    font-weight: 600;
    line-height: 35px;
    color: #00adee;
}
.notice-contents {
 display: flex;
 flex-direction: row;
}
.notice-content-container {
    width: 30%;
    height: 100px;
    margin-left: 50px;
    margin-top: 20px;
}
.notice-content-subtitle {
    font-size: 30px;
    font-weight: 500;
    color: #a6a6a2;
    line-height: 35px;
}
.notice-content {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
    color: #a6a6a2;
}
/* 评分部分 */
.form-item{
    display: flex;
    margin-top: 50px;
    margin-bottom: 20px;
}
.counter-text {
    font-size: 32px;
    font-weight: 400;
    float: left;
    color: #a6a6a2;
    line-height: 32px;
}
.question-text {
    font-size: 17px;
    font-weight: 500;
    line-height: 27px;
    letter-spacing: 1.68px;
    opacity: 0.6;
    color: black;
    float: left;
    margin-left: 10px;
}
.lable {
    width: 150px;
    content: '';
}
.lable-comment {
    width: 400px;
    content: '';
}
.form-item-comment {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    margin-bottom: 20px;
}
textarea {
    font-size: 15px;
    line-height: 21px;
    width: 600px;
    height: 200px;
    margin-top: 15px;
    margin-left: 30px;
    padding-top: 15px;
    padding-left: 20px;
}
</style>

<script>
// import resource from '../utils/resource';
import axios from 'axios';

export default {
    data(){
        return{
            content:'',
            overallQuality: '',
            difficulty: '',
            homework: '',
            attendance: '',
            testType: [],
            grade: '',
            date: '',
        };
    },
    props: ['belongtocourseid'],

    computed: {
        userInfo(){
            return this.$store.state.user;
        }
    },

    methods:{
        setMark: function (type, val) {
            if(type == 'overallQuality'){
               this.overallQuality = val; 
            }
            if(type == 'difficulty'){
               this.difficulty = val; 
            }
            if(type == 'homework'){
               this.homework = val; 
            }
            if(type == 'attendance'){
               this.attendance = val; 
            }
        },

        submitForm: function (){

            var data = "content="+this.content
                    +"&overallquality="+this.overallQuality
                    +"&difficulty="+this.difficulty
                    +"&grade="+this.grade
                    +"&attendance="+this.attendance
                    +"&belongtocourseid="+this.belongtocourseid
                    +"&date="+this.date
                    +"&testType="+this.testType
                    +"&userId="+0
                    +"&visible=1";

            axios.post('/api/?s=Comment.SubmitComment', data)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.$emit('setTargetPage', 'comment')
            this.$router.push(this.belongtocourseid);        
        },
    },
}
</script>