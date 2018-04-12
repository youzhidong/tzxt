<template lang="html">
    <div class="studenList" @click="openInfo">
      <p style="background:#F4F4F4; height:2px; width:400px; margin-left:-50px;"></p>
      <div class="item" v-for="item in 5">
        <div class="left">
          <p class="one">
            <i class="icon weixin"></i>
            <span>18976186976</span>
          </p>
          <strong>未跟进</strong>
        </div>

        <div class="right">
          <p class="one">
            <span>08/23</span>
            <span>21:00</span>
          </p>
          <i class="icon statusOK" style="float:right; margin-top:10px;"></i>
        </div>
      </div>
    </div>
</template>

<script type="es6">
export default {
  data(){
    return {
      followClass:['tel','weixin','qq','nc','zj'],
    }
  },
  methods:{
    openInfo(){
      this.$router.push({path:'workbench_info',query:{index:1}});
    }
  }
}
</script>

<style lang="scss">
  .studenList{
    margin-left: -15px;
    margin-right: -15px;
    .item{
      overflow: hidden;
      padding:20px 10px;
      border-left: 3px solid #fff;
      +.item{
        border-top: 1px solid #e8edf0;
      }
      &:hover{
        background: #e5f5ff;
        border-left:3px solid #3aa5fa;
      }
      .left{
        float: left;
        color: #3aa5fa;
        font-size: 16px;
        strong{
          color: #4b4b4b;
          display: block;
          margin-top: 10px;
        }
      }
      .right{
        float: right;
        color: #afbdcc;
        font-size: 13px;
        span{
          +span{
            margin-left: 5px;
          }
        }
      }

      .one{
        overflow: hidden;
        span{
          margin-top: 3px;
          display: block;
          float: left;
          margin-left: 6px;
        }

      }

    }
    .icon{
      display: block;
      width: 16px;
      height: 16px;
      float: left;
      background-size: 100% !important;
      background-repeat: no-repeat !important;
      // 跟进状态度
      &.statusOK{
        background: url(/static/img/workbench/statusOK.png);
        width: 20px;
        height: 20px;
      }
      &.statusNO{
        background: url(/static/img/workbench/statusNO.png);
        width: 20px;
        height: 20px;
      }
      // 联系方式
      &.tel{
        background: url(/static/img/workbench/tel.png);
        margin-top: 1px;
      }
      &.weixin{
        background: url(/static/img/workbench/weixin.png);
        margin-top: 3px;
      }
      &.qq{
        background: url(/static/img/workbench/qq.png);
        margin-top: 1px;
      }
      &.nc{
        background: url(/static/img/workbench/nc.png);
        margin-top: 1px;
      }
      &.zj{
        background: url(/static/img/workbench/zj.png);
        margin-top: 3px;
      }
    }

  }
</style>
