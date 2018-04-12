<template lang="html">
  <div class="work-wrap">
    <div class="work-left">
      <el-tabs type="border-card">
        <el-tab-pane label="新机会">
          <!-- 搜索 -->
          <el-input
            placeholder="昵称/手机/座机/QQ/微信/ID">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <!-- 显示隐藏筛选 -->
          <div class="toggle" @click="screenShow = !screenShow">
            <el-button type="text">{{screenShow ? '隐藏筛选': '显示筛选'}}</el-button>
            <i slot="prefix" style="color:#409EFF;" class="el-icon-arrow-down"></i>
          </div>
          <!-- 筛选弹框 -->
          <transition name="fade">
            <v-search v-on:_Find="_Find" v-on:_Esc="_Esc" v-show="screenShow"></v-search>
          </transition>
          <!-- tab筛选 -->
          <el-radio-group v-model="screentab.tabCurrent" class="screentab" @change="tabcurEv">
            <el-radio-button class="item" :label="item" v-for="item in screentab.list" :key="item" ></el-radio-button>
          </el-radio-group>
          <!-- 分割线 -->
          <v-line num="558745"></v-line>
          <!-- 学员列表 -->
          <v-studentlist></v-studentlist>
        </el-tab-pane>

        <el-tab-pane label="预约单">预约单</el-tab-pane>
        <el-tab-pane label="回访">
          <!-- 搜索 -->
          <el-input
            placeholder="昵称/手机/座机/QQ/微信/ID">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
          <!-- 显示隐藏筛选 -->
          <div class="toggle" @click="screenShow = !screenShow">
            <el-button type="text">{{screenShow ? '隐藏筛选': '显示筛选'}}</el-button>
            <i slot="prefix" style="color:#409EFF;" class="el-icon-arrow-down"></i>
          </div>
          <!-- 筛选弹框 -->
          <transition name="fade">
            <v-search v-on:_Find="_Find" v-on:_Esc="_Esc" v-show="screenShow"></v-search>
          </transition>
          <!-- tab筛选 -->
          <el-radio-group v-model="backscreentab.tabCurrent" class="screentab">
            <el-radio-button class="item" :label="item" v-for="item in backscreentab.list" :key="item" style="width:25%;"></el-radio-button>
          </el-radio-group>
          <!-- 分割线 -->
          <v-line num="888"></v-line>
          <v-studentlist></v-studentlist>
        </el-tab-pane>
        <el-tab-pane label="领取">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
    <div class="work-right">
      <!-- <p>点击，就会有学员详细信息哦</p> -->
      <!-- 动态度加载右边的内容 -->
      <transition name="move" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script type="es6">
import Vsearch from './left/search.vue'; // 搜索组件
import Vstudentlist from './left/studentList.vue'; // 学员列表组件
import Vline from './left/line.vue'; // 分割组件


export default {
  components:{
    'v-search': Vsearch,
    'v-studentlist': Vstudentlist,
    'v-line': Vline
  },
  created(){
    //console.log('发ajax请求吧');
    var ref = this;
     this.$axios.get('api')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  },
  data(){
    return {
      workList:1,
      screenShow:false,
      screentab:{
        list:['今天','更早'],
        tabCurrent:'今天'
      },
      backscreentab:{
        list:['今天','本周','跨期','即将过期'],
        tabCurrent:'今天'
      }
    }
  },
  methods:{
    // 查找数据
    _Find(data){
      console.log(data);
    },
    // 取消查找
    _Esc(data){
      console.log(data);
      this.screenShow=data;
    },
    tabcurEv(){
      console.log(this.screentab.tabCurrent);
    }
  }
}
</script>

<style lang="scss" >
  .work-wrap{
    margin: 10px;
    overflow: hidden;
    .work-left{
      width:362px;
      float: left;
      .screentab{
        width: 100%;
        // margin-top: 15px;
        .item{
          display: block;
          float: left;
          width: 50%;
          span{
            display: block;
            width: 100%;
            text-align: center;
          }
          .el-radio-button__inner{
            width: 100%;
            display: block;
            width: 100%;
            padding: 0;
            height: 35px;
            line-height: 35px;
          }
        }
      }
    }
    .work-right{
      float: left;
      width: calc(100% - 362px);
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
.work-wrap .el-tabs__content{
  overflow: inherit;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
