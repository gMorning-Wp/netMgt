<template>
  <h1>{{ msg }}</h1>
  <Comp />
  <p @click="$store.commit('add')">{{$store.state.num}}</p>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <button @click="onClick">emit</button>
  <el-row>
  <el-button>默认按钮</el-button>
  <el-button type="primary">主要按钮</el-button>
  <el-button type="success">成功按钮</el-button>
  <el-button type="info">信息按钮</el-button>
  <el-button type="warning">警告按钮</el-button>
  <el-button type="danger">危险按钮</el-button>
</el-row>
<el-input></el-input>
</template>

<script setup>
//1.直接引用
import { defineEmit, defineProps, reactive, useContext } from "vue";
import Comp from "comps/Comp.vue";
import axios from "axios"
//2. 定义输入 定义属性
const props = defineProps({
  msg: String,
});
console.log(props);

//3. 获得setup的上下文
const ctx = useContext();
console.log(ctx);

//4. 定义输出 定义事件
const emit = defineEmit(["myclick"]);
const onClick = () => {
  console.log("onClick");
  ctx.emit("myclick");
};

//5.定义暴露
ctx.expose({
  getSomeMethod() {
    console.log("get some Method from helloWorld");
  },
});
const state = reactive({ count: 0 });
//6.请求mock api
fetch("/api/getUser")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err)=>{
    console.log(err);
  })


  axios.get('/api/getUser',{ params: { id: 1 }}).then(res =>{
  console.log(res);
})
</script>

<style scoped>

</style>
