<template>
  <div
      class="__T_Loader"
      :class="[getClass(), getPresetClass()]"
  ></div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: "TLoader"
})
export default class TLoader extends Vue {
  @Prop({ type: Boolean }) xxLarge!: boolean;
  @Prop({ type: Boolean }) xLarge!: boolean;
  @Prop({ type: Boolean }) large!: boolean;
  @Prop({ type: Boolean }) medium!: boolean;
  @Prop({ type: Boolean }) small!: boolean;
  @Prop({ type: Boolean }) xSmall!: boolean;
  @Prop({ type: Boolean }) absolute!: boolean;

  getPresetClass(): string {
    const classes: string[] = [];
    if (this.xxLarge) {
      classes.push(`__T_Loader_xxLarge`);
    } else if (this.xLarge) {
      classes.push(`__T_Loader_xLarge`);
    } else if (this.large) {
      classes.push(`__T_Loader_large`);
    } else if (this.medium) {
      classes.push(`__T_Loader_medium`);
    } else if (this.small) {
      classes.push(`__T_Loader_small`);
    } else if (this.xSmall) {
      classes.push(`__T_Loader_xSmall`);
    } else {
      // default
      classes.push(`__T_Loader_medium`);
    }
    return classes.join(" ");
  }

  getClass(): string {
    const classes: string[] = [];
    if (this.absolute) {
      classes.push(`__T_Loader_absolute`);
    }
    return classes.join(" ");
  }

}
</script>

<style scoped lang="scss">
@import "TLoader";
</style>
