<template>
  <div>
    <label class="__T_RadioButton_container"
           :disabled="disableStatus">
      <slot name="label"></slot>
      <span v-if="!$slots.label">{{ label }}</span>
      <input type="radio"
             :checked="checkStatus"
             :name="`_TRadio_${serialNumber}`"
             @input="selectRadioButton()">
      <span class="__T_RadioButton_radio"
            :disabled="disableStatus"></span>
    </label>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue, Watch} from 'vue-property-decorator';

@Component({
  name: "TRadioButton"
})
export default class TRadioButton extends Vue {
  @Prop({ type: String }) label!: string;
  @Prop({ type: [String, Boolean, Number] }) value!: string | number | boolean; // for radio group v-model binding value
  @Prop({ type: Boolean }) disabled!: boolean;

  parentRadioGroup: any; // can be nothing if user didn't put TTabBar around
  checkStatus: boolean = false;
  disableStatus: boolean = false;

  // serial number is for radio name to grouping the radio buttons
  // initialize it with a random number (1 - 1000) in case user aren't putting <TRadioGroup> around them
  serialNumber: number = Math.floor(Math.random() * 1000);

  created() {
    this.getParentRadioGroup();
    this.getRadioButtonPreselectingStatus();
  }

  @Watch('disabled', { immediate: true })
  onChangeDisabled() {
    this.disableStatus = this.disabled;
  }

  getParentRadioGroup() {
    if (this.$options.parent?.$vnode.componentOptions?.tag === "TRadioGroup") {
      this.parentRadioGroup = this.$options.parent;
    }
  }

  getRadioButtonPreselectingStatus() {
    if (this.parentRadioGroup?.value === this.value) {
      this.selectRadioButton();
    }
  }

  selectRadioButton() {
    this.checkStatus = true;
    this.parentRadioGroup?.onEmitInput(this.value);
  }

  deselectRadioButton() {
    this.checkStatus = false;
  }

  disableTRadioButton() {
    this.disableStatus = true;
  }

  setSerialNumber(serialNumber: number): void {
    this.serialNumber = serialNumber;
  }
}
</script>

<style scoped lang="scss">
@import "TRadioButton";
</style>
