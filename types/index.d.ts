import Vue from 'vue';
import {PluginFunction} from 'vue';
import {DefaultComputed, DefaultData, DefaultMethods, DefaultProps, PropsDefinition} from 'vue/types/options';
import {JungletronTheme} from './jungletron-theme';

declare const Jungletron: Jungletron;
export default Jungletron;

export interface Jungletron {
  install: PluginFunction<never>;
  theme: JungletronTheme;
  new (userPresetTheme?: JungletronTheme): Jungletron;
}

/**
 * @inheritDoc: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 * module augmentation
 * @override: below declaration allows us to use $jungletron in the project
 */
declare module 'vue/types/vue' {
  export interface Vue {
    $jungletron: Jungletron;
  }

/*  export interface VueConstructor<
    V extends Vue = Vue
    > {
    //  $_jungletron_installed will be used to judge if this framework has been installed.
    //  If this framework has been installed, $_jungletron_installed will be true instead of undefined.
    $_jungletron_installed?: true;
    $jungletron: Jungletron;
  }*/
}

/**
 * @inheritDoc: https://vuejs.org/v2/guide/typescript.html#Augmenting-Types-for-Use-with-Plugins
 * module augmentation
 * @override: below declaration allows us to add jungletron as an option in the Vue initialization like below:
 * new Vue({
 *   jungletron, <-- like this
 *   render: (h) => h(App),
 * }).$mount('#app');
 *
 * @returns: this allows us to get options whenever we need it, like in Vue.mixins
 * Vue.mixin({
 *   beforeCreate () {
 *     const options = this.$options as any
 *     if (options.jungletron) {
 *       ...
 *     }
 *   },
 */
declare module 'vue/types/options' {

/*  export interface ComponentOptions<V extends Vue> {
    jungletron?: Jungletron
  }*/

  export interface ComponentOptions<
    V extends Vue,
    Data=DefaultData<V>,
    Methods=DefaultMethods<V>,
    Computed=DefaultComputed,
    PropsDef=PropsDefinition<DefaultProps>,
    Props=DefaultProps> {
    jungletron?: Jungletron;
  }

}
