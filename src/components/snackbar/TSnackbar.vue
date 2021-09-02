<template>
  <div 
    class="__T_snackbar_background"
    :style="getBackGroundStyle()"
  >
    <div 
      class="__T_snackbar_box"
      :style="getBoxStyle()"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { TSnackbarBackgroundStyle, TSnackbarBoxStyle } from './TSnackbar';

@Component({
  name: 'TSnackbar'
})
export default class TSnackbar extends Vue {
  @Prop({ type: Boolean, default: false }) bottom!: boolean;
  @Prop({ type: Boolean, default: false }) top!: boolean;
  @Prop({ type: Boolean, default: false }) left!: boolean;
  @Prop({ type: Boolean, default: false }) right!: boolean;
  @Prop({ type: Boolean, default: false }) centered!: boolean;
  @Prop({ type: Boolean, default: false }) vertical!: boolean;
  @Prop({ type: String }) color!: string;
  @Prop({ type: Number, default: 3000 }) timeout!: number;
  @Prop() value!: boolean;

  watchValueTimer: any = null;

  getBackGroundStyle(): TSnackbarBackgroundStyle {
    const style: TSnackbarBackgroundStyle = {};

    if (this.bottom) {
      style.alignItems = 'flex-end';
    }

    if (this.left) {
      style.justifyContent = 'start';
    }

    if (this.right) {
      style.justifyContent = 'end';
    }

    if (this.top) {
      style.alignItems = 'flex-start';
    }

    if (this.centered) {
      style.justifyContent = 'center';
    }

    if (this.vertical) {
      style.alignItems = 'center';
    }

    return style;
  }

  getBoxStyle(): TSnackbarBoxStyle {
    const style: TSnackbarBoxStyle = {
      background: '#fff'
    };

    if (this.color) {
      style.background = this.color;
    }

    if (!this.value) {
      style.opacity = 0;
    }

    return style;
  }

  debounceWatchValue() {
    if (!this.watchValueTimer) {
      this.watchValueTimer = setTimeout(() => {
        if (this.value) {
          this.$emit('input', false);
        }
      }, this.timeout);
    } else {
      clearTimeout(this.watchValueTimer);
      this.watchValueTimer = null;
    }
  }

  @Watch('value')
  watchValue() {
    this.debounceWatchValue();
  }
}
</script>

<style lang="scss" scoped>
@import "TSnackbar";
</style>