<template>
  <div :class="['__T_Link_wrapper', getPresetClass()]"
       :style="getStyle()">
    <div style="margin-right: 4px;" v-if="$slots.left">
      <slot name="left"></slot>
    </div>

    <a :href="href"
       class="__T_Link_anchor"
       :target="target">
      {{ text || href }}
    </a>

    <div style="margin-left: 4px;" v-if="$slots.right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';

@Component({
  name: "TLink"
})
export default class TLink extends Vue {
  @Prop({ type: String }) href!: string;
  @Prop({ type: String }) text!: string;
  @Prop({ type: String }) color!: string;
  @Prop({ type: String }) target!: "_blank" | "_self" | "_parent" | "_top" | string;
  @Prop({ type: Boolean }) xxLarge!: boolean;
  @Prop({ type: Boolean }) xLarge!: boolean;
  @Prop({ type: Boolean }) large!: boolean;
  @Prop({ type: Boolean }) medium!: boolean;
  @Prop({ type: Boolean }) small!: boolean;
  @Prop({ type: Boolean }) xSmall!: boolean;

  getStyle(): GeneralStyle {
    const style: GeneralStyle = {};

    if (this.color) {
      style.color = this.color;
    }

    return style;
  }

  getPresetClass(): string {
    const classes: string[] = [];
    if (this.xxLarge) {
      classes.push(`__T_Link_xxLarge`);
    } else if (this.xLarge) {
      classes.push(`__T_Link_xLarge`);
    } else if (this.large) {
      classes.push(`__T_Link_large`);
    } else if (this.medium) {
      classes.push(`__T_Link_medium`);
    } else if (this.small) {
      classes.push(`__T_Link_small`);
    } else if (this.xSmall) {
      classes.push(`__T_Link_xSmall`);
    }
    return classes.join(" ");
  }
}
</script>

<style scoped lang="scss">
@import "TLink";
</style>
