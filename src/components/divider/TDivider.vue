<template>
  <div :class="getClass()"
       :style="getStyle()">
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {TDividerStyle} from '@/components/divider/TDivider';

@Component({
  name: "TDivider"
})
export default class TDivider extends Vue {
  @Prop() color!: string;
  @Prop() thickness!: number;
  @Prop() type!: string;
  @Prop() marginTop!: number;
  @Prop() marginBottom!: number;

  getStyle(): TDividerStyle {
    const style: TDividerStyle = {};
    if (this.color) {
      style.borderColor = this.color;
    }
    if (this.thickness) {
      style.borderWidth = `${this.thickness}px`;
    }
    if (this.type) {
      style.borderTopStyle = this.type;
    }
    if (this.marginTop) {
      style.marginTop = `${this.marginTop}px`;
    }
    if (this.marginBottom) {
      style.marginBottom = `${this.marginBottom}px`;
    }
    return style;
  }

  getClass(): string {
    const classes: string[] = ['tDivider'];
    return classes.join(' ');
  }
}
</script>

<style scoped lang="scss">
@import "TDivider";
</style>
