<template lang="html">
  <div class="work-search">
    <!-- 搜索组件 -->
    <el-input
      placeholder="昵称/手机/座机/QQ/微信/ID">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <div class="toggle" @click="screenShow = !screenShow">
      <el-button type="text">{{screenShow ? '隐藏筛选': '显示筛选'}}</el-button>
      <i slot="prefix" style="color:#409EFF;" class="el-icon-arrow-down"></i>
    </div>
    <transition name="slide-fade">
      <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" size="mini" :inline="true" class="demo-ruleForm" v-show="screenShow">
        <el-form-item class="item" label="分配时间：">
          <el-date-picker v-model="ruleForm2.allotTime" type="daterange" range-separator="至" size="small" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item class="item" label="最后跟进：">
          <el-date-picker v-model="ruleForm2.endTime" type="daterange" range-separator="至" size="small" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item class="item" label="回访计划：">
          <el-date-picker v-model="ruleForm2.backPlan" type="daterange" range-separator="至" size="small" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </el-form-item>
        <el-form-item class="item" label="意向项目：">
          <el-select v-model="ruleForm2.orderProject" placeholder="请选择" style="width:248px;">
            <el-option label="学历1980" value="shanghai"></el-option>
            <el-option label="学历2980" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="item" label="意 向 度：">
          <el-radio-group v-model="ruleForm2.orderD">
            <el-radio-button label="强"></el-radio-button>
            <el-radio-button label="中"></el-radio-button>
            <el-radio-button label="弱"></el-radio-button>
            <el-radio-button label="无"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="item" label="预约记录：">
          <el-radio-group v-model="ruleForm2.bespoke">
            <el-radio-button label="有"></el-radio-button>
            <el-radio-button label="无"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="item" label="订单记录：">
          <el-radio-group v-model="ruleForm2.goods">
            <el-radio-button label="有"></el-radio-button>
            <el-radio-button label="无"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="item" label="二次进线：">
          <el-radio-group v-model="ruleForm2.two">
            <el-radio-button label="有"></el-radio-button>
            <el-radio-button label="无"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item class="item" style="margin-top:20px;">
          <el-button @click="screenShow = false">取消</el-button>
          <el-button type="success" @click="resetForm('ruleForm2')">重置</el-button>
          <el-button @click="_Find" type="primary">查询</el-button>
        </el-form-item>
      </el-form>
    </transition>
  </div>
</template>

<script type="es6">
export default {
  data(){
    return {
      screenShow:false,
      ruleForm2: {
				allotTime: '', // 分配时间
        endTime: '', // 最后跟进
        backPlan: '', // 回访计划
        orderProject: '', // 意向项目
        orderD: '', // 意 向 度
        bespoke: '', // 预约记录
        goods: '', // 订单记录
        two: '', // 二次进线
			},
      rules: {

      }
    }
  },
  methods:{
    // 重置
    resetForm(formName) {
      // 不知道为毛，框架的重置用不了
      //this.$refs[formName].resetFields();
      for(let k in this.ruleForm2){
        this.ruleForm2[k]="";
      }
    },
    // 查询
    _Find(){},
  }
}
</script>

<style scope lang="scss">
  .work-search{
    .el-date-editor--daterange.el-input__inner{
      width: 248px;
    }
    .el-form--inline .el-form-item{
      margin: 0px 0px 13px 0px;
    }
    .el-date-editor .el-range-separator{
      padding: 0px 15px;
    }

    .slide-fade-enter-active {
      transition: all .3s ease;
    }
    .slide-fade-leave-active {
      transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
      transform: translateX(10px);
      opacity: 0;
    }
  }

</style>
