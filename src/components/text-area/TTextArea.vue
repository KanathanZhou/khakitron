<template>
  <div>
    <div class="__T_TextArea_Title" v-if="title">
      {{ title }}
    </div>
    <div class="__T_TextArea_Title">
      <slot name="title"></slot>
    </div>

    <div :style="getWrapperStyle()">
      <textarea
          v-bind="$attrs"
          :value="value"
          :placeholder="placeholder"
          :maxlength="maxlength"
          :rows="getRows()"
          :cols="cols"
          :disabled="disabled"
          :class="getTextAreaClass()"
          @input="onEmitInput($event.target.value)">
      </textarea>
    </div>

    <div class="__T_TextArea_Error_Message" v-if="error">
      {{ error }}
    </div>

    <div class="__T_TextArea_Hint" v-else-if="hint">
      {{ hint }}
    </div>

  </div>

<!--  <div style="text-align: left;">
    <div style="font-weight: bold; font-size: 14px;">
      <slot name="label"></slot>
    </div>
    <textarea
        v-bind="$attrs"
        :value="value"
        @input="onInput($event.target.value)"
        :placeholder="placeholder"
        :rows="rows"
        :cols="cols"
        :class="getClasses()"
        :style="getStyle()">
    </textarea>
  </div>-->
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';

const DEFAULT_ROWS: number = 3;

@Component({
  name: "TTextArea"
})
export default class TTextArea extends Vue {
  @Prop({ type: String }) value!: string; // v-model part 1: bind the v-model of the component
  @Prop({ type: String }) title!: string;
  @Prop({ type: String }) placeholder!: string;
  @Prop({ type: Number }) cols!: number;
  @Prop({ type: Number }) rows!: number;
  @Prop({ type: Number, default: 400 }) width!: number;
  @Prop({ type: Number }) height!: number;
  @Prop({ type: Boolean }) block!: boolean;
  @Prop({ type: Boolean }) noResize!: boolean;

  @Prop({ type: Number }) maxlength!: number;
  @Prop({ type: Boolean }) disabled!: boolean;

  @Prop({ type: String }) error!: string;
  @Prop({ type: String }) hint!: string;

  // v-model part 2: must do in order to accomplish v-model of this component
  @Emit('input')
  onEmitInput(value: any) {
  }

  getWrapperStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (!this.cols) {
      style.width = `${this.width}px`;
      if (this.block) {
        style.width = `100%`;
      }
    }
    if (!this.rows && this.height) {
      style.height = `${this.height}px`;
    }
    return style;
  }

  getTextAreaClass(): string {
    const classes: string[] = [];
    // if no resize is true, then disable resize functionality
    if (this.noResize) {
      classes.push("__T_TextArea_ResizeNone");
    }
    // if rows is not set and height is fixed, disable resize functionality
    if (!this.rows && this.height) {
      classes.push("__T_TextArea_ResizeNone");
    }
    if (this.error) {
      classes.push("__T_TextArea_Error");
    } else {
      classes.push("__T_TextArea_General");
    }
    return classes.join(" ");
  }

  getRows(): number {
    return this.rows || DEFAULT_ROWS;
  }
}
</script>

<style scoped lang="scss">
@import "TTextArea";
</style>
