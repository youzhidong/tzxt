<template lang="html">
	<!-- <el-tree class="box" :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
	<div class="slideBox" :style="'min-height:'+heightH+'px'">
		<h4 class="slideTitle"><span></span><h3>{{title}}</h3></h4>
		<el-tree class="tree"
		:data="slidaData"
		:props="defaultProps"
		accordion
		@node-click="handleNodeClick"
		@node-contextmenu="addcommit"
		>
		</el-tree>

	</div>


</template>
<script>
  export default {
		props:{
			slidaData:{
				type: Array,
				default: []
			},
			title:{
				type: String,
				default: '组织架构'
			}
		},
		created(){
			this.heightH = window.innerHeight - 70
		},
    data() {
      return {
				defaultProps: {
	        children: 'children',
	        label: 'label'
	      }
      }
    },
    methods: {
      handleNodeClick(data) {
				this.$emit('handleNodeClick',data)
        //console.log(data.label);
				// if (data.query) {
				// 			this.$router.push(data);
				// }
      },
			//添加右键功能
			addcommit($event,data){
				this.$emit('addcommit',$event,data)
			}
    }
  };
</script>

<style lang="scss" >

	.slideBox{
		width: 200px;
		margin-top: 10px;
		// margin-left: 10px;
		background: #2f3941;
		.el-tree-node__content{
			height: 32px;
		}
		.el-tree-node:focus>.el-tree-node__content, .el-tree-node__content:hover {
			background-color: #1e2630;
		}
		.tree{
			background: #2f3941;
			color: #a8b0b9;
		}
		.slideTitle{
			height: 60px;
			line-height: 60px;
			color: #fff;
			background: #333d46;
			h3{
				float: left;
				margin-left: 10px;
			}
			span{
				display: block;
				float: left;
				width: 4px;
				height: 20px;
				background: #38a6fa;
				margin-top: 20px;
			}
		}
	}
</style>
