<template>
  <div id="app">
    <navigation></navigation>
    <transition name="fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Nav from './components/Navbar'
export default {
  name: 'App',
  components: {
    'navigation': Nav
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url("assets/marvel-image.jpg");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.fade-enter-active, .fade-leave-active {
      transition: opacity .5s
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>
