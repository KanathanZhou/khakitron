import Vue from 'vue';
import {PluginFunction} from 'vue';
import {DefaultComputed, DefaultData, DefaultMethods, DefaultProps, PropsDefinition} from 'vue/types/options';
import {BlueFeatherTheme} from "./blue-feather.theme";

declare const BlueFeather: BlueFeather;
export default BlueFeather;

export interface BlueFeather {
  install: PluginFunction<never>;
  theme: BlueFeatherTheme;
  new (userPresetTheme?: BlueFeatherTheme): BlueFeather;
}

/**
 * @inheritDoc: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 * module augmentation
 * @override: below declaration allows us to use $bluefeather in the project
 */
declare module 'vue/types/vue' {
  export interface Vue {
    $bluefeather: BlueFeather;
  }

/*  export interface VueConstructor<
    V extends Vue = Vue
    > {
    //  $_bluefeather_installed will be used to judge if this framework has been installed.
    //  If this framework has been installed, $_bluefeather_installed will be true instead of undefined.
    $_bluefeather_installed?: true;
    $bluefeather: BlueFeather;
  }*/
}

/**
 * @inheritDoc: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 * module augmentation
 * @override: below declaration allows us to add bluefeather as an option in the Vue initialization like below:
 * new Vue({
 *   bluefeather, <-- like this
 *   render: (h) => h(App),
 * }).$mount('#app');
 *
 * @returns: this allows us to get options whenever we need it, like in Vue.mixins
 * Vue.mixin({
 *   beforeCreate () {
 *     const options = this.$options as any
 *     if (options.bluefeather) {
 *       ...
 *     }
 *   },
 */
declare module 'vue/types/options' {

  export interface ComponentOptions<
    V extends Vue,
    Data=DefaultData<V>,
    Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
    bluefeather?: BlueFeather;
  }

}
