<template lang="html">
  <div class='wrapper'>
    <current title="坐席管理" :showT="true" text="保存" v-on:addevent="addevent"></current>
    <el-tabs class="box" :tab-position="tabPosition" >
     <el-tab-pane label="首页">
       <!-- <template>
         <el-checkbox-group v-model="checkList">
           <el-checkbox label="复选框aa">1111</el-checkbox>
           <el-checkbox label="复选框 Bss">22</el-checkbox>
           <el-checkbox label="复选框 C">333</el-checkbox>
         </el-checkbox-group>
       </template> -->
        <div v-for="(item,index) in checkList" class="checkBox">
          <el-checkbox class="checkAll" :indeterminate="item.isIndeterminate" v-model="item.checkAll" @change="handleCheckAllChange($event,index)">全选</el-checkbox>
          <el-checkbox-group v-model="item.checkedCities" @change="handleCheckedCitiesChange($event,index)">
            <el-checkbox v-for="city in item.cities" :label="city" :key="city">{{city}}</el-checkbox>
          </el-checkbox-group>
          <!-- {{item.checkedCities}} -->
        </div>
     </el-tab-pane>
     <el-tab-pane label="工作台">工作台</el-tab-pane>
     <el-tab-pane label="公海库">公海库</el-tab-pane>
     <el-tab-pane label="机会管理">机会管理</el-tab-pane>
     <el-tab-pane label="系统管理">系统管理</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="es6">
import current from './../../common/current_positionD.vue';
export default {
  components: {
    current
  },
  data(){
    return {
      tabPosition: 'left',
      checkList:[
        {
          checkAll: false,
          checkedCities: ['坐席管理1',],
          cities: ['坐席管理1', '坐席管理2', '坐席管理3', '坐席管理4'],
          isIndeterminate: true
        },
        {
          checkAll: false,
          checkedCities: ['坐席管理1',],
          cities: ['坐席管理5', '坐席管理6', '坐席管理7', '坐席管理8'],
          isIndeterminate: true
        }
      ]
    }
  },
  methods:{
    handleCheckAllChange(val,index) { // 全选
      let obj = this.checkList[index];
      obj.checkedCities = val ? obj.cities : [];
      obj.isIndeterminate = false;
    },
    handleCheckedCitiesChange(value,index) { // 单选
      let obj = this.checkList[index];
      let checkedCount = value.length;
      obj.checkAll = checkedCount === obj.cities.length;
      obj.isIndeterminate = checkedCount > 0 && checkedCount < obj.cities.length;
    },
    // 保存
    addevent(){
      console.log(111);
    }
  }
}
</script>

<style scoped lang="scss" scoped>
  .wrapper{
    width: 100%;
    background: #fff;
    margin:10px;
    padding:10px;
    min-height: 500px;
    .box{
      margin-top: 18px;
      .checkBox{
        padding-bottom: 25px;
         padding-top:10px;
         margin-left: 30px;
        border-bottom: 1px solid #ccc;
        +.box{
          // padding-top: 20px;
        }
        .checkAll{
          margin-bottom: 8px;
        }
      }
    }
    .sider{
      float: left;
    }
  }
</style>
