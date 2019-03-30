import Vue from 'vue';
import App from './App.vue';

// 全局样式
import './common/style/reset.styl';
import './common/style/base.styl';

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})