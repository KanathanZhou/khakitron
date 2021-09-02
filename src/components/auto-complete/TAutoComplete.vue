<template>
  <div :class="getClassNames()">
    <!-- mask -->
    <div class="__T_auto_complete_mask" v-if="disabled"></div>

    <!-- label -->
    <span class="__T_auto_complete_label" v-if="!hideLabel">{{ label }}</span>
    <span class="__T_auto_complete_label __T_auto_complete_placeholder" v-if="!label && placeholder && !selectedDataText">{{ placeholder }}</span>

    <!-- input -->
    <div class="__T_auto_complete_select_field">
      <input type="text" :style="getTextStyle()" v-model="selectedDataText" @click="onClickInputField" @input="onTextInput">
      <div class="iconBox">
        <!-- TODO. 当前@clik直接绑定到TIcon组件时不生效，暂时以当前方式处理，亟待找到原因 -->
        <div class="TIconArrow" @click="onClickInputField">
          <TIcon>arrow_drop_down</TIcon>
        </div>
        <!-- TODO. 当前@clik直接绑定到TIcon组件时不生效，暂时以当前方式处理，亟待找到原因 -->
        <div class="TIconCancel" @click="onClickCancelBtn" v-if="selectedDataText && clear">
          <TIcon>cancel</TIcon>
        </div>
      </div>
    </div>

    <!-- select menu -->
    <div class="__T_auto_complete_select_menu">
      <div class="__T_auto_complete_select_item" v-for="(item, index) in filterItems" :key="index" @click="onSelectItem(item)">{{ item.text }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';
import { ITAutoComplete } from './TAutoComplete';
import TIcon from '../icon';
import { GeneralStyle } from '../general-style';

@Component({
  name: 'TAutoComplete',
  components: {
    TIcon
  }
})
export default class TAutoComplete extends Vue {
  @Prop({ type: String }) label!: string;
  @Prop() value!: any;
  @Prop({ type: Boolean, default: false }) hideLabel!: boolean;
  @Prop({ type: Array }) items!: ITAutoComplete[];
  @Prop({ type: String }) placeholder!: string;
  @Prop({ type: Boolean, default: false }) clear!: boolean;
  @Prop({ type: Boolean, default: false }) disabled!: boolean;
  @Prop({ type: Boolean, default: false }) returnObject!: boolean;
  @Prop({ type: [Number, String] }) width!: number | string;

  isOnFocus: boolean = false;
  isSelectNull: boolean = true;
  selectedData: ITAutoComplete | undefined = undefined;
  selectedDataText: string = '';

  mounted() {
    document.body.addEventListener('click', () => {
      if (!this.selectedDataText) {
        this.isOnFocus = false;
      }
    });
  }

  onClickInputField(ev: any) {
    this.isOnFocus = true;
    ev.stopPropagation();
  }

  onSelectItem(item: ITAutoComplete) {
    this.selectedData = item;
    this.selectedDataText = this.selectedData ? this.selectedData.text : '';
    this.$emit('input', this.returnObject ? item : item.value);
    this.isSelectNull = false;
    this.isOnFocus = false;
    this.onReturnSelectItem(this.returnObject ? item : item.value as string);
  }

  onClickCancelBtn() {
    this.selectedData = undefined;
    this.selectedDataText = '';
    this.$emit('input', undefined);
    this.isOnFocus = false;
    this.isSelectNull = true;
    this.returnClickClearBtn();
  }

  get allItems(): ITAutoComplete[] {
    if (this.items) {
      this.selectedData = this.items.find((item: ITAutoComplete) => item.value === this.value);
      if (this.selectedData) {
        this.selectedDataText = this.selectedData.text;
        this.isSelectNull = false;
      }
    }
    return this.items;
  }

  get filterItems(): ITAutoComplete[] {
    let filterItems: ITAutoComplete[] = [];
    if (this.selectedDataText) {
      this.allItems.forEach((item: ITAutoComplete) => {
        if (item.text.indexOf(this.selectedDataText) !== -1) {
          filterItems.push(item);
        }
      });
    } else {
      filterItems = this.allItems;
    }
    return filterItems;
  }

  onTextInput(e: any) {
    this.returnTextInput(e.target.value as string);
  }

  getClassNames(): string[] {
    const classList: string[] = ['__T_auto_complete'];

    if (this.isOnFocus) {
      classList.push('focus');
    }
    if (!this.isSelectNull) {
      classList.push('select');
    }
    if (this.disabled) {
      classList.push('disabled');
    }

    return classList;
  }

  getTextStyle(): GeneralStyle {
    const style = { width: 'auto' };

    if (this.width) {
      if (typeof this.width === 'string') {
        style.width = Number(this.width.split('px')[0]) - 16 > 0 ? `${ Number(this.width.split('px')[0]) - 16 }px` : 'auto';
      } else if (typeof this.width === 'number') {
        style.width = this.width - 16 > 0 ? `${ this.width - 16 }px` : 'auto';
      }
    }

    return style;
  }

  @Emit('on-select-item')
  onReturnSelectItem(item: string | ITAutoComplete) {}

  @Emit('on-click-clear-btn')
  returnClickClearBtn() {}

  @Emit('on-text-input')
  returnTextInput(words: string) {}
}
</script>

<style lang="scss" scoped>
@import 'TAutoComplete.scss';
</style>
