<template>
  <div class="tResponsiveList"
       :style="getItemStyle()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: "TResponsiveList",
})
export default class TResponsiveList extends Vue {
  @Prop({ type: Number, required: true }) containerWidth!: number;

  getItemStyle(): any {
    return {
      width: this.containerWidth + 'px',
    };
  }

}
</script>

<style scoped lang="scss">
@import "TResponsiveList";
</style>
