<template>
  <div id="app">
    <defaultView></defaultView>
  </div>
</template>

<script>
import defaultView from './views/defaultView'

export default {
  components: {
    defaultView
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 14px;
  color: #2c3e50;
  min-width: 1200px;
}
</style>
