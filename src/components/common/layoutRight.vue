<template lang="html">
  <div class="layoutRight" :style="'min-height:'+heightH+'px'">
    <slot></slot>
  </div>
</template>

<script>
export default {
  created(){
    this.heightH = window.innerHeight - 70
  }
}
</script>

<style lang="scss" scoped>
  .layoutRight{
    float: left;
    margin-left: 20px;
    background: #fff;
    width: calc(100% - 220px);
    margin-top: 10px;
  }
</style>
