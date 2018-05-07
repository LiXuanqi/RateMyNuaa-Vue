<template>
<!-- 必修课部分 -->
<div v-if="targetType==='必修课'">
  <!-- 选择学院部分 -->
    <md-input-container>
    <label for="movie">选择你所在的学院</label>
    <md-select name="movie" id="movie" v-model="filterSchool">
      <md-option value="allSchools" v-on:selected="filterBySchool">All</md-option>
      <md-option value="能源与动力学院" v-on:selected="filterBySchool">能源与动力学院</md-option>
      <md-option value="外国语学院" v-on:selected="filterBySchool">外国语学院</md-option>
      <md-option value="计算机学院" v-on:selected="filterBySchool">计算机学院</md-option>
    </md-select>
  </md-input-container>
  <!-- 如果没有选择筛选的学院，显示所有课程 -->
  <div v-if="filterSchool==='allSchools'">
    <!-- 显示部分 -->
    <CourseInfo 
      v-for="todo in tableData" 
      v-bind:key="todo.c_id" 
      v-bind:name="todo.ct_name" 
      v-bind:teacher="todo.c_teacher" 
      v-bind:school="todo.ct_school"
      v-bind:id="todo.c_id"
      v-bind:difficulty="todo.c_mean_difficulty"
      v-bind:attendance="todo.c_mean_attendance"
      v-bind:grade="todo.c_mean_grade"
      v-bind:overallQuality="todo.c_mean_overallquality"
      v-bind:courseNumber="todo.ct_number"
    ></CourseInfo>
  </div>
<!-- 筛选学院部分 -->
  <div else>
    <CourseInfo 
      v-for="todo in filterData" 
      v-bind:key="todo.c_id" 
      v-bind:name="todo.ct_name" 
      v-bind:teacher="todo.c_teacher" 
      v-bind:school="todo.ct_school"
      v-bind:id="todo.c_id"
      v-bind:difficulty="todo.c_mean_difficulty"
      v-bind:attendance="todo.c_mean_attendance"
      v-bind:grade="todo.c_mean_grade"
      v-bind:overallQuality="todo.c_mean_overallquality"
      v-bind:courseNumber="todo.ct_number"
    ></CourseInfo>
  </div>


</div>
<!-- 选修课部分 -->
<div v-else>
  <CourseInfo 
    v-for="todo in tableData" 
    v-bind:key="todo.c_id" 
    v-bind:name="todo.ct_name" 
    v-bind:teacher="todo.c_teacher" 
    v-bind:school="todo.ct_school"
    v-bind:id="todo.c_id"
    v-bind:difficulty="todo.c_mean_difficulty"
    v-bind:attendance="todo.c_mean_attendance"
    v-bind:grade="todo.c_mean_grade"
    v-bind:overallQuality="todo.c_mean_overallquality"
    v-bind:courseNumber="todo.ct_number"
  ></CourseInfo>
</div>
</div>

</template>

<script>
import resource from '../utils/resource';

export default {

  data() {
    return {
      tableData: [],
      filterSchool: 'allSchools',
      filterData: [],
    };
  },

  props:['targetType', 'targetSchool','searchType'],

  mounted() {
    this.showList(this.searchType);
  },


  methods: {
    async showList(searchType) {
      if (searchType === 'byType'){
        const data = await resource.post("/api/?s=Course.GetCourseByType&ct_type=%27" + this.targetType + "%27", this.filter);
        this.tableData = data;
        console.log(this.tableData);
      } else if (searchType === 'bySchool'){
        const data = await resource.post("/api/?s=Course.GetCourseBySchool&ct_school=%27" + this.targetSchool + "%27", this.filter);
        this.tableData = data;
      } else {
        console.log('错误的搜索类型');
      }
    },

    filterBySchool: function(){
      this.filterData=[];
      var i=0;
      for (var x in this.tableData){
        if (this.tableData[x].ct_school === this.filterSchool){
          this.filterData[i]=this.tableData[x];
          i = i+1;
        }
      }
    },
  }
};
</script>