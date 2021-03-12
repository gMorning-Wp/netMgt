//全局引入
import elementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

// //按需加载
// import {
//   ElButton,
//   ElInput,
//   ElDropdown,
//   ElIcon,
//   ElDropdownMenu,
//   ElDropdownItem,
//   ElScrollbar,
//   ElMenu,
//   ElMenuItem,
//   ElSubmenu,
//   ElMenuItemGroup,
// } from "element-plus";

// import "element-plus/lib/theme-chalk/el-button.css";
// import "element-plus/lib/theme-chalk/el-input.css";
// import "element-plus/lib/theme-chalk/el-icon.css";
// import "element-plus/lib/theme-chalk/el-dropdown.css";
// import "element-plus/lib/theme-chalk/el-dropdown-item.css";
// import "element-plus/lib/theme-chalk/el-dropdown-menu.css";
// import "element-plus/lib/theme-chalk/el-scrollbar.css";

//暂时性引入全部组件样式
import "element-plus/lib/theme-chalk/index.css";
export default function(app) {
  app.use(elementPlus);
  // //按需引入
  // app.use(ElButton);
  // app.use(ElInput);
  // app.use(ElIcon);
  // app.use(ElDropdown);
  // app.use(ElDropdownMenu);
  // app.use(ElDropdownItem);
  // app.use(ElScrollbar);
  // app.use(ElMenu);
  // app.use(ElMenuItem);
  // app.use(ElSubmenu);
  // app.use(ElMenuItemGroup);
}
