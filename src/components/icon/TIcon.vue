<template>
  <div>
    <i class="material-icons" :style="getStyle()">
      <slot />
    </i>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component({
  name: 'TIcon'
})
export default class TIcon extends Vue {
  @Prop({ type: [ Number, String ] }) size!: number | string;
  @Prop({ type: String }) color!: string;

  getStyle() {
    const fontSize = this.size ? `${ this.size }px` : 'inherit';
    const color = this.color ? this.color : 'inherit';
    return {
      fontSize,
      color
    };
  }
}
</script>

<style lang="scss" scoped>
@import 'TIcon.scss';
</style>
