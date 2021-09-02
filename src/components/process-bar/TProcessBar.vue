<template>
  <div class="container" :style="getContainerStyles()" ref="container">
    <div class="process" ref="process" :style="getProcessStyles()" v-if="!circle && !swing">
      <div class="slider" :style="getSliderStyles()" @mousedown="onMouseDown"></div>
    </div>
    <div :class="getAnimateClass()" v-if="circle || swing"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { GeneralStyle } from '../general-style';

@Component({
  name: 'TProcessBar'
})
export default class TProcessBar extends Vue {
  @Prop() value!: boolean;
  @Prop({ type: Boolean, default: false }) circle!: boolean;
  @Prop({ type: Boolean, default: false }) swing!: boolean;
  @Prop({ type: [String, Number], default: 20 }) containerHeight!: string | number;
  @Prop({ type: [String, Number], default: 200 }) containerWidth!: string | number;
  @Prop({ type: String, default: '' }) containerColor!: string;
  @Prop({ type: String, default: '' }) containerBorderColor!: string;
  @Prop({ type: String, default: '' }) processColor!: string;
  @Prop({ type: String, default: '' }) sliderColor!: string;

  dynamicWidthPercent: number | null = null;
  containerMinHeight: number = 30;

  getSliderStyles(): GeneralStyle {
    const style: GeneralStyle = {};

    if (this.sliderColor) {
      style.background = this.sliderColor;
    }

    if (this.containerHeight) {
      const height = this.containerHeight < this.containerMinHeight ? this.containerMinHeight : this.containerHeight;
      style.width = `${ height }px`;
      style.height = `${ height }px`;
      style.right = `-${ Number(height) / 2 }px`;
    }

    return style;
  }

  getContainerStyles(): GeneralStyle {
    const style: GeneralStyle = {};

    if (this.containerHeight) {
      style.height = `${ this.containerHeight }px`;
      style.borderRadius = `${ Number(this.containerHeight) / 2 }px`;
    }

    if (this.containerWidth) {
      style.width = `${ this.containerWidth }px`;
    }

    if (this.containerColor) {
      style.background = this.containerColor;
    }

    if (this.containerBorderColor) {
      style.border = `1px solid ${ this.containerBorderColor }`;
    }

    return style;
  }

  getProcessStyles(): GeneralStyle {
    const style: GeneralStyle = { width: `${ this.value }%` };

    if (this.dynamicWidthPercent !== null) {
      style.width = `${ this.dynamicWidthPercent }%`;
    }

    if (this.processColor) {
      style.background = this.processColor;
    }

    return style;
  }

  getAnimateClass(): string[] {
    const animateClass = [ 'animate', 'process' ];

    if (this.swing) {
      animateClass.push('swing');
    }

    return animateClass;
  }

  onMouseDown(e: MouseEvent): void {
    const mouseDownX = e.clientX;
    const processWidth = (this.$refs.process as HTMLElement).offsetWidth;
    const containerWidth = (this.$refs.container as HTMLElement).offsetWidth;

    document.onmousemove = (subE: MouseEvent) => {
      let dynamicWidth = subE.clientX - mouseDownX + processWidth;
      if (dynamicWidth > containerWidth) {
        dynamicWidth = containerWidth;
      } else if (dynamicWidth < 0) {
        dynamicWidth = 0;
      }

      this.dynamicWidthPercent = dynamicWidth * 100 / containerWidth;
      this.$emit('input', this.dynamicWidthPercent);
    };

    document.onmouseup = (subE: MouseEvent) => {
      document.onmousemove = document.onmouseup = null;
    };
  }
}
</script>

<style lang="scss" scoped>
@import './TProcessBar.scss';
</style>