<template>
  <div :style="getOuterContainerStyle()" v-click-outside="onClickOutSide">

    <div class="__T_Menu_Wrapper">
      <div class="__T_Menu_Bar"
           :disabled="disabled">
        <slot name="trigger" v-bind:on="on"></slot>
      </div>
      <div class="__T_Menu_Items_Wrapper"
           :style="getOptionsWrapperStyle()"
           v-if="showOptions">

        <slot name="header"></slot>

        <div style="overflow: auto;" :style="getMenuItemsStyle()">
          <div v-for="(item, index) in items"
               :key="index"
               :class="getMenuItemClass(item)"
               @click="onSelectOption(item)"
               :disabled="item.disabled"
               :title="tooltipOnHover ? item[itemText] : ''">
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

          </div>
        </div>

        <slot name="footer"></slot>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {VNode} from 'vue';
import {ITMenuItem, T_MENU_ITEM_COLOR_THEME} from '@/components/menu/TMenu';
import {GeneralStyle} from '@/components/general-style';
import TGIcon from '@/components/g-icon/TGIcon.vue';


@Component({
  name: "TMenu",
  components: {TGIcon}
})
export default class TMenu extends Vue {
  @Prop({ type: [String, Number, Boolean, Object] }) value!: string | number | boolean | object; // v-model part 1: bind the v-model of the component
  @Prop({ type: Array }) items!: ITMenuItem[];
  @Prop({ type: String, default: "text" }) itemText!: string;
  @Prop({ type: String, default: "value" }) itemValue!: string;
  @Prop({ type: Boolean }) returnObject!: boolean;

  @Prop({ type: [Number, String] }) width!: number | string;
  @Prop({ type: Number }) height!: number;
  @Prop({ type: Boolean }) block!: boolean;
  @Prop({ type: Boolean }) disabled!: boolean;

  @Prop({ type: [Number, String] }) optionsWidth!: number | string;

  @Prop({ type: Number, default: 300 }) maxHeight!: number; // maximum height of the content
  @Prop({ type: Boolean }) tooltipOnHover!: boolean; // add title attribute to item

  showOptions: boolean = false;

  on: any = {
    click: (event: MouseEvent) => {
      event.preventDefault();
      this.toggleShowOptions();
    }
  };

  onClickOutSide() {
    this.setShowOptions(false);
  }

  // v-model part 2: must do in order to accomplish v-model of this component
  @Emit('input')
  onEmitInput(item: ITMenuItem) {
    if (this.returnObject) {
      return item;
    } else {
      return item[this.itemValue] ? item[this.itemValue] : ""; // escape undefined value
    }
  }

  @Emit('change')
  onEmitChange(item: ITMenuItem) {
  }

  @Emit('toggleStatus')
  onEmitToggleStatus(status: boolean) {
  }

  toggleShowOptions() {
    if (!this.disabled) {
      this.setShowOptions(!this.showOptions);
    }
  }

  setShowOptions(show: boolean) {
    if (show) {
      this.closeAllMenus();
    }
    this.showOptions = show;
    this.onEmitToggleStatus(show);
  }

  onSelectOption(item: ITMenuItem) {
    this.onEmitChange(item);
    this.onEmitInput(item);
    this.setShowOptions(false);
  }

  getMenuItemClass(item: ITMenuItem): string {
    const classes: string[] = ["__T_Menu_Item"];
    switch (item.colorTheme) {
      case T_MENU_ITEM_COLOR_THEME.primary:
        classes.push("__T_Menu_Item_primary");
        break;
      case T_MENU_ITEM_COLOR_THEME.danger:
        classes.push("__T_Menu_Item_danger");
        break;
      default:
        classes.push("__T_Menu_Item_primary");
        break;
    }

    if (this.returnObject) {
      // active class will proc either: 1. same item 2. same itemValue
      if (this.value === item || (this.value as ITMenuItem)[this.itemValue] === item[this.itemValue]) {
        classes.push("__T_Menu_Item_Active");
      }
    } else {
      if (this.value === item[this.itemValue]) {
        classes.push("__T_Menu_Item_Active");
      }
    }
    return classes.join(" ");
  }

  getOuterContainerStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.width) {
      style.width = isNaN(+this.width) ? this.width as string : `${this.width}px`;
    }
    if (this.block) {
      style.width = `100%`;
    }
    return style;
  }

  getMenuItemsStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    style.maxHeight = `${this.maxHeight}px`;
    if (this.height) {
      style.height = `${this.height}px`;
    }
    return style;
  }

  getOptionsWrapperStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.optionsWidth) {
      style.width = isNaN(+this.optionsWidth) ? this.optionsWidth as string : `${this.optionsWidth}px`;
    }
    return style;
  }

  /**
   * If html contains multiple TSelects, I want to toggle all of them to false first so that TSelect doesn't overlap.
   */
  closeAllMenus(): void {
    let vueComponents: VNode[] | any | undefined = this.$vnode.componentInstance?.$parent;
    while (vueComponents !== undefined) {
      // loop over elements
      for (const component of vueComponents.$children) {
        // check if element is "TPopover"
        if (component.$vnode.componentOptions?.tag === "TMenu") {
          // toggle them to false
          (component.$vnode as any).child.setShowOptions(false);
        }
      }
      vueComponents = vueComponents.$parent;
    }
  }
}
</script>

<style scoped lang="scss">
@import "TMenu";
</style>
