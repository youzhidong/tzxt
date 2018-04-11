<template lang="html">
  <div class="warpTabel">
    <current title="坐席管理"></current>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="" style="width:18%">
        <el-input placeholder="请输入内容"  v-model="formInline.text" class="input-with-select">
          <el-select v-model="formInline.id" slot="prepend" style="width:90px" placeholder="请选择">
            <el-option label="姓名" value="1"></el-option>
            <el-option label="ID" value="2"></el-option>
            <el-option label="手机" value="3"></el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item label="" style="width:13%" :key="key" v-for="(item,key) in findFormInline">
        <el-select v-model="item.text" :placeholder="item.label">
          <el-option :label="list" :key="index" :value="index" v-for="(list,index) in item.list"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="success" >查询</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="dialogFormVisible = true"> 新增</el-button>
      </el-form-item>
    </el-form>

    <el-table
      class="tabel"
       :data="tableData"
     style="width: 92%; margin-left:2%">
     <el-table-column
       prop="id.default"
       label="ID"
       width="80">
     </el-table-column>

     <el-table-column
       prop="name.default"
       label="姓名"
       width="100">
     </el-table-column>

     <el-table-column
       prop="userGroup.default"
       label="用户组"
       width="130">
     </el-table-column>

     <el-table-column
       prop="login.default"
       label="账号">
     </el-table-column>

     <el-table-column
       prop="call.default"
       label="呼叫座席">
     </el-table-column>

     <el-table-column
       prop="legion.default"
       label="军团">
     </el-table-column>

     <el-table-column
       prop="sale.default"
       label="销售部">
     </el-table-column>

     <el-table-column
       prop="saleGroup.default"
       label="销售组">
     </el-table-column>


     <el-table-column
      fixed="right"
      label="操作"
      width="100">
      <template slot-scope="scope">
        <el-button type="text" size="small" @click="edit(scope.row,scope)">编辑</el-button>
        <el-button @click="RmovehandleClick(scope)" type="text" size="small">删除</el-button>
      </template>
    </el-table-column>
   </el-table>

    <div class="block">
      <el-pagination
       background
       @size-change="handleSizeChange"
       @current-change="handleCurrentChange"
       layout="prev, pager, next"
       :total="100" :page-size="5">
     </el-pagination>
   </div>

   <!-- 新增弹框 -->
   <el-dialog class="left" title="新增坐席" :visible.sync="dialogFormVisible">
     <el-form class="demo-ruleForm" :inline="true" :resetField="true">
       <template v-for="(val,key,index) in newsFormInline">
         <template v-if="newsFormInline[key].list" >
           <el-form-item  :label="newsFormInline[key].label" v-if="indexedit[index] == true">
              <el-select :multiple="newsFormInline[key].multiple"  placeholder="请选择" v-model="newsFormInline[key].default" @change="tabEdit($event,key)">
                <el-option :label="item1" :key="index" v-for="(item1,index) in newsFormInline[key].list" :value="item1"></el-option>
              </el-select>
           </el-form-item>
         </template>
         <template v-else>
            <el-form-item  :label="newsFormInline[key].label" v-show="key !== 'id'">
              <el-input v-model="newsFormInline[key].default"></el-input>
            </el-form-item>
         </template>
      </template>
     </el-form>

     <div slot="footer" class="dialog-footer">
       <el-button @click="dialogFormVisible = false">取 消</el-button>
       <el-button type="primary" @click="newsEnter">确 定</el-button>
     </div>
   </el-dialog>


   <!-- 编辑弹框 -->
   <el-dialog class="left" title="编辑坐席" :visible.sync="dialogFormVisibleEdit" v-if="EditList.saleGroup">
     <el-form class="demo-ruleForm" :inline="true">
       <template v-for="(val,key,index) in EditList">
         <template v-if="EditList[key].list" >
           <el-form-item  :label="EditList[key].label" v-if="indexedit[index] == true">
              <el-select :multiple="EditList[key].multiple"  placeholder="请选择" v-model="EditList[key].default" @change="tabEdit($event,key)">
                <el-option :label="item1" :key="index" v-for="(item1,index) in EditList[key].list" :value="item1"></el-option>
              </el-select>
           </el-form-item>
         </template>
         <template v-else>
            <el-form-item  :label="EditList[key].label" v-show="key !== 'id'">
              <el-input v-model="EditList[key].default"></el-input>
            </el-form-item>
         </template>
      </template>
     </el-form>

     <div slot="footer" class="dialog-footer">
       <el-button @click="editEase">取 消</el-button>
       <el-button type="primary" @click="editEnter">确 定</el-button>
     </div>
   </el-dialog>
  </div>
</template>

<script type="es6">
import Vue from 'vue'
import current from './../../common/current_positionD.vue';
export default {
  components:{
    current
  },
  methods:{
    handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      // 选中后显示不同的 选框
      tabEdit(callback,key){
        if(key !== 'userGroup') return;
        this.isAlertList(callback);
        //console.log(key)
      },
      // 新增
      newsEnter(){

        sessionStorage.setItem("newsFormInline",JSON.stringify(this.newsFormInline));
        let newsFormInline = JSON.parse(sessionStorage.getItem('newsFormInline'));

        this.tableData.push(newsFormInline);

        sessionStorage.clear("newsFormInline");
        this.dialogFormVisible = false;
        console.log(this.tableData)
      },
      // 取消 编辑
      editEase(){
        this.EditList = JSON.parse(sessionStorage.getItem('indexedit'));
        this.tableData[this.EditId] = this.EditList;

        this.$set(this.tableData,this.EditId,this.EditList);
        this.dialogFormVisibleEdit = false;
        sessionStorage.clear("indexedit");
      },
      // 确认编辑
      editEnter(){
        // 修改完成后 发送ajax
        console.log(this.tableData)
        this.dialogFormVisibleEdit = false;
        sessionStorage.clear("indexedit");
      },
      // 点击编辑
      edit(e,index){
        this.EditList = e;
        let callback = e.userGroup.default;
        this.isAlertList(callback);
        //存到本地
        sessionStorage.clear("indexedit");
        sessionStorage.setItem("indexedit",JSON.stringify(e));
        this.dialogFormVisibleEdit = true;
        this.EditId= index.$index
      },
      // 删除
      RmovehandleClick(index){
        let off= confirm("你确定要删除么");
  			if(!off) return;
  			this.tableData.splice(index.$index,1)
      },
      isAlertList(callback){
        switch (callback) {
          case '事业部总经理':
            this.indexedit = [true,true];
            break;
          case '军团长':
            this.indexedit = [true,true,true];
            break;
            case '销售经理':
              this.indexedit = [true,true,true,true];
              break;
            case '销售组长':
              this.indexedit = [true,true,true,true];
              break;
            case '咨询师':
              this.indexedit = [true,true,true,true,true];
              break;
            case '项目经理':
              this.indexedit = [true,false,false,false,false,true];
              break;
            case '客服组长':
              this.indexedit = [true,false,false,false,false,false,true];
              break;
            case '在线客服':
              this.indexedit = [true,false,false,false,false,false,true];
              break;
          default:
            this.indexedit = [true];
        }
      }
  },
  data(){
    return {
        dialogFormVisible:false,
        dialogFormVisibleEdit: false,
        indexedit:[true,true],
        hideList:[],
        EditList:{},
        formInline: {
          id: '姓名',
          text:""
        },
        findFormInline: [
          {text:"", label:"事业部", list:["请选择22","请选择22","请选择22"]},
          {text:"", label:"军团", list:["请选择11","请选择11"]},
          {text:"", label:"销售部", list:["请选择11","请选择11"]},
          {text:"", label:"销售组", list:["请选择11","请选择11"]},
        ],
        // 新增的弹框 数据 取tableData 第0项
        newsFormInline: {
          userGroup: {default:"", label:"用户组", list:["事业部总经理","军团长","销售经理","销售组长","咨询师","项目经理","客服组长","在线客服"]},
          Group: {default:"", label:"事业部", list:["一","二"]},
          legion : {default:"", label:"军~ 团", list:["1团","2团"]},
          sale: {default:"", label:"销售部", list:["1部","2部"]},
          saleGroup: {default:"", label:"销售组", list:["1组","2组"]},
          project: {default:[], label:"项目", multiple:true, list:["项目一","项目二","项目三","项目四"]},
          custom: {default:"", label:"客服组", list:["一组","二组","三组","四组"]},
          name: {default:"", label:"姓名"},
          call: {default:"", label:"呼叫坐席"},
          login: {default:"", label:"账号"},
          pwd: {default:"", label:"密码"},
          id:{default:new Date().getTime(), label:"id"},
        },
        tableData: [{
          userGroup: {default:"事业部总经理", label:"用户组", list:["事业部总经理","军团长","销售经理","销售组长","咨询师","项目经理","客服组长","在线客服"]},
          Group: {default:"", label:"事业部", list:["一","二"]},
          legion : {default:"风火军团", label:"军~ 团", list:["1团","2团"]},
          sale: {default:"一部", label:"销售部", list:["1部","2部"]},
          saleGroup: {default:"bbb组", label:"销售组", list:["1组","2组"]},
          project: {default:[], label:"项目", multiple:true, list:["项目一","项目二","项目三","项目四"]},
          custom: {default:"", label:"客服组", list:["一组","二组","三组","四组"]},
          name: {default:"小明", label:"姓名"},
          call: {default:"88547", label:"呼叫坐席"},
          login: {default:"sd85987", label:"账号"},
          pwd: {default:"", label:"密码"},
          id:{default:"0", label:"id"},
        },{
          userGroup: {default:"事业部总经理", label:"用户组", list:["事业部总经理","军团长","销售经理","销售组长","咨询师","项目经理","客服组长","在线客服"]},
          Group: {default:"", label:"事业部", list:["一","二"]},
          legion : {default:"风火军团", label:"军~ 团", list:["1团","2团"]},
          sale: {default:"一部", label:"销售部", list:["1部","2部"]},
          saleGroup: {default:"bbb组", label:"销售组", list:["1组","2组"]},
          project: {default:[], label:"项目", multiple:true, list:["项目一","项目二","项目三","项目四"]},
          custom: {default:"", label:"客服组", list:["一组","二组","三组","四组"]},
          name: {default:"小明", label:"姓名"},
          call: {default:"88547", label:"呼叫坐席"},
          login: {default:"sd85987", label:"账号"},
          pwd: {default:"", label:"密码"},
          id:{default:"11", label:"id"},
        }],
    }
  }
}

// {text:"111", label:"用户组", list:["事业部总经理","军团长","销售组长","咨询师","项目经理","客服组长","在线客服"]},
// {text:"", label:"事业部", list:["请选择22","请选择22"]},
// {text:"", label:"军~ 团", list:["请选择11","请选择11"]},
// {text:"", label:"销售部", list:["请选择11","请选择11"]},
// {text:"", label:"销售组", list:["请选择11","请选择11"]},
// {text:"", label:"姓名"},
// {text:"", label:"手机号"},
// {text:"", label:"呼叫坐席"},
// {text:"", label:"登录账号"},
// {text:"", label:"密码"}

// id: 0,
// name: '小明1',
// userGroup: {default:"事业部总经理", list:["事业部总经理","军团长","销售组长","咨询师","项目经理","客服组长","在线客服"]},
// account:'woshiDJ',
// tel: '556677',
// legion : {default:"无敌军团", list:["1团","2团"]},
// sale: {default:"销售一部", list:["1部","2部"]},
// saleGroup: {default:"三组", list:["1组","2组"]}


</script>

<style lang="scss">

  .warpTabel{
    width: 98.5%;
    margin:auto;
    background: #fff;
    padding:0px 10px;
    text-align: center;

    .left{
      text-align: left;
    }

    .el-table th>.cell{
      text-align: center;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    .left .el-dialog .el-form--inline .el-form-item{
      width: 47%;
    }
  }


</style>
