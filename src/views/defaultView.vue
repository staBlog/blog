<template>
  <div>
      <el-container>
        <particles></particles>
        <el-header>
          <app-header></app-header>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>

  </div>
</template>

<script>
import header from '../components/headerGuide/header'
// import particles from '../components/particles/particle'

export default {
  components: {
    'app-header': header
    // particles: particles
  }
}
</script>

<style>
/* #app {
  background-color: rgb(250, 250, 250);
} */
#app .el-header {
  padding: 0;
}
.content {
  width: 1200px;
  margin: 0 auto;
}
#app .el-main {
  padding: 0;
}
/* #app .el-main {
  width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  box-shadow: 4px 13px 30px 1px rgba(78, 72, 72, 0.4);
} */
/* #particles-js {
  position: fixed;
  z-index: -1;
  width: 100%;
  height: 100%;
} */
</style>
