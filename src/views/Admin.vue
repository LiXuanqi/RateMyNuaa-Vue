<template>
  <div>
    <Frame></Frame> 
    <div class="page-container">
      <h1>举报列表</h1>
      <table>
        <tr v-for="item in tableData" :key="item.r_id">
          <td>{{item.cc_content}}</td>
          <td>{{item.cc_id}}</td>
          <td><md-button @click="deleteThisComment" class="md-primary md-raised">删除这条评论</md-button></td>
          <td v-if="item.r_visible==1">未处理</td>
          <td v-else>已删除</td>          
        </tr>
      </table>
    </div>
  </div>
</template>
<style scoped>
  .page-container {
    width: 1080px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 64px;
    display: flex;
    flex-direction: column;
  }
  td{
    border: 1px solid black;
  }
</style>
<script>
import resource from '../utils/resource';

export default {
  data(){
    return{
      tableData: [],
    };
  },
  mounted(){
    this.showAllReports();
  },
  methods: {
    async showAllReports(){
      const data = await resource.post(
      "/api/?s=Report.ShowAllReports",
      this.filter);
      this.tableData = data;
      console.log(this.tableData);
    },
    deleteThisComment: function(){
      console.log('删除评论，并且改变r_visible的状态');
    },
  },
}
</script>
