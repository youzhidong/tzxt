<template lang="html">
  <div class="" v-if="list">

    
  </div>
</template>

<script type="es6" module>
export default {
  props: {
    list:"",
    tabCurrent: ''
  },
  data (){
    return {
    }
  },
  methods:{
    tabcurEv(){
      this.$emit('tabcurEv')
    }
  }
}
</script>

<style lang="scss" module>
</style>
