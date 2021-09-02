<template>
  <div :class="[getClasses(), getTabTheme()]"
       @click="selectTab()"
       :disabled="disableStatus">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

export enum TTabTheme {
  default,
  outlined
}

@Component({
  name: "TTab"
})
export default class TTab extends Vue {
  @Prop({ type: String }) value!: string; // for t-tab-bar v-model binding value
  @Prop({ type: Boolean }) disabled!: boolean;

  parentTabBar: any; // can be nothing if user didn't put TTabBar around
  disableStatus: boolean = false;
  tabTheme: TTabTheme = TTabTheme.default;

  created() {
    this.getParentTabBar();
    this.disableStatus = this.disabled;
  }

  getParentTabBar() {
    if (this.$options.parent?.$vnode.componentOptions?.tag === "TTabBar") {
      this.parentTabBar = this.$options.parent;
    }
  }

  isTabActivated(): boolean {
    return this.parentTabBar?.value === this.value;
  }

  selectTab() {
    this.parentTabBar?.onChangeTab(this.value);
  }

  getTabTheme(): string {
    if (this.tabTheme === TTabTheme.default) {
      return '__T_Tab_default';
    } else if (this.tabTheme === TTabTheme.outlined) {
      return '__T_Tab_outlined';
    } else {
      return '';
    }
  }

  getClasses(): string {
    const classes: string[] = [];
    if (this.isTabActivated()) {
      classes.push("__T_Tab_Activated");
    }
    return classes.join(' ');
  }

  disableTTab() {
    this.disableStatus = true;
  }

  setTabTheme(tabTheme: TTabTheme): void {
    this.tabTheme = tabTheme;
  }
}
</script>

<style lang="scss" scoped>
@import "TTab";
</style>
