// 总布局页面。基本上所有页面都是此组件的路由配置中的子组件
<template>
  <!-- 总体布局 -->
  <div class="app-wrapper">
    <!-- 侧边栏 -->
    <sidebar class="sidebar-container" />
    <!-- 内容容器 -->
    <div class="main-container">
      <!-- 顶部导航栏 -->
      <navbar />
      <!-- 内容区 -->
      <div></div>
    </div>
  </div>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import Navbar from "./components/Navbar.vue";
// eslint-disable-next-line no-unused-vars
import Sidebar from "./components/Sidebar/index.vue";
</script>

<style lang="scss" scoped>
@import "../styles/mixin.scss";

.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
