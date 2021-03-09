//全局引入
// import elementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'


//按需加载
import {ElButton,ElInput} from 'element-plus'

import 'element-plus/lib/theme-chalk/el-button.css'
import 'element-plus/lib/theme-chalk/el-input.css'


export default function (app){
    // app.use(elementPlus);
    //按需引入
    app.use(ElButton);
    app.use(ElInput);
}