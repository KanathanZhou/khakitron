<template>
  <div v-click-outside="onClickOutSide">
    <div :class="getTooltipClass()">
      <slot name="trigger" v-bind:on="on"></slot>
      <div class="__T_Tooltip_Content_Wrapper"
           :class="getTooltipPositioningClass()"
           v-if="showTooltip">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

enum TOOLTIP_POP_METHOD {
  Hover,
  Click
}

@Component({
  name: "TTooltip"
})
export default class TTooltip extends Vue {
  @Prop({ type: Boolean }) clickToShow!: boolean;
  @Prop({ type: Boolean }) top!: boolean;
  @Prop({ type: Boolean }) bottom!: boolean;
  @Prop({ type: Boolean }) left!: boolean;
  @Prop({ type: Boolean }) right!: boolean;
  @Prop({ type: Boolean }) bottomLeft!: boolean;
  @Prop({ type: Boolean }) bottomRight!: boolean;
  @Prop({ type: Boolean }) topLeft!: boolean;
  @Prop({ type: Boolean }) topRight!: boolean;
  @Prop({ type: Boolean }) leftTop!: boolean;
  @Prop({ type: Boolean }) leftBottom!: boolean;
  @Prop({ type: Boolean }) rightTop!: boolean;
  @Prop({ type: Boolean }) rightBottom!: boolean;

  popMethod: TOOLTIP_POP_METHOD = TOOLTIP_POP_METHOD.Hover;
  showTooltip: boolean = false;

  on: any = {
    click: (event: MouseEvent) => {
      event.preventDefault();
      if (this.isPopMethodClick()) {
        if (this.isShown()) {
          this.setShowTooltip(false);
        } else {
          this.setShowTooltip(true);
        }
      }
    },
    mouseenter: (event: MouseEvent) => {
      event.preventDefault();
      if (this.isPopMethodHover()) {
        this.setShowTooltip(true);
      }
    },
    mouseleave: (event: MouseEvent) => {
      event.preventDefault();
      if (this.isPopMethodHover()) {
        this.setShowTooltip(false);
      }
    }
  };

  created() {
    if (this.clickToShow) {
      this.popMethod = TOOLTIP_POP_METHOD.Click;
    } else {
      this.popMethod = TOOLTIP_POP_METHOD.Hover;
    }
  }

  setShowTooltip(show: boolean): void {
    this.showTooltip = show;
  }

  onClickOutSide(): void {
    if (this.isPopMethodClick()) {
      this.setShowTooltip(false);
    }
  }

  isPopMethodHover(): boolean {
    return this.popMethod === TOOLTIP_POP_METHOD.Hover;
  }

  isPopMethodClick(): boolean {
    return this.popMethod === TOOLTIP_POP_METHOD.Click;
  }

  isShown(): boolean {
    return this.showTooltip;
  }

  getTooltipClass(): string {
    const classes: string[] = ['__T_Tooltip'];

    if (this.top || this.bottom) {
      classes.push('__T_Tooltip_center_horizontally');
    }
    if (this.left || this.right) {
      classes.push('__T_Tooltip_center_vertically');
    }
    return classes.join(' ');
  }

  getTooltipPositioningClass(): string {
    const classes: string[] = [];
    if (this.top) {
      classes.push('__T_Tooltip_top');
    } else if (this.topLeft) {
      classes.push('__T_Tooltip_top_left');
    } else if (this.topRight) {
      classes.push('__T_Tooltip_top_right');
    } else if (this.bottom) {
      classes.push('__T_Tooltip_bottom');
    } else if (this.bottomLeft) {
      classes.push('__T_Tooltip_bottom_left');
    } else if (this.bottomRight) {
      classes.push('__T_Tooltip_bottom_right');
    } else if (this.left) {
      classes.push('__T_Tooltip_left');
    } else if (this.leftTop) {
      classes.push('__T_Tooltip_left_top');
    } else if (this.leftBottom) {
      classes.push('__T_Tooltip_left_bottom');
    } else if (this.right) {
      classes.push('__T_Tooltip_right');
    } else if (this.rightTop) {
      classes.push('__T_Tooltip_right_top');
    } else if (this.rightBottom) {
      classes.push('__T_Tooltip_right_bottom');
    }
    return classes.join(' ');
  }
}
</script>

<style scoped lang="scss">
@import "TTooltip";
</style>
