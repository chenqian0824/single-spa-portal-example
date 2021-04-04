import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import Button from 'ant-design-vue/lib/button';
import 'ant-design-vue/dist/antd.css';
Vue.component(Button.name, Button);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')