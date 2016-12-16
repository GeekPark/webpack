<template lang="pug">
#app
  transition(name="slide-fade")
    router-view
</template>

<script>


export default {
  name: 'app',
}
</script>

<style lang="stylus">

html, body, #app
  width 100%
  height 100%


.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-active {
  transform: translateX(10px);
  opacity: 0;
}

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  font-size 30px
  color #2c3e50
  background black
  
  a
    display inline-block
  
  a, p
    margin-top 30px
</style>
