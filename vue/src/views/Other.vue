<template lang="pug">
.other
  router-link(to="/") 我是 Other， 点击跳转
  p 这是 route 的数据{{path}}
</template>

<script>
export default {
  name: 'other',
  computed: {
    path () {
      return this.$route.path
    }
  }
}
</script>

<style lang="stylus">

.other
  background gray
  width inherit
  height inherit
</style>
