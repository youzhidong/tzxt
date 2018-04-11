<template lang="html">
  <div class="work-search">
    <!-- 搜索组件 -->

      <el-form :model="ruleForm2" :rules="rules" ref="ruleForm2" size="mini" :inline="true" class="demo-ruleForm">
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
          <el-button v-on:click="_Esc">取消</el-button>
          <el-button type="success" @click="resetForm('ruleForm2')">重置</el-button>
          <el-button v-on:click="_Find" type="primary">查询</el-button>
        </el-form-item>
      </el-form>

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
    _Find(){
      this.$emit("_Find",this.ruleForm2);
    },
    // 取消
    _Esc(){
      this.screenShow = false;
      this.$emit('_Esc',this.screenShow);
    }
  }
}
</script>

<style scope lang="scss">
  .work-search{
    position: absolute;
    left: 8px;
    top: 72px;
    background: #fff;
    box-shadow:
      -4px 0px 10px #d5d8d9,   /*左边阴影*/
      0px -4px 10px #d5d8d9,  /*上边阴影*/
      4px 0px 10px #d5d8d9,  /*右边阴影*/
      0px 4px 10px #d5d8d9; /*下边阴影*/
    z-index: 500;
    padding: 10px 15px 20px 15px;
    .el-date-editor--daterange.el-input__inner{
      width: 248px;
    }
    .el-form--inline .el-form-item{
      margin: 0px 0px 13px 0px;
    }
    .el-date-editor .el-range-separator{
      padding: 0px 15px;
    }


  }


</style>
