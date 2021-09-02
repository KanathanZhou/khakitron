<template>
  <div :class="[getChipTheme(), getColorTheme(), getChipPresetClass(), getChipShape()]">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

enum T_Chip_COLOR_THEME {
  Gray = 'gray',
  Basic = 'basic',
  Primary = 'primary',
  Secondary = 'secondary',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
  Danger = 'danger',
}

@Component({
  name: "TChip"
})
export default class TChip extends Vue {
  @Prop({ type: String }) colorTheme!: T_Chip_COLOR_THEME;
  @Prop({ type: Boolean }) contrast!: boolean;
  @Prop({ type: Boolean }) outlined!: boolean;
  @Prop({ type: Boolean }) stroked!: boolean;
  @Prop({ type: Boolean }) small!: boolean;
  @Prop({ type: Boolean }) tag!: boolean;

  getChipShape(): string {
    if (this.tag) {
      return `__T_Chip_tag_shape`;
    } else {
      return `__T_Chip_default_shape`;
    }
  }

  getChipPresetClass(): string {
    if (this.small) {
      return "__T_Chip_small";
    }
    return "__T_Chip_normal";
  }

  getChipTheme(): string {
    if (this.contrast) {
      return '__T_Chip_contrast';
    }
    if (this.outlined) {
      return '__T_Chip_outlined';
    }
    if (this.stroked) {
      return '__T_Chip_stroked';
    }
    return '__T_Chip_default';
  }

  getColorTheme(): string {
    switch (this.colorTheme) {
      case T_Chip_COLOR_THEME.Gray:
        return '__T_Chip_gray';
      case T_Chip_COLOR_THEME.Basic:
        return '__T_Chip_basic';
      case T_Chip_COLOR_THEME.Primary:
        return '__T_Chip_primary';
      case T_Chip_COLOR_THEME.Secondary:
        return '__T_Chip_secondary';
      case T_Chip_COLOR_THEME.Info:
        return '__T_Chip_info';
      case T_Chip_COLOR_THEME.Success:
        return '__T_Chip_success';
      case T_Chip_COLOR_THEME.Warning:
        return '__T_Chip_warning';
      case T_Chip_COLOR_THEME.Danger:
        return '__T_Chip_danger';
      default:
        return '__T_Chip_gray';
    }
  }
}
</script>

<style scoped lang="scss">
@import "TChip";
</style>
