<template>
  <div>
    <label class="__T_CheckBox_container"
           :disabled="disabled">
      {{ label }}
      <input type="checkbox"
             :checked="value"
             @input="onEmitInput($event.target.checked)">
      <span :class="getCheckmarkClass()"
            :disabled="disabled"></span>
    </label>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';

export enum CheckBoxType {
  default,
  indeterminate
}

@Component({
  name: "TCheckBox"
})
export default class TCheckBox extends Vue {
  @Prop({ type: Boolean }) value!: boolean;
  @Prop({ type: String }) label!: string;
  @Prop({ type: Boolean }) disabled!: boolean;
  @Prop({ type: Boolean }) indeterminate!: boolean;

  // TODO: this component needs refactor
  type: CheckBoxType = CheckBoxType.default;

  mounted() {
    if (this.indeterminate) {
      this.type = CheckBoxType.indeterminate;
    }
  }

  @Emit('input')
  onEmitInput(value: boolean) {
    if (this.type === CheckBoxType.indeterminate) {
      this.type = CheckBoxType.default;
    }
    return value;
  }

  getCheckmarkClass(): string {
    const classes: string[] = ['__T_CheckBox_checkmark'];
    if (this.type === CheckBoxType.indeterminate) {
      classes.push("__T_CheckBox_indeterminate");
    } else {
      classes.push("__T_CheckBox_default");
    }
    return classes.join(" ");
  }

}
</script>

<style scoped lang="scss">
@import "TCheckBox";
</style>
