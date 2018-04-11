<template lang="html">
  <div class="warpTabel">
    <current title="班型管理" :showT="true"  v-on:addevent="addevent"></current>
    <el-table
      class="tabel"
       :data="classList"
     style="width: 92%; margin-left:2%">
     <el-table-column
       prop="classType"
       label="班型名称">
     </el-table-column>

     <el-table-column
      fixed="right"
      label="操作">
      <template slot-scope="scope">
        <!-- <el-button type="text" size="small">班型管理</el-button> -->
        <el-button type="text" size="small" @click="eidt(scope.row,scope)">编辑</el-button>
        <el-button @click="toogleShow(scope)"  type="text" size="small" >
          {{classList[scope.$index].classShow ? '隐藏' : '显示'}}
        </el-button>
      </template>
    </el-table-column>
   </el-table>

   <!-- 编辑弹框 -->
   <el-dialog class="left" title="编辑" :visible="dialogFormVisibleEdit">
     <el-form class="demo-ruleForm" >
            <el-form-item  label="">
              <el-input v-model="newList.classType"></el-input>
            </el-form-item>
     </el-form>

     <div slot="footer" class="dialog-footer">
       <el-button @click="editEase">取 消</el-button>
       <el-button type="primary" @click="editEnter">确 定</el-button>
     </div>
   </el-dialog>

   <!-- 新增 -->
    <el-dialog class="left remove" title="新增班型" :visible.sync="dialogFormVisible">

     <el-form :model="ruleForm_add" :rules="rules" ref="ruleForm_add" label-width="100px" class="demo-ruleForm">
       <el-form-item label="班型名称" prop="add_name">
          <el-input v-model="ruleForm_add.add_name"></el-input>
       </el-form-item>
     </el-form>

     <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible = false">取 消</el-button>
       <el-button type="primary" @click="save_add('ruleForm_add')">保存</el-button>
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
  created(){
    console.log(this.$route.query);
    let index = this.$route.query.index
    this.classList=this.tableData_project[index].classList;
  },
  data(){
    return {
      dialogFormVisibleEdit:false,
      dialogFormVisible:false,
      newList:{},
      ruleForm_add:{
        add_name: ''
      },
      rules: {
        add_name: [
          { required: true, message: '输入不能为空', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 20 个字符', trigger: 'blur' }
        ]
      },
      tableData_project: [{
          name: '学历成人教育',
          projectShow:true,
          classList:[
            {
              classType:'一班',
              classShow:true,
            },
            {
              classType:'二班',
              classShow:false,
            },
            {
              classType:'三班',
              classShow:true,
            }
          ]
        },
        {
          name: '学历成人教育',
          projectShow:true,
          classList:[
            {
              classType:'1980班',
              classShow:true,
            }
          ]
        },
        {
          name: '学历成人教育',
          projectShow:false,
          classShow:true,
          classList:[
            {
              classType:'3880班',
              classShow:true,
            },
            {
              classType:'377780班',
              classShow:true,
            }
          ]
        }
       ],
    }
  },
  methods:{
    toogleShow(val){ // 控制项目显示隐藏
      val.row.classShow = !val.row.classShow;
    },
    eidt(val,index){
      this.dialogFormVisibleEdit = true;
      this.newList = val;
      this.tabelIndex = index.$index; //取到索引值
      sessionStorage.setItem("newList",JSON.stringify(val));
    },
    editEase(){
      this.newList = JSON.parse(sessionStorage.getItem('newList'));
      let index = this.tabelIndex;
      this.$set(this.classList,index,this.newList);
      sessionStorage.clear("newList");
      this.dialogFormVisibleEdit = false;
    },
    editEnter(){
      sessionStorage.clear("newList");
      this.dialogFormVisibleEdit = false;
      //console.log(this.tableData_project);
      // 用ajax 把tableData_project 传给后台就行了
    },
    // 新增
    addevent(){
      this.dialogFormVisible = true;
    },
    //新增  保存
    save_add(formName){

      this.$refs[formName].validate((valid) => {
        if (valid) {
          let obj={};
          obj.classType = this.ruleForm_add.add_name;
          obj.projectShow = true;
          this.classList.push(obj);
          this.dialogFormVisible = false;
        } else {
          console.log('error submit!!');
          return false;
        }
      });

    }
  }
}
</script>

<style lang="scss">
  .warpTabel{
    .el-dialog .el-dialog__headerbtn{
      display: none;
    }
    width: 98.5%;
    margin:auto;
    background: #fff;
    padding:0px 10px;
    text-align: center;
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
