<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="activeMenu"
      :background-color="variables.menuBg"
      :text-color="variables.menuText"
      :unique-opened="false"
      :active-text-color="variables.menuActiveText"
      mode="vertical"
    >
      <sidebar-item
        v-for="route in routes"
        :key="route.path"
        :item="route"
        :base-path="route.path"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script setup>
// eslint-disable-next-line no-unused-vars
import SidebarItem from "./SidebarItem.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";
// eslint-disable-next-line no-unused-vars
import { routes } from "routes/index";
// eslint-disable-next-line no-unused-vars
import variables from "styles/variables.module.scss";
// eslint-disable-next-line no-unused-vars
const activeMenu = computed(() => {
  const route = useRoute();
  const { meta, path } = route;
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>
