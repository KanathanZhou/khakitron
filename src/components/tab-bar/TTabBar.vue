<template>
  <div :class="getClass()"
       :style="getStyle()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {VNode} from 'vue';
import {GeneralStyle} from '@/components/general-style';
import {TTabTheme} from '@/components/tab-bar/tab/TTab.vue';

@Component({
  name: "TTabBar"
})
export default class TTabBar extends Vue {
  @Prop({ type: String }) value!: string; // v-model binding - 1
  @Prop({ type: Boolean }) outlined!: boolean; // give tab bar an "outlined" looking
  @Prop({ type: Boolean }) block!: boolean;
  @Prop({ type: Boolean }) disabled!: boolean;

  mounted() {
    this.applyTabStatus();
  }

  // v-model binding - 2
  // you actually have to call this to make it work
  @Emit('input')
  onChangeTab(value: string) {
  }

  getClass(): string {
    const classes: string[] = ["__T_TabBar"];
    if (this.outlined) {
      classes.push('__T_TabBar_outlined');
    } else {
      classes.push('__T_TabBar_default');
    }
    return classes.join(" ");
  }

  getStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.block) {
      style.width = `100%`;
    }
    return style;
  }

  applyTabStatus() {
    const defaultSlotComponents: VNode[] | undefined = this.$slots.default;
    // retrieve whatever inside default slot components
    if (defaultSlotComponents) {
      // loop over elements
      for (const [i, element] of defaultSlotComponents.entries()) {
        // check if element is "TTab"
        if (element.componentOptions?.tag === "TTab") {
          if (this.disabled) {
            (element as any).child.disableTTab();
          }
          if (this.outlined) {
            (element as any).child.setTabTheme(TTabTheme.outlined);
          }
        }
      }
    }
  }

/*  activateTab(tabIndex: number) {
    // retrieve whatever inside default slot components
    const tabsList: VNode[] | any | undefined = this.$slots.default;
    if (tabsList) {
      // loop over elements
      for (const [i, element] of tabsList.entries()) {
        // check if element is "TTag"
        if (element.componentOptions?.tag === "TTab") {
          // if (tabIndex === i && element.child && element.child.selectTab) {
          if (tabIndex === i) {
            element.child.selectTab();
          }
        }
      }
    }
  }

  preSelectVModelTab() {
    let activateFirstTab: boolean = true;
    if (this.value) {
      const defaultSlotComponents: VNode[] | undefined = this.$slots.default;
      // retrieve whatever inside default slot components
      if (defaultSlotComponents) {
        // loop over elements
        for (const [i, element] of defaultSlotComponents.entries()) {
          // check if element is "TTag"
          if (element.componentOptions?.tag === "TTab") {
            // get propsData in the element
            const propsData: any = element.componentOptions.propsData;
            if (propsData.value === this.value) {
              // activate this tab
              this.activateTab(i);
              // no need to activate first tab
              activateFirstTab = false;
            }
          }
        }
      }
    }

    if (activateFirstTab) {
      this.activateTab(0);
    }
  }*/

}
</script>

<style lang="scss" scoped>
@import "TTabBar";
</style>
