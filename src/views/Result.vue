<template>
<!-- 搜索的课程不存在时 -->
<div v-if="tableData.length === 0">
  <Frame></Frame>
  <div class="page-container">
    <h1>没有数据呀，要不你来加一个。</h1>
  </div>
  <Footer></Footer>
</div>
<!-- 展示搜索的结果 -->
<div v-else>
  <Frame></Frame>
  <div class="page-container">
    <Cover
      v-bind:showPageType="this.searchType"
      v-bind:subtitle="this.tableData[0].ct_number"
      v-bind:deptTitle="this.tableData[0].ct_school"
      v-bind:courseTitle="this.tableData[0].ct_name"
    ></Cover>
    <div>
      <h1>这里差一个填充物呀</h1>
    </div>
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
    ></CourseInfo>
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
</style>

<script>
export default {
  data(){
    return {
      tableData: [],
      searchType:'',
    };
  },
  mounted(){
    this.ready();
  },
  methods:{
    ready: function(){
      this.tableData = this.$route.params.targetData;
      var searchType= localStorage.getItem("searchType");
      this.searchType = searchType;
      console.log(this.tableData);
      console.log(this.searchType);
    }
  },
}
</script>
