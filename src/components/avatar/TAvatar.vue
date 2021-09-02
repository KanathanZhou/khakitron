<template>
  <div v-on="$listeners"
      :class="[getContainerClass(), getPresetClass(), getInputSourceClass()]"
      :style="getContainerStyle()">
    <img v-if="src"
         :src="src"
         class="__T_Avatar_Image"
         alt="" />
    <div v-else-if="text"
         class="__T_Avatar_Text">
      {{ text[0] }}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';

@Component({
  name: "TAvatar"
})
export default class TAvatar extends Vue {
  @Prop({ type: String }) src!: string;
  @Prop({ type: String }) text!: string;
  @Prop({ type: [Number, String] }) size!: number | string;
  @Prop({ type: Boolean }) tile!: boolean;
  @Prop({ type: Boolean }) xSmall!: boolean;
  @Prop({ type: Boolean }) small!: boolean;
  @Prop({ type: Boolean }) medium!: boolean;
  @Prop({ type: Boolean }) large!: boolean;
  @Prop({ type: Boolean }) xLarge!: boolean;
  @Prop({ type: Boolean }) xxLarge!: boolean;

  getInputSourceClass(): string {
    if (this.src) {
      return '__T_Avatar_Container_Image';
    }
    return '';
  }

  getContainerClass(): string {
    const classes: string[] = [];
    if (this.tile) {
      classes.push('__T_Avatar_Container_Tile');
    } else {
      classes.push('__T_Avatar_Container_Circle');
    }
    return classes.join(' ');
  }

  getPresetClass(): string {
    if (this.xxLarge) {
      return `__T_Avatar_xxLarge`;
    } else if (this.xLarge) {
      return `__T_Avatar_xLarge`;
    } else if (this.large) {
      return `__T_Avatar_large`;
    } else if (this.medium) {
      return `__T_Avatar_medium`;
    } else if (this.small) {
      return `__T_Avatar_small`;
    } else if (this.xSmall) {
      return `__T_Avatar_xSmall`;
    } else {
      // default to small
      return `__T_Avatar_small`;
    }
  }

  getContainerStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.size) {
      style.width = style.minWidth = style.height = style.minHeight = isNaN(+this.size) ? this.size as string : `${this.size}px`;
    }
    return style;
  }

}
</script>

<style scoped lang="scss">
@import "TAvatar";
</style>
