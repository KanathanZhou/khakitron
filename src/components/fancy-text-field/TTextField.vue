<template>
  <div style="position: relative; display: flex; justify-content: flex-start;">
    <div class="__T_fancy_textfield_label"
         :style="getLabelStyle()">
      <slot name="label"></slot>
    </div>
    <div class="__T_fancy_textfield_validator">
      <slot name="validator"></slot>
    </div>
    <input
        :value="value"
        :type="type"
        @input="onInput($event.target.value)"
        @focus="onInputFocus()"
        @blur="onInputBlur()"
        @mouseenter="onMouseEnter()"
        @mouseleave="onMouseLeave()"
        :class="getClasses()"
        :style="getStyle()"
        autocomplete="off"
    >
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';

@Component({
  name: "TTextField"
})
export default class TTextField extends Vue {
  @Prop({ type: String }) value!: string; // v-model part 1: bind the v-model of the component
  @Prop({ type: Number }) width!: number;
  @Prop({ type: Boolean }) block!: number;
  @Prop({ type: String }) borderColor!: string;
  @Prop({ type: String }) type!: string;

  focused: boolean = false;
  mouseIn: boolean = false;

  // v-model part 2: must do in order to accomplish v-model of this component
  @Emit('input')
  onInput(value: any) {
    return value;
  }

  @Emit('focus')
  onInputFocus() {
    this.focused = true;
  }

  @Emit('blur')
  onInputBlur() {
    this.focused = false;
  }

  @Emit('mouseenter')
  onMouseEnter() {
    this.mouseIn = true;
  }

  @Emit('mouseleave')
  onMouseLeave() {
    this.mouseIn = false;
  }

  @Emit('onLabelUpOrDown')
  onLabelUpOrDown(upOrDown: boolean) {
    return upOrDown;
  }

  getLabelStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    style.background = this.mouseIn ? `white` : `rgb(252, 252, 251)`;
    if (this.focused) {
      // the input is focused, the label must be up.
      this.onLabelUpOrDown(true);
      style.fontSize = `10px`;
      style.padding = `6px 36px 10px 12px`;
      style.transition = `background 270ms cubic-bezier(0.4, 0, 0.2, 1), padding 270ms cubic-bezier(0.4, 0, 0.2, 1), font-size 270ms cubic-bezier(0.4, 0, 0.2, 1)`;
    } else {
      if (this.value && this.value.trim().length > 0) {
        // the input has value inside, the label must be up
        this.onLabelUpOrDown(true);
        style.fontSize = `10px`;
        style.padding = `6px 36px 10px 12px`;
        style.transition = `background 270ms cubic-bezier(0.4, 0, 0.2, 1), padding 270ms cubic-bezier(0.4, 0, 0.2, 1), font-size 270ms cubic-bezier(0.4, 0, 0.2, 1)`;
      } else {
        if (this.mouseIn) {
          // the input has mouse entered, the label must be up
          this.onLabelUpOrDown(true);
          style.fontSize = `10px`;
          style.padding = `6px 36px 10px 12px`;
          style.transition = `background 270ms cubic-bezier(0.4, 0, 0.2, 1), padding 270ms cubic-bezier(0.4, 0, 0.2, 1), font-size 270ms cubic-bezier(0.4, 0, 0.2, 1)`;
        } else {
          this.onLabelUpOrDown(false);
          style.fontSize = `12px`;
          style.padding = `16px 36px 10px 12px`;
          style.transition = `background 270ms cubic-bezier(0.4, 0, 0.2, 1), padding 270ms cubic-bezier(0.4, 0, 0.2, 1), font-size 270ms cubic-bezier(0.4, 0, 0.2, 1)`;
        }
      }
    }
    return style;
  }

  getStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.width) {
      style.width = `${this.width}px`;
    }
    if (this.borderColor) {
      style.borderColor = this.borderColor;
    }
    return style;
  }

  getClasses(): string {
    const classes: string[] = ['__T_fancy_textfield'];
    if (this.block) {
      classes.push(`__T_fancy_textfield_block`);
    }
    return classes.join(' ');
  }

}
</script>

<style scoped lang="scss">
@import "TTextField";
</style>
