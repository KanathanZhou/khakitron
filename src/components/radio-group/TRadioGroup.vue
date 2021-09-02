<template>
  <div :class="getRadioGroupClass()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import {VNode} from 'vue';

@Component({
  name: "TRadioGroup"
})
export default class TRadioGroup extends Vue {
  @Prop({ type: [String, Boolean, Number] }) value!: string | boolean | number;
  @Prop({ type: Boolean }) horizontal!: boolean;
  @Prop({ type: Boolean }) disabled!: boolean;

  radioGroupIndex: number = 0; // the index of the radio group exists in the page

  mounted() {
    this.assignSerialNumberForGroupButtons();
    this.getDisabledStatus();
  }

  // !! if value changed inside constructor, the watch wouldn't catch it
  @Watch('value')
  onValueChange() {
    this.selectVModelRadio();
  }

  // TODO: we may have a better way to do this, but for now it works just fine
  assignSerialNumberForGroupButtons(): void {
    let vueComponents: VNode[] | any | undefined = this.$vnode.componentInstance?.$parent;
    while (vueComponents !== undefined) {
      // loop over elements
      for (let i = 0; i < vueComponents.$children.length; i++) {
        // check if element is "TRadioGroup"
        if (vueComponents.$children[i].$vnode.componentOptions?.tag === "TRadioGroup") {
          (vueComponents.$children[i].$vnode as any).child.setRadioGroupIndex(i);
        }
      }
      vueComponents = vueComponents.$parent;
    }

    const defaultSlotComponents: VNode[] | undefined = this.$slots.default;
    // retrieve whatever inside default slot components
    if (defaultSlotComponents) {
      // loop over elements
      for (const [i, element] of defaultSlotComponents.entries()) {
        // check if element is "TRadioButton"
        if (element.componentOptions?.tag === "TRadioButton") {
          (element as any).child.setSerialNumber(this.radioGroupIndex + 520);
        }
      }
    }
  }

  @Emit('input')
  onEmitInput(value: string | boolean | number) {
  }

  getDisabledStatus() {
    if (this.disabled) {
      const defaultSlotComponents: VNode[] | undefined = this.$slots.default;
      // retrieve whatever inside default slot components
      if (defaultSlotComponents) {
        // loop over elements
        for (const [i, element] of defaultSlotComponents.entries()) {
          // check if element is "TRadioButton"
          if (element.componentOptions?.tag === "TRadioButton") {
            (element as any).child.disableTRadioButton();
          }
        }
      }
    }
  }

  getRadioGroupClass(): string {
    const classes: string[] = [`__T_RadioGroup`];
    if (this.horizontal) {
      classes.push("__T_RadioGroup_horizontal");
    } else {
      classes.push("__T_RadioGroup_vertical");
    }
    return classes.join(" ");
  }

  setRadioGroupIndex(index: number): void {
    this.radioGroupIndex = index;
  }

  selectVModelRadio() {
    const defaultSlotComponents: VNode[] | undefined = this.$slots.default;
    // retrieve whatever inside default slot components
    if (defaultSlotComponents) {
      // loop over elements
      for (const [i, element] of defaultSlotComponents.entries()) {
        // check if element is "TRadioButton"
        if (element.componentOptions?.tag === "TRadioButton") {
          // get propsData in the element
          const propsData: any = element.componentOptions.propsData;
          if (propsData.value === this.value) {
            // activate this tab
            this.$nextTick(() => {
              (element.componentInstance as any).selectRadioButton();
            });
          } else {
            // deactivate this tab
            this.$nextTick(() => {
              (element.componentInstance as any).deselectRadioButton();
            });
          }
        }
      }
    }
  }

/*  activateRadio(radioButtonIndex: number) {
    // retrieve whatever inside default slot components
    const radioButtonsList: VNode[] | any | undefined = this.$slots.default;
    if (radioButtonsList) {
      // loop over elements
      for (const [i, element] of radioButtonsList.entries()) {
        // check if element is "TRadioButton"
        if (element.componentOptions?.tag === "TRadioButton") {
          if (radioButtonIndex === i) {
            (element as any).child.selectRadioButton();
          }
        }
      }
    }
  }*/

}
</script>

<style scoped lang="scss">
@import "TRadioGroup";
</style>
