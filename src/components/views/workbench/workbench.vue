<template lang="html">
  <div class="work-wrap">
    <div class="work-left">
      <el-tabs type="border-card">
        <el-tab-pane label="新机会">
          <v-search></v-search>
          <v-screentab></v-screentab>
          <v-line></v-line>
          <p style="background:#F4F4F4; height:2px; width:400px; margin-left:-50px;"></p>
          <v-studentlist></v-studentlist>
        </el-tab-pane>
        <el-tab-pane label="预约单">消息中心</el-tab-pane>
        <el-tab-pane label="回访">角色管理</el-tab-pane>
        <el-tab-pane label="领取">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div class="work-right">
      <v-contacts :mylist="workList" v-on:mylist=" val => workList = val"></v-contacts>
      <v-studentInfo></v-studentInfo>
      <v-followup></v-followup>
      <v-eidtstudent v-show="eidtStudent"></v-eidtstudent>
    </div>
  </div>
</template>

<script type="es6">
import Vsearch from './left/search.vue'; // 搜索组件
import Vscreentab from './left/screenTab.vue'; // 筛选tab组件
import Vstudentlist from './left/studentList.vue'; // 学员列表组件
import Vline from './left/line.vue'; // 分割组件
import Vcontacts from './right/contacts.vue';  // 联系学员组件
import Vfollowup from './right/followUp.vue'; // 跟进信息组件
import VstudentInfo from './right/studentInfo.vue'; // 学员信息组件
import VeidtStudent from './right/eidtStudent.vue'; // 编辑学员信息组件

export default {
  components:{
    'v-search': Vsearch,
    'v-screentab': Vscreentab,
    'v-studentlist': Vstudentlist,
    'v-line': Vline,
    'v-contacts': Vcontacts,
    'v-studentInfo': VstudentInfo,
    'v-followup': Vfollowup,
    'v-eidtstudent': VeidtStudent
  },
  created(){
    console.log('发ajax请求吧');
  },
  data(){
    return {
      workList:1,
      eidtStudent:false
    }
  },
  methods:{
    // mylist(val){
    //   this.list=val;
    // }
  }
}
</script>

<style lang="scss" scoped>
  .work-wrap{
    margin: 10px;
    overflow: hidden;
    .work-left{
      width:362px;
      float: left;
    }
    .work-right{
      float: left;
    }


  }
</style>

<style>
.work-wrap .el-tabs--border-card{
  box-shadow: none;
}
.work-wrap .el-tabs--border-card>.el-tabs__header{
  border: none;
}
.work-wrap .el-tabs--border-card>.el-tabs__header .el-tabs__item.is-active{
  border-top: 4px solid #409EFF;
}
.el-tabs--border-card>.el-tabs__header .el-tabs__item{
  border-top: 4px solid #f5f7fa;
}
.el-tabs__item{
  padding: 0px 30px;
}
</style>
