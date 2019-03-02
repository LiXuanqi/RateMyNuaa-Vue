<template>
<!-- 必修课部分 -->
<div>
  <CourseInfo 
    v-for="item in listData" 
    v-bind:key="item.id" 
    v-bind:name="item.name" 
    v-bind:teacher="item.teacher.name" 
    v-bind:school="item.college.name"
    v-bind:id="item.id"
    v-bind:difficulty="5"
    v-bind:attendance="5"
    v-bind:grade="5"
    v-bind:overallQuality="5"
    v-bind:courseNumber="item.course_number"
  />
</div>

</template>

<script>

export default {
  props:['listData'],
};
</script>