<template lang="html">
  <div class="">
    <v-contacts></v-contacts>
    <v-studentInfo></v-studentInfo>
    <v-followup></v-followup>
  </div>
</template>

<script>
import Vcontacts from './contacts.vue';  // 联系学员组件
import Vfollowup from './followUp.vue'; // 跟进信息组件
import VstudentInfo from './studentInfo.vue'; // 学员信息组件
export default {
  components: {
    'v-contacts': Vcontacts,
    'v-studentInfo': VstudentInfo,
    'v-followup': Vfollowup
  },
  created(){
    console.log(this.$router.currentRoute.query.index);
  },
}
</script>

<style lang="css">

</style>
