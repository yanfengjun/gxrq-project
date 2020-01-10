// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueAMap from 'vue-amap'; // 高德
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import Utils from './common/utils'
import store from './vuex/store'
import 'element-ui/lib/theme-chalk/index.css';
import '../theme/index.css'//更改主题色

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.use(VueAMap);

VueAMap.initAMapApiLoader({
  key: '',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.Geolocation'],
  v: '1.4.4'
});

Vue.prototype.Utils = Utils
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
