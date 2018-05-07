<template>
    <div>
        <Frame></Frame>
        <div class="page-container">
            <Cover
            v-for="item in tableData"
            v-bind:key="item.c_id"
            v-bind:type="item.ct_type"
            v-bind:name="item.ct_name"
            v-bind:teacher="item.c_teacher"
            v-bind:id="item.c_id"
            v-bind:difficulty="item.c_mean_difficulty"
            v-bind:attendance="item.c_mean_attendance"
            v-bind:grade="item.c_mean_grade"
            v-bind:overallQuality="item.c_mean_overallquality"
            v-on:rate="changeTargetPage"
            ></Cover> 

            <CommentCard
            v-if="targetPage==='comment'"
            v-for="item in commentData"
            v-bind:key="item.cc_id"
            v-bind:id="item.cc_id"
            v-bind:date="item.cc_date"
            v-bind:content="item.cc_content"
            v-bind:overallQuality="item.cc_overallquality"
            v-bind:difficulty="item.cc_difficulty"
            v-bind:attendance="item.cc_attendance"
            v-bind:grade="item.cc_grade"
            v-bind:testType="item.cc_testtype"
            v-bind:userId="item.cc_userid"
            ></CommentCard>   

    
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

export default {
data() {
    return {
    tableData: [],
    commentData: [],
    targetPage: 'comment',
    };
},
mounted() {
    this.showList();
    this.showComment();
},
updated() {
    // this.showComment();
},
methods: {
    async showList() {
    const data = await resource.post(
        "/api/?s=Course.GetCourseById&c_id=" + this.$route.params.id,
        this.filter
    );
    this.tableData = data;
    },
    async showComment() {
    const data = await resource.post(
        "/api/?s=Comment.GetComment&c_id=" + this.$route.params.id,
        this.filter
    );
    this.commentData = data;
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
