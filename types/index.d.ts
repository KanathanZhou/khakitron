import Vue from 'vue';
import {PluginFunction} from 'vue';
import {DefaultComputed, DefaultData, DefaultMethods, DefaultProps, PropsDefinition} from 'vue/types/options';
import {KhakitronTheme} from "./khakitron.theme";

declare const Khakitron: Khakitron;
export default Khakitron;

export interface Khakitron {
  install: PluginFunction<never>;
  theme: KhakitronTheme;
  new (userPresetTheme?: KhakitronTheme): Khakitron;
}

/**
 * @inheritDoc: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 * module augmentation
 * @override: below declaration allows us to use $khakitron in the project
 */
declare module 'vue/types/vue' {
  export interface Vue {
    $khakitron: Khakitron;
  }

/*  export interface VueConstructor<
    V extends Vue = Vue
    > {
    //  $_khakitron_installed will be used to judge if this framework has been installed.
    //  If this framework has been installed, $_khakitron_installed will be true instead of undefined.
    $_khakitron_installed?: true;
    $khakitron: Khakitron;
  }*/
}

/**
 * @inheritDoc: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 * module augmentation
 * @override: below declaration allows us to add khakitron as an option in the Vue initialization like below:
 * new Vue({
 *   khakitron, <-- like this
 *   render: (h) => h(App),
 * }).$mount('#app');
 *
 * @returns: this allows us to get options whenever we need it, like in Vue.mixins
 * Vue.mixin({
 *   beforeCreate () {
 *     const options = this.$options as any
 *     if (options.khakitron) {
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
    khakitron?: Khakitron;
  }

}
