<template lang="html">
    <div class="" style="margin-top:20px;" @click="openInfo">
      <p v-for="item in 5">学员列表组件</p>
    </div>
</template>

<script type="es6">
export default {
  methods:{
    openInfo(){
      this.$router.push({path:'workbench_info',query:{index:1}});
    }
  }
}
</script>

<style lang="css">
</style>
