<!-- 动态 -->
<template>
    <div class="main">
      <el-card class="box-card" shadow="never" @mouseenter.native="appear = true" @mouseleave.native="appear = false">
        <el-row :gutter="20">
          <el-col :span="5" :style="{ 'padding': '0' }">
            <!-- <span class="classify" :style="{ 'width': '3px', 'height': '30px','background': '#4ba5d8' }"></span> -->
            <div :style="{ 'min-width': '200px', 'height': '180px', 'border-radius': '5%'}">
              <img src="../../assets/img/note1.jpg" alt="..." :style="{ 'width': '100%', 'height': '100%', 'border-radius': '5%'}">
              <span class="classify" :style="{ 'min-width': '80px', 'height': '35px','background': '#4ba5d8','color': '#fff'}"><p>{{ classify }}</p></span>
            </div></el-col>
          <el-col :span="19" :style="{ 'padding-left':'20px' }">
            <header><h2><a href="" id='link'>深度学习实战教程(七)：递归神经网络</a></h2></header>
            <article>在前面的文章中，我们介绍了循环神经网络，它可以用来处理包含序列结构的信息。然而，除此之外，信息往往还存在着诸如树结构、图结构等更复杂的结构。对于这种复杂的结构，循环神经网络就无能为.</article>
            <footer>
              <time>2019-10-23 </time>
              <span> 喜欢这篇文章  </span>
              <img :src = "likesbefore ? require('../../assets/img/redheart.png') : require('../../assets/img/greyheart.png')"  @click="dolikes" >
              <!-- <div class="article_likes" @click="dolikes(index)"><span v-bind:class="[likesbefore? 'likesbefore':'likesafter']"></span><span class="likes" v-bind:class="[item.likesbefore ? 'gray':'pink']">{{item.likes}}</span></div> -->
              <span> {{likes}} </span>
              <span class="animate-text" v-if="appear"><a>阅 读 全 文 > ></a></span>
            </footer>
          </el-col>

            <!-- <div class="animate-text"><p>阅 读 全 文 > ></p></div> -->
</el-row>

      </el-card>
    </div>
</template>

<script>
// 这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
// 例如：import '组件名称' from '组件路径';

export default {
// import引入的组件需要注入到对象中才能使用
  components: {},
  data () {
    // 这里存放数据
    return {
      classify: '实验室动态', // 实验室动态，技术博客，....
      likes: 0, // 计数器 -- 记录喜欢的人数
      likesbefore: false, // 0 是 未点击喜欢,1 是 点击喜欢
      appear: false // false 表示阅读全文标识未出现
    }
  },
  // 监听属性 类似于data概念
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 过滤器
  filters: {},
  // 方法集合
  methods: {
    dolikes () {
      console.log(this.likesbefore)
      this.likes = this.likesbefore ? parseInt(this.likes) - 1 : parseInt(this.likes) + 1
      this.likesbefore = !this.likesbefore
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  },
  beforeCreate () {}, // 生命周期 - 创建之前
  beforeMount () {}, // 生命周期 - 挂载之前
  beforeUpdate () {}, // 生命周期 - 更新之前
  updated () {}, // 生命周期 - 更新之后
  beforeDestroy () {}, // 生命周期 - 销毁之前
  destroyed () {}, // 生命周期 - 销毁完成
  activated () {} // 如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style scoped>
.main {
    /* width: 1200px;
    margin: 0 auto;*/
    margin: 15px;
    /* background-color: #fff;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    box-shadow: 4px 13px 30px 1px rgba(78, 72, 72, 0.4); */
}
 .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 1200px;
    margin: 0 auto;
    box-shadow: 4px 13px 30px 1px rgba(78, 72, 72, 0.4);

  }
  .classify {
    position: absolute;
    top: 15px;
    left: 0;
    /* text-align: center */
  }
  .classify p {
    /* vertical-align: middle */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    white-space: nowrap;
    font-size: 0.9rem;
  }
  #link {
    text-decoration: none;
    color: #444;
  }
  #link:hover {
    color: #4ba5d8;
    cursor: pointer;
    text-decoration: underline;
  }
  article {
    /* vertical-align: baseline; */
    padding-top: 10px;
    height:100px;
    width:100%;
    font-size: 0.85rem;
  }
  footer {
    height:50px;
    width:100%;
    /* background: #000; */
    padding-top: 35px;
    color: #999;
    font-size: 0.85rem;
  }
  footer img {
    vertical-align: middle;
  }
  footer img:hover {cursor: pointer;}
  .read {
    min-width: 100px;
    height: 35px;
    background:#4ba5d8;
    position: absolute;
    right: 0;
    bottom: 0;
    border-radius: 15px 0 0 15px;
    color: #fff;
  }
  .read p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    white-space: nowrap;
    font-size: 0.9rem;
  }
  .animate-text {
  width:100px;
  height: 50px;
  /* background: #4ba5d8; */
  position: absolute;
  right: 0;
  /* opacity: 0; */
  /* transition: all 0.6s ease-in-out; */
}
.animate-text  a {
  text-decoration: none;
  color:#4ba5d8;
  font-weight: 400;
}
/* #app .el-card:hover{
    width:100px;
  height: 50px;
  color:#fff;
  background: #4ba5d8;
  transform: translateX(0);
  opacity: 1;
} */

</style>
