<template>
  <div
      v-on="$listeners"
      :class="getClasses()"
      :style="getStyle()"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TCardStyle} from '@/components/card/TCard';

@Component({
  name: "TCard"
})
export default class TCard extends Vue {
  @Prop({ type: Boolean }) outlined!: boolean;
  @Prop({ type: Boolean }) tile!: boolean;
  @Prop({ type: Boolean }) hover!: boolean;
  @Prop({ type: Boolean }) hoverTransform!: boolean;
  @Prop({ type: Number }) height!: number;
  @Prop({ type: Number }) width!: number;
  @Prop({ type: Boolean }) elevated!: boolean;

  getClasses(): string {
    const tCardClasses: string[] = ['tCard'];
    if (this.outlined) {
      tCardClasses.push('tCardOutlined');
      if (this.hover) {
        tCardClasses.push('tCardOutlinedHover');
      }
    } else {
      // only works in non-outlined class
      if (this.elevated) {
        tCardClasses.push('tCardElevated');
      }
      if (this.hover) {
        tCardClasses.push('tCardHover');
      }
    }
    if (this.hoverTransform) {
      tCardClasses.push('tCardHoverTransform');
    }
    if (this.tile) {
      tCardClasses.push('tCardTile');
    }
    return tCardClasses.join(' ');
  }

  getStyle(): TCardStyle {
    const tCardStyle: TCardStyle = {};
    if (this.width) {
      tCardStyle.width = `${this.width}px`;
    }
    if (this.height) {
      tCardStyle.height = `${this.height}px`;
    }
    return tCardStyle;
  }

}

</script>

<style scoped lang="scss">
@import "TCard";
</style>
