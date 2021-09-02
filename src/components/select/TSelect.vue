<template>
  <div>
    <div class="__T_Select_Title" v-if="title">
      {{ title }}
    </div>
    <div class="__T_Select_Title" v-if="$slots.title">
      <slot name="title"></slot>
    </div>
    <div class="__T_Select_Wrapper"
         :style="getWrapperStyle()"
         v-click-outside="onClickOutSide">
      <div :class="getSelectBarClass()"
           @click="toggleOptions()"
           :disabled="disabled">

        <slot name="inputText">
          <div v-html="displayTextHTML"></div>
        </slot>

        <div style="display: flex; align-items: center;">
          <slot name="end"></slot>
          <TGIcon :color="disabled ? '#A8B0B7': ''" size="12" v-if="showOptions">icon-up-color</TGIcon>
          <TGIcon :color="disabled ? '#A8B0B7': ''" size="12" v-if="!showOptions">icon-down-color</TGIcon>
        </div>
      </div>


      <div class="__T_Select_Items_Wrapper"
           v-if="showOptions">

        <slot name="header"></slot>

        <div style="overflow: auto;"
             :style="getSelectItemsStyle()">
          <div v-for="(item, index) in items"
               :key="index"
               :class="getSelectItemClass(item)"
               @click="onSelectOption(item)"
               :disabled="item.disabled">
            <TGIcon :color="disabled ? '#A8B0B7': ''"
                    size="16"
                    style="margin-right: 12px;"
                    v-if="item.icon">
              {{ item.icon }}
            </TGIcon>

            <slot name="optionText"
                  v-bind:item="item"
                  v-bind:index="index">
              <div>{{ item[itemText] }}</div>
            </slot>

            <div class="__T_Select_Option_Right_Slot"
                 :style="getInsetRightPositionStyle()">
              <slot name="right"
                    v-bind:item="item"
                    v-bind:index="index">
              </slot>
            </div>

          </div>
        </div>

        <slot name="footer"></slot>

      </div>


    </div>

    <div class="__T_Select_Error_Message" v-if="error">
      {{ error }}
    </div>

    <div class="__T_Select_Hint" v-else-if="hint">
      {{ hint }}
    </div>

  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop, Emit, Watch} from 'vue-property-decorator';
import { ITSelectItem } from './TSelect';
import TIcon from '../icon';
import {GeneralStyle} from '@/components/general-style';
import {VNode} from 'vue';
import TGIcon from '@/components/g-icon/TGIcon.vue';

@Component({
  name: 'TSelect',
  components: {
    TGIcon,
    TIcon
  }
})
export default class TSelect extends Vue {
  @Prop({ type: [String, Number, Boolean, Object] }) value!: string | number | boolean | ITSelectItem; // v-model part 1: bind the v-model of the component
  @Prop({ type: Array }) items!: ITSelectItem[];
  @Prop({ type: String, default: "text" }) itemText!: string;
  @Prop({ type: String, default: "value" }) itemValue!: string;
  @Prop({ type: Boolean }) returnObject!: boolean;

  @Prop({ type: String }) title!: string;
  @Prop({ type: String }) placeholder!: string;

  @Prop({ type: Number, default: 400 }) width!: number;
  @Prop({ type: Number, default: 36 }) height!: number;
  @Prop({ type: Boolean }) block!: boolean;
  @Prop({ type: Boolean }) disabled!: boolean;

  @Prop({ type: Number, default: 300 }) maxSelectionHeight!: number; // maximum height of the selection content

  @Prop({ type: String }) error!: string;
  @Prop({ type: String }) hint!: string;

  showOptions: boolean = false;
  selectedItem: ITSelectItem | undefined = undefined; // create a new variable for selectedItem for O(1)
  displayTextHTML: string = "";

  // !! if value changed inside constructor, the watch wouldn't catch it
  @Watch('value', { immediate: true, deep: true })
  onValueChange() {
    if (this.returnObject) {
      if (this.selectedItem !== this.value) {
        if (this.items && this.items.length) {
          this.selectedItem = this.items.find((item: ITSelectItem) => item === this.value);
        } else {
          this.selectedItem = undefined;
        }
      }
    } else {
      if (!this.selectedItem || this.selectedItem[this.itemValue] !== this.value) {
        if (this.items && this.items.length) {
          this.selectedItem = this.items.find((item: ITSelectItem) => item[this.itemValue] === this.value);
        } else {
          this.selectedItem = undefined;
        }
      }
    }
    this.getDisplayText();
  }

  @Watch('placeholder')
  onPlaceholderChange() {
    this.getDisplayText();
  }

  // v-model part 2: must do in order to accomplish v-model of this component
  @Emit('input')
  onEmitInput(item: ITSelectItem) {
    if (this.returnObject) {
      return item;
    } else {
      return item[this.itemValue] ? item[this.itemValue] : ""; // escape undefined value
    }
  }

  getWrapperStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    style.width = `${this.width}px`;
    style.height = `${this.height}px`;
    if (this.block) {
      style.width = `100%`;
    }
    return style;
  }

  getSelectBarClass(): string {
    const classes: string[] = ["__T_Select_Bar"];
    if (this.error) {
      classes.push("__T_Select_Bar_Error");
    }
    return classes.join(" ");
  }

  setShowOptions(show: boolean) {
    if (show) {
      this.closeAllSelects();
    }
    this.showOptions = show;
  }

  toggleOptions() {
    if (!this.disabled) {
      this.setShowOptions(!this.showOptions);
    }
  }

  onSelectOption(item: ITSelectItem) {
    this.onEmitInput(item);
    this.selectedItem = item;
    this.getDisplayText();
    this.setShowOptions(false);
  }

  getDisplayText(): void {
    if (this.selectedItem) {
      if (this.selectedItem[this.itemText]) {
        this.displayTextHTML = this.selectedItem[this.itemText] as string;
      } else {
        this.displayTextHTML = `<span class="__T_Select_Bar_placeholder">${this.placeholder ? this.placeholder : ""}</span>`;
      }
    } else {
      this.displayTextHTML = `<span class="__T_Select_Bar_placeholder">${this.placeholder ? this.placeholder : ""}</span>`;
    }
  }

  getSelectItemsStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    style.maxHeight = `${this.maxSelectionHeight}px`;
    return style;
  }

  getSelectItemClass(item: ITSelectItem): string {
    const classes: string[] = ["__T_Select_Item"];
    if (this.returnObject) {
      if (this.value === item) {
        classes.push("__T_Select_Item_Active");
      }
    } else {
      if (this.value === item[this.itemValue]) {
        classes.push("__T_Select_Item_Active");
      }
    }
    return classes.join(" ");
  }

  /**
   * If html contains multiple TSelects, I want to toggle all of them to false first so that TSelect doesn't overlap.
   */
  closeAllSelects(): void {
    let vueComponents: VNode[] | any | undefined = this.$vnode.componentInstance?.$parent;
    while (vueComponents !== undefined) {
      // loop over elements
      for (const component of vueComponents.$children) {
        // check if element is "TSelect"
        if (component.$vnode.componentOptions?.tag === "TSelect") {
          // toggle them to false
          (component.$vnode as any).child.setShowOptions(false);
        }
      }
      vueComponents = vueComponents.$parent;
    }
  }

  onClickOutSide() {
    this.setShowOptions(false);
  }

  getInsetRightPositionStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    style.height = `${this.height}px`;
    return style;
  }
}
</script>

<style lang="scss">
@import 'TSelect.scss';
</style>
