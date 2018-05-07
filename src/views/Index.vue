
<template>
    <div>
        <Frame></Frame>
        <div id="background">
        <div id="main-container">
            <div id="home-header">
                <md-button href="/" id="index-logo" class="md-primary"><img height="100" width="100" src="../assets/logo.png"></md-button>
                <div class="page-container" v-if="targetPage === 'findCourse'">
                    <!-- 找课程界面 -->
                    <h1>找课程</h1>
                    <div>
                        <span id="search-titletext">SEARCH BY</span>
                        <md-radio class="md-primary" v-model="searchType" id="my-test1" name="my-test-group1" md-value="coursename">课程名称</md-radio>
                        <md-radio class="md-primary" v-model="searchType" id="my-test1" name="my-test-group1" md-value="deptname">学院</md-radio>   
                    </div>
                    <!-- 选择搜索方式 -->
                    <!--  根据课程名 -->
                    <div v-if="searchType === 'coursename'">
                        <h2>我想找</h2>
                        <div class="search-course-section">
                                <Search v-on:setSearch="setSearch"></Search>
                            </div>
                            <div class="buttons">
                            <md-button @click="searchByCourse" class="md-primary md-raised">查找</md-button>
                            <router-link :to="{name: 'course'}"><md-button class="md-primary md-raised">随便逛逛</md-button></router-link>
                    </div>
                    </div>
                    <!-- 根据学院 -->
                    <div v-else>
                        <h2>我来自</h2>
                        <div class="search-school-section">
                                <el-select v-model="targetSchool" placeholder="请选择">
                                    <el-option
                                    v-for="item in schoolOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                                    </el-option>
                                </el-select>
                            </div>
                            <div class="buttons">
                            <md-button @click="searchBySchool" class="md-primary md-raised">查找</md-button>
                            <router-link :to="{name: 'course'}"><md-button class="md-primary md-raised">随便逛逛</md-button></router-link>
                    </div>
                    </div>

                    <md-button @click="changeTargetPage('')" class="md-warn">cancel</md-button>
                </div>
                <div v-else-if="targetPage === 'findProf'">
                    <!-- 找教授界面 -->
                    <h1>敬请期待</h1>
                    <md-button @click="changeTargetPage('')" class="md-primary md-raised">cancel</md-button>
                </div>
                <div v-else>
                    <!-- 默认首页 -->
                    <h1>RateMyNUAA</h1>
                    <h2>遇见，最合适的。</h2>
                    <div class="buttons">
                        <md-button @click="changeTargetPage('findCourse')" class="md-raised">找课程</md-button>
                        <md-button @click="changeTargetPage('findProf')" class="md-raised">选导师</md-button>
                    </div>
                </div>
            </div>
            <div id="home-content">
                <div>
                    <div class="intro-incard intro-logo">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-kecheng"></use>
                        </svg>
                    </div>
                    <div class="intro-incard intro-title">
                        <span class="subtitle">课程</span>
                    </div>
                    <div class="intro-incard intro-content">
                        <p>拒绝低分，拒绝无聊，拒绝苛刻。</p>
                    </div>
            </div>
                <div class="intro-card">
                    <div class="intro-incard intro-logo">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-jiaoshipingfen"></use>
                        </svg>
                    </div>
                    <div class="intro-incard intro-title">
                        <span class="subtitle">导师</span>
                    </div>
                    <div class="intro-incard intro-content">
                        <p>远离坑导师，珍爱生命。</p>
                    </div>
                </div>
                <div class="intro-card">
                    <div class="intro-incard intro-logo">
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-pinglun"></use>
                        </svg>
                    </div>
                    <div class="intro-incard intro-title">
                        <span class="subtitle">匿名</span>
                    </div>
                    <div class="intro-incard intro-content">
                        <p>每一条评论不记录学号信息，真正的匿名评论。</p>
                    </div>
                </div>
            </div>  
            </div>   
        </div>
        <div class="content-intro">

        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
#background {
    background-color: #303030;
}
#main-container {
/* width: 100%; */
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
    background-color: #303030;
}

#home-header {
width: 100%;
height: 590px;
background-color: #303030;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
color: white;
}
.buttons {
display: flex;
justify-content: center;
}
h1 {
font-size: 50px;
font-weight: 500;
letter-spacing: normal;
text-align: center;
line-height: 20px;
}
h2 {
    font-size: 18px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 28.8px;
    text-align: center;
}

#home-content {
margin-top: 50px;
width: 100%;
height: 350px;
background-color: #303030;
display: flex;
color: white;
}
#home-content div {
width: 30%;
height: 300px;
margin-left: 1%;
}
#home-content .intro-card {
margin-left: 4%;
}
.intro-incard {
display: inline;
}
.intro-logo {
}
.intro-title {
font-size: 22px;
font-weight: 500;
}
.intro-content {
font-size: 15px;
line-height: 1.7em;
}

.icon {
font-size: 80px;
}
#search-titletext {
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 1.05px;
    text-align: center;
    margin-right: 20px;
}

.search-course-section {
    /* width: 100%;
    height: 48px;
    border: 1px solid #EAEAEA;
    background-color: #fff;
    border-radius: 4px; */
    margin-bottom: 20px;
    /* padding-top: 3px; */
}
.search-school-section {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
#search-input {
    width:100%;
    height: 100%;
    font-size: 15px;
    text-align: center;
}
.page-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.md-select {
    font-size: 15px;
    text-align: center;
    color: #909090;
}
.subtitle {
    font-size:22px;
    font-weight: 500;
    line-height: 26px;
    display: block;
}
.content-intro{
    width: 100%;
    height: 400px;
    background-color: white;
}
</style>

<script>
import resource from '../utils/resource';

export default {
data() {
    return {
    targetPage: "",
    searchType: "coursename",
    schoolOptions: [{
        value: '航空宇航学院',
        label: '航空宇航学院'
        }, {
        value: '能源与动力学院',
        label: '能源与动力学院'
        }, {
        value: '自动化学院',
        label: '自动化学院'
        }, {
        value: '电子信息工程学院',
        label: '电子信息工程学院'
        }, {
        value: '机电学院',
        label: '机电学院'
        }, {
        value: '材料科学与技术学院',
        label: '材料科学与技术学院'
        }, {
        value: '民航/飞行学院',
        label: '民航/飞行学院'
        }, {
        value: '理学院',
        label: '理学院'
        }, {
        value: '经济与管理学院',
        label: '经济与管理学院'
        }, {
        value: '人文与社会科学学院',
        label: '人文与社会科学学院'
        }, {
        value: '艺术学院',
        label: '艺术学院'
        }, {
        value: '外国语学院',
        label: '外国语学院'
        }, {
        value: '航天学院',
        label: '航天学院'
        }, {
        value: '计算机科学与技术学院',
        label: '计算机科学与技术学院'
        }, {
        value: '国际教育学院',
        label: '国际教育学院'
        }, {
        value: '继续教育学院',
        label: '继续教育学院'
        }],
    targetSchool: "能源与动力学院",
    schoolData: [],
    targetCourse: "",
    courseData: [],
    };
},

methods: {
    changeTargetPage: function (target){
        return this.targetPage = target;
    },
    async searchByCourse(){
        console.log('Hi Course')
        const data = await resource.post("/api/?s=Course.GetCourseByName&ct_name=%27" + this.targetCourse + "%27", this.filter);
        this.courseData = data;
        console.log(this.courseData);
        localStorage.setItem("searchType", this.searchType);
        this.$router.push({ name: 'result', params: { targetData: this.courseData}});
    },
    async searchBySchool(){
        console.log('Hi School');
        const data = await resource.post("/api/?s=Course.GetCourseBySchool&ct_school=%27" + this.targetSchool + "%27", this.filter);
        this.schoolData = data;
        this.$router.push({ name: 'result', params: { targetData: this.schoolData}});
        localStorage.setItem("searchType", this.searchType);
    },
    setSearch: function(data){
        this.targetCourse=data;
    },

}
};
</script>


