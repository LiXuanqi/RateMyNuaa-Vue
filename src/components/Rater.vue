<template>
  <div class="rater">
    <div class="number-text">{{numberText}}</div>
    <div id="slider-container">
      <div class="event">
        <div class="event-10-left" @click="changeRate(0)"></div>
        <div class="event-20" @click="changeRate(1)"></div>
        <div class="event-20" @click="changeRate(2)"></div>
        <div class="event-20" @click="changeRate(3)"></div>
        <div class="event-20" @click="changeRate(4)"></div>
        <div class="event-10-right" @click="changeRate(5)"></div>

      </div>
      <!-- 触发事件部分 -->
      <!-- 颜色部分 -->
      <div class="color" v-bind:style="colorWidth">
      <!-- 白色按钮 -->
      </div>
      <span class="ui-point" v-bind:style="pointPosition">
        <!-- 气泡 -->
        <div class="ui-bubble" v-bind:style="uiAngleColor">
          <span class="bubble-text" v-bind:style="bubbleTextColor">{{bubbleText}}</span>
        </div>
      </span>
    </div>
  </div>
</template>
<style scoped>
/* 背景灰色条 */
 .rater{
   display: flex;
 }
 .number-text{
   font-size: 32px;
   font-weight: 400;
   padding-right: 20px;
 }
  #slider-container {
    width: 311px;
    height: 20px;
    float: left;
    background-color: #ccc;
    border-radius: 100px;
    position: relative;
    padding-left: 2px;
    padding-top: 3px;
    padding-right: 17px;/* 按钮结束的位置调整 */
  }
  #slider-container::after {
    content: "";
    position: absolute;
    width: 1px;
    left: 0;
    height: 20px;
    top: 0px;
    box-shadow: 64px 0 0 #fff, 125px 0 0 #fff, 186px 0 0 #fff, 245px 0 0 #fff;
  }
  /* 带颜色的部分 */
  .color{
    width: 0%;
    background: linear-gradient(to right, #b51b58 0%, #ef2e72 100%);
    float: left;
    position: absolute;
    height: 20px;
    top: 0;
    left: 0;
    margin-left: 1px;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
  }
/* 移动的按钮 */
.ui-point {
  left: 0%;/* 按钮的位置 */
  width: 14px;
  height: 14px;
  background-color: #fff;
  border-radius: 100px;
  position: relative;
  display: block;
}
.ui-bubble {
  display: block;
  height: 40px;
  top: -46px;
  width: 151px;
  background-position: 45px 32px;
  background: url(/static/tail-red.png) 45px 32px no-repeat;
  right: -80px;
  position: absolute;
  padding: 5px;
  left: -88px;
  padding-bottom: 7px;
  z-index: 1;
  margin-left: 50px;
}
.bubble-text {
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  width: 100%;
  height: 100%;
  background-color: #b51b58;
  text-align: center;
  color: #fff;
  padding-top: 5px;
  display: block;
}
/* 触发事件 */
.event {
  
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.3;
    border-radius: 100px;
    display: flex;
    z-index: 3;
}
.event-10-left{
    
    width: 10%;
    height: 100%;
    opacity: 0.8;
    border-top-left-radius: 100px;
    border-bottom-left-radius: 100px;
}
.event-10-right{
    
    width: 10%;
    height: 100%;
    opacity: 0.8;
    border-top-right-radius: 100px;
    border-bottom-right-radius: 100px;
}
.event-20 {
    
    width: 20%;
    height: 100%;
    opacity: 0.8;
}
</style>
<script>
export default {
  data() {
    return {
      numberText: '0',
      bubbleText: '开始你的评价',
      colorWidth: {
        width: '0%',
        background: '',
        borderTopRightRadius:'',
        borderBottomRightRadius:'',
      },
      pointPosition: {
        left: '0%',
      },
      bubbleTextColor: {
        backgroundColor: '#c4c4be',
      },
      uiAngleColor: {
        background: 'url(/static/tail-gray.png) 45px 32px no-repeat',
      },
    };
  },

  props:['rateType'],

  updated() {
    this.backToParent();
  },
  methods: {
    backToParent: function (){
      this.$emit('rater', this.rateType,this.numberText)
    },

    changeRate: function (number){
      switch(number){
        case 0:
          this.numberText = '0';
          this.bubbleText = 'Rate from 1-5';
          this.colorWidth = {width: '0%'};
          this.pointPosition = {left: '0%'};
          this.bubbleTextColor = {backgroundColor: '#b51b58'};
          this.uiAngleColor = {background: 'url(/static/tail-red.png) 45px 32px no-repeat'};
          break;
        case 1:
          this.numberText = '1';
          this.bubbleText = "Profs get F's too";
          this.colorWidth = {width: '20%', background: 'linear-gradient(to right, #b51b58 0%, #ef2e72 100%)'};
          this.pointPosition = {left: '19%'};
          this.bubbleTextColor = {backgroundColor: '#b51b58'};
          this.uiAngleColor = {background: 'url(/static/tail-red.png) 45px 32px no-repeat'};
          break;
        case 2:
          this.numberText = '2';
          this.bubbleText = 'Mediocre at best';
          this.colorWidth = {width: '40%', background: 'linear-gradient(to right, rgb(255, 156, 0) 0%, rgb(255, 212, 43) 100%)'};
          this.pointPosition = {left: '40%'};
          this.bubbleTextColor = {backgroundColor: '#ffa809'};
          this.uiAngleColor = {background: 'url(/static/tail-orange.png) 45px 32px no-repeat'};
          break;
        case 3:
          this.numberText = '3';
          this.bubbleText = 'Fine';
          this.colorWidth = {width: '60%', background: 'linear-gradient(to right, rgb(255, 156, 0) 0%, rgb(255, 212, 43) 100%)'};
          this.pointPosition = {left: '61%'};
          this.bubbleTextColor = {backgroundColor: '#ffa809'};
          this.uiAngleColor = {background: 'url(/static/tail-orange.png) 45px 32px no-repeat'};
          break;
        case 4:
          this.numberText = '4';
          this.bubbleText = 'Solid choice';
          this.colorWidth = {width: '79%', background: 'linear-gradient(to right, rgb(132, 156, 27) 0%, rgb(200, 231, 68) 100%)'};
          this.pointPosition = {left: '81.5%'};
          this.bubbleTextColor = {backgroundColor: '#a2bd2d'};
          this.uiAngleColor = {background: 'url(/static/tail-green.png) 45px 32px no-repeat'};
          break;
        case 5:
          this.numberText = '5';
          this.bubbleText = 'A real gem';
          this.colorWidth = {width: '100%', background: 'linear-gradient(to right, rgb(132, 156, 27) 0%, rgb(200, 231, 68) 100%)',borderTopRightRadius: '100px', borderBottomRightRadius: '100px' };
          this.pointPosition = {left: '100%'};
          this.bubbleTextColor = {backgroundColor: '#a2bd2d'};
          this.uiAngleColor = {background: 'url(/static/tail-green.png) 45px 32px no-repeat'};
          break;
        default:
          return console.log('非法输入')
      }
    },
  },
}
</script>

