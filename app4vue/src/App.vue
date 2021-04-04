<template>
  <div id="app4">
    <img src="./assets/logo.png" />
    <a-button type="primary">Button</a-button>
     <el-button type="success">成功按钮</el-button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app4",
  components: {
    HelloWorld,
  },
};
</script>

<style>
@import "./style/style.css";

#app4 {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
