import Vue from 'vue';
import App from './App.vue';
import * as directives from './directives/index';

Vue.config.productionTip = false;

(function registerDirectives(d: any) {
  for (const name in d) {
    if (d[name]) {
      const directive = d[name];
      Vue.directive(name, directive);
    }
  }
})(directives);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
