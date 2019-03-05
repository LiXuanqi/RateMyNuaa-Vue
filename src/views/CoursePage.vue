<template>
    <div>
        <Frame></Frame>
        <div class="page-container">
            <Cover
                v-bind:key="course.id"
                v-bind:type="course.type"
                v-bind:name="course.name"
                v-bind:teacher="course['teacher']['name']"
                v-bind:id="course.id"
                v-bind:difficulty="5"
                v-bind:attendance="6"
                v-bind:grade="80"
                v-bind:overallQuality="3"
                v-on:rate="changeTargetPage"
            />

            <CommentCard
                v-if="targetPage==='comment'"
                v-for="comment in comments"
                v-bind:key="comment.id"
                v-bind:id="comment.id"
                v-bind:date="'2017-08-06'"
                v-bind:content="comment.content"
                v-bind:overallQuality="comment.overall"
                v-bind:difficulty="comment.difficulty"
                v-bind:attendance="comment.attendance"
                v-bind:grade="comment.grade"
                v-bind:testType="comment.test_type"
                v-bind:userId="'userid'"
            />

    
            <Form 
                v-if="targetPage==='form'" 
                v-bind:belongtocourseid="this.$route.params.id"
                v-on:setTargetPage="setTargetPage"
            ></Form>
        </div>  
        <div class="helpful-review-banner">
                <div class="helpful-review-banner-text">
                    觉得这些评论有用吗？帮助一下学弟学妹们吧。
                </div>
            <md-button class="md-primary md-raised">评价这门课</md-button>
        </div> 
    </div>

</template>

<style scoped>
.icon {
    font-size: 50px;
}
.page-container {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
}
.helpful-review-banner{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.helpful-review-banner-text{
    font-size: 45px;
    font-weight: 400;
    line-height: 45px;
    text-align: center;
}
</style>
<script>
import resource from "../utils/resource";
import { getCourse, getCommentsByCourseId } from '../utils/api';
export default {
data() {
    return {
        course: {},
        comments: [],
        targetPage: 'comment',
    };
},
mounted() {
    this.getCourse();
    this.getComments();
},
updated() {
    
},
methods: {
    getCourse() {
        getCourse(this.$route.params.id)
            .then((res) => {
                this.course = res.data;
                console.log(this.course);
            });
    },
    getComments() {
        getCommentsByCourseId(this.$route.params.id)
            .then((res) => {
                this.comments = res.data;
                console.log(this.comments);
            });
    },
    changeTargetPage: function (){
        this.targetPage = 'form';
    },
    setTargetPage: function(page){
        this.targetPage = page;
    },
}
};
</script>
