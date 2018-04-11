<template lang="html">
  <div class="slideBox1">
    <h4 class="slideTitle"><span></span><h3>{{title}}</h3></h4>
    <el-button type="primary" class="btn-right" size="small"
    v-show="showT"
    @click="addevent"
    >{{text}}</el-button>
  </div>
</template>

<script>
export default {
  props:{
    title:{
      default: "",
      type: String
    },
    showT:{
      default: false,
      type: Boolean
    },
    text:{
      default: '新增',
      type: String
    }
  },
  methods:{
    addevent(){
      this.$emit('addevent');
    }
  }
}
</script>

<style lang="scss" scoped>

	.slideBox1{
		width: 100%;
		margin-top: 10px;
    overflow: hidden;
    .btn-right{
      float: right;
      margin-right: 30px;
      margin-top: 7px;
    }
		.slideTitle{
			height: 40px;
			line-height: 40px;
      float: left;
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
				margin-top: 10px;
			}
		}
	}
</style>
