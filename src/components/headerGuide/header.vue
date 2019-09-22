<!--头部导航栏 -->
<template>
  <div class="nav">
    <!-- <div id="logo">
      <img class="logo1" src="../../assets/img/logo.jpg" />
      <img class="logo2" src="../../assets/img/title.png" />
    </div> -->

    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#000"
      text-color="rgb(157,157,157)"
      active-text-color="#fff"
    >
      <el-menu-item index="1">
        <router-link to="">主 页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link to="">动 态</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="">成员风采</router-link>
      </el-menu-item>
      <!-- <el-menu-item index="4">
        <router-link to="/intro">了解我们</router-link>
      </el-menu-item>
      <el-menu-item index="5">
        <router-link to="/joinUs">加入我们</router-link>
      </el-menu-item> -->
    </el-menu>

    <div class="login">
      <el-avatar :size="35" icon="el-icon-user-solid"></el-avatar>
      <span>登 录</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeIndex: '1'
    }
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style>
.nav {
  background-color: #000;
  position: relative;
  overflow: hidden;
  padding: 0 35px;
  color: white;
}
#logo {
  position: absolute;
  top: 5px;
}
img {
  vertical-align: middle;
}
.logo1 {
  height: 50px;
}
.logo2 {
  height: 30px;
}

#app .el-menu {
  width: 460px;
  margin: 0 auto;
  border-bottom: none;
}
#app .nav li {
  padding: 0;
}
#app .nav a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 0 20px;
}

.login {
  position: absolute;
  top: 10px;
  right: 40px;
}
.login span {
  font-size: 16px;
  vertical-align: middle;
  margin-left: 15px;
}
</style>
