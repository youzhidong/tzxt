<template lang="html">
  <div class="contacts">
    <div class="item" :class="item.followClass"  v-for="(item,index) in contactsList" :key="index">
      <div class="warp" >
        <h1>{{item.name}}</h1>
        <div class="next" v-show ="index !== 4">
          <i class="el-icon-arrow-right" ></i>
        </div>
      </div>
      <strong>{{item.more[0]}}</strong>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      contactsList:[{
        name: "手机",
        followClass:'back_tel',
        more:['18802691728','188021111','18802333']
      },
      {
        name: "座机",
        followClass:'back_tel2',
        more:['23232','188021111','18802333']
      },
      {
        name: "微信",
        followClass:'back_wexin',
        more:['323','555555555','3143545']
      },
      {
        name: "QQ",
        followClass:'back_qq',
        more:['2323','3434343','3243455']
      },
      {
        name: "",
        followClass:'back_add',
        more:[]
      }]
    }
  }
}
</script>

<style lang="scss">
  .contacts{
    width: 100%;
    overflow: hidden;
    .item{
      float: left;
      height: 150px;
      border-radius: 8px;
      background-size: cover !important;
      width: calc(20% - 20px);
      margin-left: 20px;
      padding: 30px 0px 0px 20px;
      strong{
        color: #fff;
      }
      .warp{
        overflow: hidden;
        margin-bottom: 15px;
        h1{
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          float: left;
        }
        .next{
          float: left;
          width: 20px;
          height: 20px;
          background: rgba(0,0,0,.3);
          border-radius: 50%;
          color: #fff;
          text-align: center;
          line-height: 20px;
          font-size: 13px;
          box-shadow: 0px 0px 1px rgba(255,255,255,0.2);
          margin-left: 10px;
          text-indent: 1px;
        }

      }

      &.back_tel{
        background: url(/static/img/workbench/back_tel.png);
      }
      &.back_tel2{
        background: url(/static/img/workbench/back_tel2.png);
      }
      &.back_wexin{
        background: url(/static/img/workbench/back_wexin.png);
      }
      &.back_qq{
        background: url(/static/img/workbench/back_qq.png);
      }
      &.back_add{
        background: url(/static/img/workbench/back_add.png);
      }
    }
  }
</style>
