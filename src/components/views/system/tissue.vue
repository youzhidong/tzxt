<template lang="html">
  <div :class='{"wrapperTissue": true}'>
      <slidaBar class="sider"
      :slidaData="slidaData"
      v-on:handleNodeClick="handleNodeClick"
      v-on:addcommit="addcommit">
      </slidaBar>
      <layout-right>
          <div class="warp">
            <current class="postion-title" yiji="组织架构" :erji="position"></current>
            <el-button type="primary" v-show="newButton" class="btn-right" size="small" @click="dialogFormVisible = true">新增</el-button>
          </div>
          <el-table
          :data="tableData"
           style="width: 92%; margin-left:2%">
           <el-table-column
             prop="label"
             label="事业部名称">
           </el-table-column>

           <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button type="text" size="small" @click="eidt(scope.row,'eidt')">编辑</el-button>
              <el-button @click="remove(scope)" type="text" size="small">删除</el-button>
            </template>
          </el-table-column>
         </el-table>
      </layout-right>

      <!-- 新增事业部 -->
      <el-dialog class="left remove" title="新增" :visible.sync="dialogFormVisible">

        <el-form :model="ruleForm_add" :rules="rules" ref="ruleForm_add" label-width="100px" class="demo-ruleForm">
          <el-form-item :label="newsMsg" prop="add_name">
             <el-input v-model="ruleForm_add.add_name"></el-input>
          </el-form-item>
        </el-form>

        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="save_add">保存</el-button>
        </div>
    </el-dialog>

    <!-- 编辑弹框 -->
    <el-dialog class="left" title="编辑坐席" :visible="dialogFormVisibleEdit">
      <el-form class="demo-ruleForm" >
             <el-form-item  label="">
               <el-input v-model="newList.label"></el-input>
             </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-button @click="eidt">取 消</el-button>
        <el-button type="primary" @click="editEnter">确 定</el-button>
      </div>
    </el-dialog>

    <!-- <el-date-picker
    v-model="value3"
    type="week"
    @change="timebb"
    format="yyyy 年 MM 月 dd 日"
    placeholder="选择周">
  </el-date-picker> -->
  </div>
</template>

<script type="es6">
import slidaBar from '../../common/slideBar_tissue.vue';
import layoutRight from '../../common/layoutRight.vue';
import current from '../../common/current_position.vue';
export default {
  components: {
    slidaBar,
    layoutRight,
    current
  },
  data(){
    return {
      value3: '',
      position: "",
      dialogFormVisible: false,
      dialogFormVisibleEdit:false,
      newList:{label:""},
      newButton: false, // 是否显示新增按钮
      ruleForm_add:{
        add_name: ''
      },
      newsMsg:"",
      rules: {
        add_name: [
          { required: true, message: '输入不能为空', trigger: 'blur' },
          { min: 2, max: 10, message: '长度在 2 到 10 个字符', trigger: 'blur' }
        ]
      },
      tableData: [
        // {
        //      name: '风军团'
        //    },
        //    {
        //       name: '火军团'
        //     }
       ],
      slidaData: [{
        label: '销售',
        default: "新增事业部",
        children:[{
          label: '学历事业部',
          default: "新增军团",
          children: [{
            label: '风火军团',
            default: "新增销售部",
            children: [{
              label: '风销售部',
              default: "新增组",
              children: [{
                label: '一组',
                children:[]
              },{
                label: '二组',
                children:[]
              },{
                label: '三组',
                children:[]
              },{
                label: '四组',
                children:[]
              }]
            },
            {
              label: '火销售部',
              default: "新增销售部",
              children:[
                {
                  label: '不饿组',
                  children:[]
                }
              ]
            }]
          },{
            label: 'bb军团',
            default: "新增销售部",
            children: [{
              label: '销售-部',
            }]
          }]
        }, {
          label: '日语事业部',
          default: "新增军团",
          index:1,
          children: [{
            label: 'a销售部',
            default: "新增组",
            children: [{
              label: '三级 2-1-1',
              query:'project'
            }]
          }, {
            label: 'b销售部',
            default: "新增组",
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }]
      },{
        label: "客服",
        children: []
      }]
    }
  },
  methods:{
    // 右边橍
    handleNodeClick(data){
      if (!data.children) return;
      this.tableData= data.children; // 核心代码 实现双向绑定
      this.newButton= true;
      this.newsMsg = data.default;
    },
    // 设计说 不能右键新增
    addcommit($event,data){
      // console.log($event);
      //this.dialogFormVisible = true;
      //data.children.push({label:this.ruleForm_add.add_name,children:[]})
    },
    // 删除
    remove(index){
      if (this.tableData[index.$index].children.length) {
        alert("请先删除子项目");
      }
      else{
        let off= confirm("你确定要删除么");
  			if(!off) return;
  			this.tableData.splice(index.$index,1)
      }

    },
    //编辑
    eidt(row,ev){
      console.log(row);
      if (ev == 'eidt') {
        this.dialogFormVisibleEdit = true;
        this.newList = row;
        // console.log(this.newList.label);
        sessionStorage.setItem("newList",JSON.stringify(this.slidaData));
      }
      else {
        //this.slidaData = JSON.parse(sessionStorage.getItem('newList'));
        for(var i=0; i<this.slidaData.length; i++){
          this.slidaData.splice(i,2)
        }
        let list  = JSON.parse(sessionStorage.getItem('newList'));
        for(var j=0;j<list.length; j++){
          this.slidaData.push(list[j])
        }
        this.tableData=[];
        // console.log('取消编辑');
        //window.location.reload()
        this.dialogFormVisibleEdit = false;
      }


    },
    save_add(){

      this.tableData.push({label:this.ruleForm_add.add_name,children:[]})
      this.dialogFormVisible = false;
    },
    // 确认修改
    editEnter(){
      if (!this.newList.label || this.newList.label.length <= 2) {
        alert("输入不能为空");
        return;
      }
      this.dialogFormVisibleEdit = false;
      //console.log(this.newList.label)
    },
    // 取消修改
    editEase(){
      this.newList = JSON.parse(sessionStorage.getItem('newList'));
      //
      // let index = this.newList.$treeNodeId;
      // console.log(index);
      // // console.log(index);
      // //this.$set(this.slidaData,0,this.newList);
      // sessionStorage.clear("newList");
      // this.dialogFormVisibleEdit = false;
    }
  }
}
</script>

<style lang="scss">
  .wrapperTissue{
    width: 100%;
    .el-dialog .el-dialog__headerbtn{
      display: none;
    }
    .warp{
      overflow: hidden;
      .postion-title{
        float: left;
        width: 93%;
      }
      .btn-right{
        margin-top: 10px;
        float: left;
      }
    }

    .sider{
      float: left;
    }
  }
</style>
