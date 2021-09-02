<template>
  <div>
    <div class="__T_TextField_Title" v-if="title">
      {{ title }}
    </div>
    <div class="__T_TextField_Title" v-if="!!$slots.title">
      <slot name="title"></slot>
    </div>

    <div class="__T_TextField_Input_Wrapper" :style="getWrapperStyle()">
      <div class="__T_TextField_Prefix" v-if="prefix">
        {{ prefix }}
      </div>
      <div class="__T_TextField_Prefix" v-else-if="!!$slots.prefix">
        <slot name="prefix"></slot>
      </div>

      <input :value="value"
             :type="type"
             :placeholder="placeholder"
             :maxlength="maxlength"
             :class="getInputClass()"
             :style="getInputStyle()"
             :disabled="disabled"
             @input="onEmitInput($event.target.value)"
      />

      <div class="__T_TextField_Inset_Right_Position"
           :style="getInsetRightPositionStyle()">
        <slot name="right"></slot>
        <TGIcon color="#FF5555" v-if="error">icon-warning-color</TGIcon>
      </div>

      <div class="__T_TextField_Suffix" v-if="suffix">
        {{ suffix }}
      </div>
      <div class="__T_TextField_Suffix" v-else-if="!!$slots.suffix">
        <slot name="suffix"></slot>
      </div>
    </div>

    <div class="__T_TextField_Error_Message" v-if="error">
      {{ error }}
    </div>

    <div class="__T_TextField_Hint" v-else-if="hint">
      {{ hint }}
    </div>

  </div>

</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';
import TGIcon from '@/components/g-icon/TGIcon.vue';

@Component({
  name: "TTextField",
  components: {TGIcon}
})
export default class TTextField extends Vue {
  @Prop({ type: [String, Number] }) value!: string | number; // v-model part 1: bind the v-model of the component
  @Prop({ type: String }) title!: string;
  @Prop({ type: String, default: "text" }) type!: string;
  @Prop({ type: String }) placeholder!: string;
  @Prop({ type: Number }) maxlength!: number;
  @Prop({ type: Boolean }) disabled!: boolean;

  @Prop({ type: Number, default: 400 }) width!: number;
  @Prop({ type: Number, default: 36 }) height!: number;
  @Prop({ type: Boolean }) block!: boolean;

  @Prop({ type: String }) prefix!: string;
  @Prop({ type: String }) suffix!: string;
  @Prop({ type: String }) error!: string;
  @Prop({ type: String }) hint!: string;

  @Prop({ type: [Number, String] }) paddingRight!: number | string;

  // v-model part 2: must do in order to accomplish v-model of this component
  @Emit('input')
  onEmitInput(value: string | number) {
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

  getInputClass(): string {
    if (this.error) {
      return '__T_TextField_Input_Error';
    } else {
      return '__T_TextField_Input_General';
    }
  }

  getInputStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.hasPrefix()) {
      style.borderTopLeftRadius = `0`;
      style.borderBottomLeftRadius = `0`;
    }
    if (this.hasSuffix()) {
      style.borderTopRightRadius = `0`;
      style.borderBottomRightRadius = `0`;
    }
    if (this.paddingRight) {
      style.paddingRight = isNaN(+this.paddingRight) ? this.paddingRight as string : `${this.paddingRight}px`;
    } else {
      if (this.error) {
        style.paddingRight = `32px`;
      }
    }
    return style;
  }

  getInsetRightPositionStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    style.height = `${this.height}px`;
    return style;
  }

  hasPrefix(): boolean {
    return !!this.prefix || !!this.$slots.prefix;
  }

  hasSuffix(): boolean {
    return !!this.suffix || !!this.$slots.suffix;
  }
}
</script>

<style scoped lang="scss">
@import "TTextField";
</style>
