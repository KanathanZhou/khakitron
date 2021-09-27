<template>
  <button
      v-on="$listeners"
      :type="type"
      :class="[getClasses(), getButtonTheme(), getColorTheme(), getPresetClass()]"
      :style="[getStyle(), getStyleVariables()]"
  >
    <TLoader v-if="loading"
             absolute
             :xx-large="xxLarge"
             :x-large="xLarge"
             :large="large"
             :medium="medium"
             :small="small"
             :x-small="xSmall">
    </TLoader>
    <span class="__T_Button_content" :style="getSlotStyle()">
      <slot></slot>
    </span>
  </button>

  <!--  v-ripple="{ ripple, outlined }"-->

</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';
import TLoader from '@/components/loader/TLoader.vue';

enum T_BUTTON_COLOR_THEME {
  Basic = 'basic',
  Primary = 'primary',
  Secondary = 'secondary',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

@Component({
  name: "t-button",
  components: {TLoader}
})
export default class TButton extends Vue {
  @Prop({ type: String }) color!: T_BUTTON_COLOR_THEME;
  @Prop({ type: Boolean }) outlined!: boolean;
  @Prop({ type: Boolean }) text!: boolean;
  @Prop({ type: Boolean }) stroked!: boolean;
  @Prop({ type: Boolean }) iconButton!: boolean;
  @Prop({ type: Boolean }) block!: boolean;
  @Prop({ type: Number }) width!: number;
  @Prop({ type: [Number, String] }) minWidth!: number | string;
  @Prop({ type: Number }) height!: number;
  @Prop({ type: Boolean }) tile!: boolean;
  @Prop({ type: Boolean }) loading!: boolean;
  @Prop({ type: String, default: 'button' }) type!: string;
  @Prop({ type: Boolean, default: true }) ripple!: boolean;
  @Prop({ type: Boolean }) xxLarge!: boolean;
  @Prop({ type: Boolean }) xLarge!: boolean;
  @Prop({ type: Boolean }) large!: boolean;
  @Prop({ type: Boolean }) medium!: boolean;
  @Prop({ type: Boolean }) small!: boolean;
  @Prop({ type: Boolean }) xSmall!: boolean;

  getClasses(): string {
    const classes: string[] = [];
    if (this.block) {
      classes.push(`__T_Button_block`);
    }
    if (this.tile) {
      classes.push(`__T_Button_tile`);
    }
    if (this.iconButton) {
      classes.push(`__T_Button_icon`);
    }
    return classes.join(' ');
  }

  getStyle(): GeneralStyle {
    const tButtonStyle: GeneralStyle = {};
    if (this.height) {
      tButtonStyle.height = `${this.height}px`;
      tButtonStyle.minHeight = `${this.height}px`;
    }
    if (this.width) {
      tButtonStyle.width = `${this.width}px`;
      tButtonStyle.minWidth = `${this.width}px`;
    }
    if (this.minWidth) {
      tButtonStyle.minWidth = isNaN(+this.minWidth) ? this.minWidth as string : `${this.minWidth}px`;
    }
    return tButtonStyle;
  }

  getPresetClass(): string {
    const classes: string[] = [];
    if (this.xxLarge) {
      classes.push(`__T_Button_xxLarge`);
    } else if (this.xLarge) {
      classes.push(`__T_Button_xLarge`);
    } else if (this.large) {
      classes.push(`__T_Button_large`);
    } else if (this.medium) {
      classes.push(`__T_Button_medium`);
    } else if (this.small) {
      classes.push(`__T_Button_small`);
    } else if (this.xSmall) {
      classes.push(`__T_Button_xSmall`);
    } else {
      // default to small
      classes.push(`__T_Button_small`);
    }
    return classes.join(" ");
  }

  getButtonTheme(): string {
    if (this.outlined) {
      return '__T_Button_outlined';
    }
    if (this.text) {
      return '__T_Button_text';
    }
    if (this.stroked) {
      return '__T_Button_stroked';
    }
    return '__T_Button_default';
  }

  getColorTheme(): string {
    switch (this.color) {
      case T_BUTTON_COLOR_THEME.Basic:
        return '__T_Button_basic';
      case T_BUTTON_COLOR_THEME.Primary:
        return '__T_Button_primary';
      case T_BUTTON_COLOR_THEME.Secondary:
        return '__T_Button_secondary';
      case T_BUTTON_COLOR_THEME.Info:
        return '__T_Button_info';
      case T_BUTTON_COLOR_THEME.Success:
        return '__T_Button_success';
      case T_BUTTON_COLOR_THEME.Warning:
        return '__T_Button_warning';
      case T_BUTTON_COLOR_THEME.Danger:
        return '__T_Button_danger';
      default:
        return '__T_Button_primary';
    }
  }

  getStyleVariables(): any {
/*    return {
      '--khakitron-preset-primary-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['primary'] : this.$khakitron.theme['primary'],
      '--khakitron-preset-secondary-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['secondary'] : this.$khakitron.theme['secondary'],
      '--khakitron-preset-info-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['info'] : this.$khakitron.theme['info'],
      '--khakitron-preset-success-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['success'] : this.$khakitron.theme['success'],
      '--khakitron-preset-warning-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['warning'] : this.$khakitron.theme['warning'],
      '--khakitron-preset-danger-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['danger'] : this.$khakitron.theme['danger'],
      '--khakitron-preset-dark-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['dark'] : this.$khakitron.theme['dark'],
      '--khakitron-preset-medium-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['medium'] : this.$khakitron.theme['medium'],
      '--khakitron-preset-light-color': this.$parent.$khakitron ? this.$parent.$khakitron.theme['light'] : this.$khakitron.theme['light'],
    };*/
  }

  getSlotStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.loading) {
      style.visibility = "hidden";
    }
    return style;
  }

}
</script>

<style scoped lang="scss">
@import "TButton";
</style>
