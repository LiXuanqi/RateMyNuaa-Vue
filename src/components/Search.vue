<template>
<div class="search-api">
  <!-- <form novalidate @submit.stop.prevent="submit">
    <md-input-container>
      <label>输入你想找的课</label>
      <md-autocomplete v-model="targetCourse"
                          :list="tableData"
                          print-attribute="ct_name"
                          :filter-list="courseFilter"
                          :min-chars="0"
                          :max-height="6"
                          @selected="colorCallback"
                          :debounce="500">
                          
      </md-autocomplete>
    </md-input-container>
  </form> -->
   <el-autocomplete
      class="inline-input"
      v-model="targetCourse"
      valueKey="ct_name"
      :fetch-suggestions="querySearch"
      placeholder="请输入内容"
      @select="handleSelect"
    ></el-autocomplete>
</div>
</template>

<style scoped>
.inline-input {
  width:100%;
}
</style>


<script>
import resource from "../utils/resource";
export default {
    data() {
      return {
        tableData: [],
        targetCourse: '',
      };
    },
    methods: {
      querySearch(queryString, cb) {
        var tableData = this.tableData;
        var results = queryString ? tableData.filter(this.createFilter(queryString)) : tableData;
        // 调用 callback 返回建议列表的数据
        cb(results);
      },
      createFilter(queryString) {
        return (restaurant) => {
          return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
 
      async showList() {
        const data = await resource.post(
          "/api/?s=Course.GetCourseById",
          this.filter
        );
        this.tableData = data;
        console.log(this.tableData);
      },

      handleSelect(item) {
        console.log(item);
        console.log(this.targetCourse);
        this.$emit('setSearch', this.targetCourse);
      }
    },
    mounted() {
      this.showList();
    },
  }

//     // 字符匹配
//     courseFilter: function(list, query) {
//       var arr = new Array();
//       for(var i = 0; i < list.length; i++) {
//         if(list[i].ct_name.indexOf(query) !== -1)
//           arr.push(list[i]);
//         if(arr.length > 5)
//           break;
//       }
//       return arr;

//     },

</script>
