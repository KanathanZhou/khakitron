<template>
  <div v-on="$listeners"
       :class="getClass()">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component({
  name: "TListItem"
})
export default class TListItem extends Vue {
  @Prop({ type: Boolean }) activated!: boolean;

  getClass(): string {
    const classes: string[] = ['tListItem'];
    if (this.activated) {
      classes.push('tListItemActivated');
    }
    return classes.join(' ');
  }
}
</script>

<style scoped lang="scss">
@import "TListItem";
</style>
