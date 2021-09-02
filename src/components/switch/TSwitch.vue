<template>
  <div class="__T_Switch_Container"
       :disabled="disabled">
    <slot name="label" v-if="rtl">
      <div style="margin-right: 12px;">{{ label }}</div>
    </slot>
    <label class="__T_Switch">
      <input type="checkbox"
             :checked="value"
             @input="onEmitInput($event.target.checked)">
      <span class="__T_Switch_Slider __T_Switch_Round"
            :disabled="disabled"></span>
    </label>
    <slot name="label" v-if="!rtl">
      <div style="margin-left: 12px;">{{ label }}</div>
    </slot>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit } from 'vue-property-decorator';

@Component({
  name: 'TSwitch'
})
export default class TSwitch extends Vue {
  @Prop({ type: Boolean }) value!: boolean;
  @Prop({ type: String }) label!: string;
  @Prop({ type: Boolean }) disabled!: boolean;
  @Prop({ type: Boolean }) rtl!: boolean;

  @Emit('input')
  onEmitInput(value: boolean) {
  }
}
</script>

<style lang="scss" scoped>
@import 'TSwitch.scss';
</style>
