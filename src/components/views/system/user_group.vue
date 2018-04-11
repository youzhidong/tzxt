<template lang="html">
  <div class="warpTabel">
    <current title="用户组管理"></current>
    <el-table
      class="tabel"
       :data="tableData"
     style="width: 92%; margin-left:2%">
     <el-table-column
       prop="name"
       label="项目名称">
     </el-table-column>

     <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="eidt(scope.row,scope)">编辑</el-button>
        <el-button @click="handleClick" type="text" size="small">权限管理</el-button>
      </template>
    </el-table-column>
   </el-table>

   <!-- 编辑弹框 -->
   <el-dialog class="left" title="编辑坐席" :visible.sync="dialogFormVisibleEdit">
     <el-form class="demo-ruleForm" >
            <el-form-item  label="">
              <el-input v-model="newList.name"></el-input>
            </el-form-item>
     </el-form>

     <div slot="footer" class="dialog-footer">
       <el-button @click="editEase">取 消</el-button>
       <el-button type="primary" @click="editEnter">确 定</el-button>
     </div>
   </el-dialog>
  </div>
</template>

<script type="es6">
import current from './../../common/current_positionD.vue';
export default {
  components:{
    current
  },
  methods:{
    handleClick(){
      this.$router.push("power")
    },
    //编辑
    eidt(row,index){
      this.dialogFormVisibleEdit = true;
      this.newList = row;
      this.tabelIndex = index.$index; //取到索引值
      sessionStorage.setItem("newList",JSON.stringify(row));
    },
    // 确认修改
    editEnter(){
      if (!this.newList.name) {
        alert("输入不能为空");
        return;
      }
      sessionStorage.clear("newList");
      this.dialogFormVisibleEdit = false;
      //console.log(this.newList.label)
    },
    // 取消修改
    editEase(){
      this.newList = JSON.parse(sessionStorage.getItem('newList'));
      let index = this.tabelIndex;
      this.$set(this.tableData,index,this.newList);
      sessionStorage.clear("newList");
      this.dialogFormVisibleEdit = false;
    }
  },
  data(){
    return {
      dialogFormVisibleEdit:false,
      newList:{label:""},
      tableData: [{
          name: '管理员',
        },
        {
          name: '事业部总经理',
        },
        {
          name: '项目经理',
        },
        {
          name: '军团长',
        },
        {
          name: '销售部经理',
        },
        {
          name: '销售组长',
        },
        {
          name: '咨询师',
        },
        {
          name: '客服组长',
        },
        {
          name: '在线客服',
        }
       ],
    }
  }
}
</script>

<style lang="scss">
  .warpTabel{
    width: 98.5%;
    margin:auto;
    background: #fff;
    padding:0px 10px;
    text-align: center;
    .el-dialog .el-dialog__headerbtn{
      display: none;
    }
    .tabel{
      text-align: center;
      .el-table th>.cell{
        text-align: center;
      }
    }
    .el-table th>.cell{
      text-align: center;
    }
  }
</style>
