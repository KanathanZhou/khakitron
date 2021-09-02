<template>
  <div class="__T_Slider"
       :style="getStyle()">
    <div class="__T_Slider_container"
         :style="[playStyle]">
      <slot></slot>
    </div>

    <div class="__T_Slider_static_slot">
      <slot name="static"></slot>
    </div>

    <div class="__T_Slider_pager" v-if="pager">
      <div v-for="(n, index) in slideCount">
        <div class="__T_Slider_pager_activated_dot" :style="getPagerActivatedDotStyle()" v-if="index === playSlideIndex"></div>
        <div class="__T_Slider_pager_dot" :style="getPagerDotStyle()" v-else @click="onPagerDot(index)"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';
import {VNode} from 'vue';
import {TSlidePagerOptions} from '@/components/slides/TSlide';

@Component({
  name: "TSlides"
})
export default class TSlides extends Vue {
  @Prop({ type: [Number, String], default: '400px' }) width!: number | string;
  @Prop({ type: Boolean }) autoPlay!: boolean; // decide if it is going to play repeatedly nonstop
  @Prop({ type: Number, default: 3000 }) autoPlayDelay!: number; // how long each slide will show
  @Prop({ type: Boolean }) pager!: boolean; // this decides if it is going to show the pagination
  @Prop({ type: Object }) pagerOptions!: TSlidePagerOptions;

  playSlideIndex: number = 0;
  slideCount: number = 0;
  playStyle: GeneralStyle = {
    transform: ""
  };

  created() {
    this.getSlideCount();
    if (this.autoPlay) {
      this.play();
    }
  }

  getSlideCount(): void {
    // retrieve whatever inside default slot components
    const slideList: VNode[] | any | undefined = this.$slots.default;
    if (slideList) {
      // loop over elements
      for (const [i, element] of slideList.entries()) {
        // check if element is "TSlide/t-slide"
        if (["TSlide", "t-slide"].some((tag: string) => tag === element.componentOptions?.tag)) {
          this.slideCount++;
        }
      }
    }
  }

  getStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.width) {
      style.width = isNaN(+this.width) ? this.width as string : `${this.width}px`;
    }
    return style;
  }

  displaySlide(slideIndex: number): void {
    this.playSlideIndex = slideIndex;
    const actualWidth: string = isNaN(+this.width) ? this.width as string : `${this.width}px`;
    this.playStyle.transform = `translateX(calc(-1 * ${slideIndex} * ${actualWidth}))`;
  }

  play(): void {
    setInterval(() => {
      if (this.playSlideIndex < (this.slideCount - 1)) {
        this.playSlideIndex++;
      } else {
        this.playSlideIndex = 0;
      }
      this.displaySlide(this.playSlideIndex);
    }, this.autoPlayDelay);
  }

  getPagerActivatedDotStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.pagerOptions) {
      style.background = this.pagerOptions.activatedDotColor;
    }
    return style;
  }

  getPagerDotStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.pagerOptions) {
      style.background = this.pagerOptions.dotColor;
    }
    return style;
  }

  /**
   * this will take all the number out of a string or a number (a number ? which just return this number)
   * @param aStringOrNumber
   */
  extractNumber(aStringOrNumber: number | string): number {
    return +((aStringOrNumber + "").replace(/\D/g, ""));
  }

  onPagerDot(index: number): void {
    this.displaySlide(index);
  }
}
</script>

<style scoped lang="scss">
@import "TSlides";
</style>
