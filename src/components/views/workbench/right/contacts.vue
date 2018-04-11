<template lang="html">
  <div class="">
    联系学员组件
    <!-- <input type="text" v-model="childmylist"> -->
  </div>
</template>

<script type="es6">
export default {
  props:['mylist'],
  data(){
    return {
      childmylist: this.mylist
    }
  },
  methods:{
    changes(){
      //this.$emit('update:list',);
    }
  },
  watch:{
    childmylist:function(val){
      this.$emit('mylist', val);
    }
  }
}
</script>

<style lang="css">
</style>
