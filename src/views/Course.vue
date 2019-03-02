
<template>
  <div>
    <Frame></Frame>
    <div class="page-container">
      <div id="page-title">
          <h1>RateMyNUAA</h1>
          <h2>全校400门课程任你挑</h2>
      </div>
      <div id="page-search" class="md-elevation-3">
          <Search v-on:setSearch="setSearch"></Search>
        <md-button @click="searchByCourse" class="md-raised md-primary">搜索</md-button>
      </div>
      <div id="page-courses">
        <h3>热门课程</h3>
        <md-tabs class="md-transparent" @change="onTabChanged">
          <md-tab id="tab-pages" md-label="必修课">
            <md-input-container>
              <label for="college">选择你所在的学院</label>
              <md-select name="college" id="college" v-model="targetCollege">
                <md-option value="all">All</md-option>
                <md-option value="能源与动力学院">能源与动力学院</md-option>
                <md-option value="外国语学院">外国语学院</md-option>
                <md-option value="计算机学院">计算机学院</md-option>
              </md-select>
            </md-input-container>
          </md-tab>
          <md-tab id="tab-home" md-label="选修课"/>
        </md-tabs>
       
        <ShowCourse
          v-bind:listData="filterData" 
        />
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<style scoped>
  .page-container {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    flex-direction: column;
  }
  .page-header {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  #page-title {
    margin-top: 104px;
    padding-left: 24px;
  }
  #page-search {
    width: 100%;
    height: 52px;
    border: 2px solid #EAEAEA;
    border-radius:7px;
    box-shadow:0 0 3px #BABABA; 
    margin-top: 50px;
    margin-left: 24px;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    padding-left: 7px;
  }
  #page-courses {
    width: 100%;
    margin-left: 24px;
  }
  h1 {
    font-size: 48px;
    font-weight: 700;
    color: #FF5A5F;
  }
  h2 {
    font-size: 48px;
    font-weight: 300;
    color: #484848;
  }
  h3 {
    font-size: 28px;
    font-weight: 70px;
    margin-bottom: 10px;
  }
/* 被选中菜单的颜色 */
  .md-theme-default.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-active, .md-theme-default.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header:focus {
      color: #008489;
      font-size: 15px;
      font-weight: 400;
  }
  .md-theme-default.md-tabs.md-transparent>.md-tabs-navigation .md-tab-indicator {
      background-color: #008489;
  }
  /* 未被选中菜单的颜色 */
  .md-theme-default.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header {
      color: #484848;
      font-size: 15px;
      font-weight: 400;
  }
  
  .search-api {
    width: 90%;
    display: inline-block;
    
  }
/* 插入的图标设置 */
  .icon {
    font-size: 40px;
  }

</style>

<script>
import resource from '../utils/resource';
import { getAllCourse } from '../utils/api';
export default {
  data(){
    return{
      targetCourse:"",
      courses: [],
      targetCollege: "all",
      targetType: 'compulsory'
    };
  },
  computed: {
    filterData: function() {
      return this.courses.filter((item) => {
        // filter by college
        if (this.targetCollege === "all" || this.targetType === "optional") {
          return true;
        } else {
          return item.college.name === this.targetCollege;
        }
      }).filter((item) => {
        // filter by type
        return item.type === this.targetType;
      });
    }
  },
  mounted() {
    this.getCourses();
  },
  methods:{
    getCourses() {
      getAllCourse().then((res) => {
        this.courses = res.data;
        console.log(this.courses);
      });
    },

    async searchByCourse(){
      const data = await resource.post("/api/?s=Course.GetCourseByName&ct_name=%27" + this.targetCourse + "%27", this.filter);
      this.courseData = data;
      console.log(this.courseData);
      this.$router.push({ name: 'result', params: { targetData: this.courseData }});
    },
    onTabChanged(index) {
      // 0: 必修课  1: 选修课
      if (index == 0) {
        this.targetType = "compulsory"
      } else if (index == 1) {
        this.targetType = "optional"
      }
    },
    setSearch: function(data){
          this.targetCourse=data;
      },
  },
}
</script>
