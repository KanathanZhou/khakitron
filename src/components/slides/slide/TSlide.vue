<template>
  <div class="__T_Slide">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';

@Component({
  name: "TSlide"
})
export default class TSlide extends Vue {

}
</script>

<style scoped lang="scss">
@import "TSlide";
</style>
