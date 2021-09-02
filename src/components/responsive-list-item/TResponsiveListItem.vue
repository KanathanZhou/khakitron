<template>
  <div :style="getItemStyle()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, PropSync, Vue, Watch} from 'vue-property-decorator';

const DEFAULT_ITEM_MARGIN: number = 8;
const SCROLL_BAR_WIDTH: number = 18;

@Component({
  name: "TResponsiveListItem"
})
export default class TResponsiveListItem extends Vue {
  @PropSync('containerWidthSynced', { type: Number, required: true }) containerWidth!: number;
  @Prop({ type: Number, default: DEFAULT_ITEM_MARGIN }) margin!: number;
  @Prop({ type: Number, required: true }) minItemWidth!: number;
  @Prop({ type: Number }) maxItemWidth!: number;
  @Prop({ type: Number }) maxItemPerRow!: number;

  bestItemWidth: number = 0;

  created() {
    this.bestItemWidth = this.getBestItemWidth();
  }

  getBestItemWidth(): number {
    let itemsPerRow: number = Math.floor(this.getAvailableWidth() / (this.minItemWidth + this.margin + this.margin));
    if (itemsPerRow === 0) {
      itemsPerRow = 1;
    }
    if (this.maxItemPerRow) {
      if (itemsPerRow > this.maxItemPerRow) {
        itemsPerRow = this.maxItemPerRow;
      }
    }
    let idealWidth = Math.floor(this.getAvailableWidth() / itemsPerRow - this.margin - this.margin);
    if (idealWidth < this.minItemWidth) {
      idealWidth = this.minItemWidth;
    } else if (this.maxItemWidth && idealWidth > this.maxItemWidth) {
      idealWidth = this.maxItemWidth;
      this.onIdealItemWidthExceedsMaxItemWidth();
    }
    return idealWidth;
  }

  getItemStyle(): any {
    return {
      width: this.bestItemWidth + 'px',
      margin: this.margin + 'px'
    };
  }

  getAvailableWidth(): number {
    return this.containerWidth - SCROLL_BAR_WIDTH;
  }

  @Watch('containerWidth')
  onContainerWidthChange() {
    this.bestItemWidth = this.getBestItemWidth();
  }

  onIdealItemWidthExceedsMaxItemWidth() {
    this.containerWidth = (this.maxItemWidth + this.margin + this.margin) * this.maxItemPerRow + SCROLL_BAR_WIDTH;
  }

}

</script>

<style scoped lang="scss">
@import "TResponsiveListItem";
</style>
