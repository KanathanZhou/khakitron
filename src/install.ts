/* tslint:disable:no-shadowed-variable */
import _Vue from 'vue';
import BlueFeather from "../types"; // !! mandatory for this.$bluefeather because module augmentation is over there
import * as components from './components/index';
import * as directives from './directives/index';

const ATTRIBUTE_THEME_NAME: string = 'bluefeather-theme';

export function install(Vue: typeof _Vue, options?: any): void {

  (function registerDirectives(directives: any) {
    for (const name in directives) {
      if (directives[name]) {
        const directive = directives[name];
        Vue.directive(name, directive);
      }
    }
  })(directives);

  (function registerComponents(c: any) {
    for (const key in c) {
      if (c[key]) {
        Vue.component(key, c[key]);
      }
    }
  })(components);

  Vue.mixin({
    beforeCreate() {
      const options = this.$options as any;
      if (options.bluefeather) {
        // setAttribute will make our custom style working, especially those mixins.
        window.document.documentElement.setAttribute(ATTRIBUTE_THEME_NAME, ATTRIBUTE_THEME_NAME);
        this.$bluefeather = Vue.observable(options.bluefeather);
      } else {
        this.$bluefeather = (options.parent && options.parent.$bluefeather) || this;
      }
    },
  });

}
