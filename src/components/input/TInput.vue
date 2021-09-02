<template>
  <div :class="getClassName()">
    <!-- __T_input_mask -->
    <div class="__T_input_mask" v-if="disabled"></div>

    <span class="__T_input_label">{{ label }}</span>
    <div class="__T_input_text">
      <input type="text" :style="getTextStyle()" :value="inputInfo" @input="onInput" @focus="onInputFocus" @blur="onInputBlur">
      <!-- TODO. 当前@clik直接绑定到TIcon组件时不生效，暂时以当前方式处理，亟待找到原因 -->
      <div class="__T_input_cancel_btn" v-if="inputInfo && clear" @click="onClickClearBtn">
        <TIcon>cancel</TIcon>
      </div>
      <div style="width: 20px;" v-else></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import TIcon from '../icon';
import { GeneralStyle } from '../general-style';

@Component({
  name: 'TInput',
  components: {
    TIcon
  }
})
export default class TInput extends Vue {
  @Prop({ type: String }) label!: string;
  @Prop() value!: string;
  @Prop({ type: Boolean, default: false }) clear!: boolean;
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: [Number, String] }) width!: number | string;

  isOnFocus: boolean = false;
  isInputNull: boolean = true;
  inputWord: string = '';

  get inputInfo(): string {
    this.isInputNull = this.value || this.inputWord ? false : true;
    return this.value || this.inputWord;
  }

  onInput(e: any) {
    this.inputWord = e.target.value;
    this.$emit('input', e.target.value);
  }

  onInputFocus() {
    this.isOnFocus = true;
    this.isInputNull = false;
  }

  onInputBlur() {
    this.isOnFocus = false;
    this.isInputNull = this.inputInfo ? false : true;
  }

  onClickClearBtn() {
    this.isInputNull = true;
    this.inputWord = '';
    this.$emit('input', '');
    this.returnClickClearBtn();
  }

  getClassName(): string[] {
    const className = ['__T_input'];

    if (this.isOnFocus) {
      className.push('focus');
    }
    if (!this.isInputNull) {
      className.push('input');
    }
    if (this.disabled) {
      className.push('disabled');
    }

    return className;
  }

  getTextStyle(): GeneralStyle {
    const style = { width: '100%' };

    if (this.width) {
      if (typeof this.width === 'string') {
        style.width = Number(this.width.split('px')[0]) - 16 > 0 ? `${ Number(this.width.split('px')[0]) - 16 }px` : '100%';
      } else if (typeof this.width === 'number') {
        style.width = this.width - 16 > 0 ? `${ this.width - 16 }px` : '100%';
      }
    }

    return style;
  }

  @Emit('on-click-clear-btn')
  returnClickClearBtn() {}
}
</script>

<style lang="scss" scoped>
@import 'TInput.scss';
</style>