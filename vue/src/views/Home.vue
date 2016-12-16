<template lang="pug">
.home
  router-link(to="other") 我是 Home ， 点击跳转
  p 这是 store 的数据{{item}}
</template>

<script>
export default {
  name: 'home',
  computed: {
    item () {
      return this.$store.state.item
    }
  }
}
</script>

<style lang="stylus">

.home
  background pink
  width inherit
  height inherit
</style>
