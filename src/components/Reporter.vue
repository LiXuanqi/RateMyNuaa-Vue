<template>

  <div class="reporter">
    <div>举报原因：</div>

    <el-select 
      v-if="reportType==='Course'" 
      v-model="reportInfo.reportType" 
      clearable 
      placeholder="请选择">
        <el-option
        v-for="item in courseOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>

    <el-select 
      v-if="reportType==='Comment'" 
      v-model="reportInfo.reportType" 
      clearable 
      placeholder="请选择">
        <el-option
        v-for="item in commentOptions"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>

    <div>具体原因：</div>
    <el-input v-model="reportInfo.reportReason" placeholder="请输入内容"></el-input>
    <div>Email:</div>
    <el-input v-model="reportInfo.reporterEmail" placeholder="请输入内容"></el-input>
</div>

</template>

<script>
import store from '../store/index';
  export default {
    store,
    data() {
      return {
        courseOptions: [{
          value: '重复',
          label: '重复'
        }, {
          value: '信息有误',
          label: '信息有误'
        }],
        
        commentOptions: [{
          value: '人身攻击',
          label: '人身攻击'
        }, {
          value: '虚假信息',
          label: '虚假信息'
        }, {
          value: '偏激言论',
          label: '偏激言论'
        }],
        reportInfo: {
          reportType: '',
          reportReason: '',
          reporterEmail: '',
        },
      }
    },
    props:['reportType'],
    updated(){
      this.setReportInfo();
    },
    methods:{
      setReportInfo: function(){
        this.$store.commit('setReportInfo', this.reportInfo);
      },
    },
  }
</script>