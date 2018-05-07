<template>
  <el-tooltip class="item" effect="light" :content="spinnerText" placement="top-start">
  <div class="mark-spinner">
    <div class="mark-spinner-circle">
      <md-spinner v-if="spinnerText==='平均成绩'" :md-size="60" :md-stroke="3.5" :md-progress="number" ></md-spinner>
      <md-spinner v-else :md-size="60" :md-stroke="3.5" :md-progress="number*20" ></md-spinner>
    </div> 
    <div class="mark-spinner-text">
      {{number}}
    </div>
    <!-- <md-tooltip md-direction="top">{{spinnerText}}</md-tooltip> -->
  </div>
  </el-tooltip>  
</template>
<style scoped>
  .mark-spinner {
    width: 60px;
    height: 65px;
    position: relative;
    display: inline-block;
    margin-top: 7px;
  }
  .mark-spinner-circle {
    position: absolute;
    left: 0;
    top: 0;
  }
  .mark-spinner-text {
    position: absolute;
    left: 0;
    top: 0;
    width: 60px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>


<script>
export default {
  props: ['number', 'spinnerText'],
}
</script>
