<template>
    <div class="table-container">
      <md-whiteframe md-elavation="2">
        <div class="table-card">
          <!-- 加入波纹效果 -->
          <md-ink-ripple />
          <!-- 左边的信息栏 -->
          <div class="table-info">
            <span class="table-card-title">{{name}}</span>
            <span class="table-card-teacher">{{teacher}}</span>
            <span>,</span>
            <span class="table-card-teacher">{{school}}</span>
            <span>,</span>
            <span class="table-card-teacher">{{courseNumber}}</span>
          </div>
          <!-- 右边整个评分部分 -->
          <!-- 中间的进度环 -->
          <div class="table-mark">
            <Spinner
              v-bind:number="difficulty"
              v-bind:spinnerText="'难度'"
            ></Spinner>
            <Spinner
              v-bind:number="attendance"
              v-bind:spinnerText="'点名情况'"
            ></Spinner>
            <Spinner 
              v-bind:number="grade"
              v-bind:spinnerText="'平均成绩'"
            ></Spinner>
          </div>
          <!-- 总评分部分 -->
          <div class="table-overall">
            <a @click="linkTo">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-e636"></use>
              </svg>   
            </a>


            <span class="table-overall-number">{{overallQuality}}</span>   
          </div>
        </div>
      </md-whiteframe>
    </div>
</template>

<style scoped>
.icon{
  font-size: 40px;
  height: 40px;
}
 .table-container {
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
  }
  .table-card {
    width: 100%;
    height: 70px;
    /* background-color: pink; */
    margin-bottom: 10px;
    /* border: 2px solid red; */
    display: flex;
    align-items: center;
    
  }
  .table-info {
    margin-left: 24px;
    width: 65%;
  }
  .table-card-title {
    font-size: 19px;
    font-weight: 700;
    display: block;
    margin-bottom: 10px;
  }
  .table-card-teacher {
    
    font-size: 15px;
    font-weight: 700;
  }
  .table-mark {
    width: 20%;
  }
  .table-overall {
    width: 100px;
    height: 60px;
    margin-left: 20px;
    font-size: 30px;
    font-weight: 300;
    display: flex;
    align-items: center;
  }
  .table-overall-number {
    display: inline-block;
    margin-left: 10px;
  }
</style>
<script>
export default {
  props: ['name', 'teacher', 'school', 'id', 'difficulty', 'attendance', 'grade', 'overallQuality', 'courseNumber'],
  methods:{
    linkTo: function() {
      const id = this.id;
      this.$router.push({ path: `/course/${id}` })
    },
  },
}
</script>
