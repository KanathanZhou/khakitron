<template>
  <div>
    <slot name="trigger" v-bind:on="on"></slot>
    <div class="tPopover" ref="tPopover"
         :class="getPopoverClass()"
         :style="getPopoverStyle()"
         v-if="showPopover">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue, Watch} from 'vue-property-decorator';
import {TPopoverModel, TPopoverStyle} from '@/components/popover/TPopover';
import {VNode} from 'vue';

const DISMISS_POPOVER_DELAY: number = 270;

@Component({
  name: "t-popover"
})
export default class TPopover extends Vue {
  @Prop({ type: Boolean }) value!: boolean; // v-model binding
  @Prop({ type: Number }) nudgeLeft!: number;
  @Prop({ type: Number }) nudgeRight!: number;
  @Prop({ type: Number }) nudgeTop!: number;
  @Prop({ type: Number }) nudgeBottom!: number;
  @Prop({ type: Number }) positionX!: number;
  @Prop({ type: Number }) positionY!: number;
  @Prop({ type: Boolean }) tile!: boolean;
  @Prop({ type: String }) animation!: string;
  @Prop({ type: Boolean, default: true }) closeOnOutsideClick!: boolean;
  @Prop({ type: Boolean, default: false }) closeOnContentClick!: boolean;

  showPopover: boolean = false;
  popover: TPopoverModel = new TPopoverModel(0, 0);
  popoverClass: string[] = [];

  on: any = {
    click: (event: MouseEvent) => {
      let vueComponents: VNode[] | any | undefined = this.$vnode.componentInstance?.$parent;
      while (vueComponents !== undefined) {
        // loop over elements
        for (const component of vueComponents.$children) {
          // check if element is "TPopover"
          if (component.$vnode.componentOptions?.tag === "TPopover") {
            // toggle them to false
            (component.$vnode as any).child.togglePopover(false);
          }
        }
        vueComponents = vueComponents.$parent;
      }
      event.stopPropagation();
      this.autoTogglePopover();
      this.popover.setPosition((event.target as HTMLElement).offsetLeft, (event.target as HTMLElement).offsetTop + (event.target as HTMLElement).offsetHeight);
    }
  };

  @Emit('input')
  onModelChange(value: boolean) {
    return value;
  }

  @Watch('value')
  onValueChange() {
    this.togglePopover(this.value);
  }

  @Watch('showPopover')
  onShowPopoverChange() {
    this.onModelChange(this.showPopover);
  }

  autoTogglePopover(): void {
    this.togglePopover(!this.showPopover);
  }

  mounted() {
    this.initializeClass();
    this.addCloseOnOutsideClick();
  }

  addCloseOnOutsideClick() {
    if (this.closeOnOutsideClick) {
      document.addEventListener('click', (event: MouseEvent) => {
        this.togglePopover(false);
      });
    }
  }

  addCloseOnContentClick() {
    const popover: Element | any = this.$refs.tPopover;
    if (popover) {
      popover.addEventListener('click', (event: MouseEvent) => {
        if (this.closeOnContentClick) {
          this.togglePopover(false);
        } else {
          event.stopPropagation();
        }
      });
    }
  }

  initializeClass() {
    if (this.tile) {
      this.addPopoverClass(`tPopoverTile`);
    }
  }

  togglePopover(show: boolean) {
    if (show) {
      if (!this.showPopover) {
        if (this.animation) {
          this.removePopoverClass(`${this.animation.toLowerCase()}AnimationEnd`);
          this.addPopoverClass(`${this.animation.toLowerCase()}AnimationStart`);
        }
        this.showPopover = true;
        this.$nextTick(() => {
          this.addCloseOnContentClick();
        });
      }
    } else {
      if (this.showPopover) {
        if (this.animation) {
          this.removePopoverClass(`${this.animation.toLowerCase()}AnimationStart`);
          this.addPopoverClass(`${this.animation.toLowerCase()}AnimationEnd`);
          setTimeout(() => {
            this.showPopover = false;
          }, DISMISS_POPOVER_DELAY);
        } else {
          this.showPopover = false;
        }
      }
    }
  }

  getPopoverStyle(): TPopoverStyle {
    const style: TPopoverStyle = {};
    if (this.positionX !== undefined) {
      style.left = `${this.positionX}px`;
    } else {
      style.left = `${this.popover.positionX + (this.nudgeLeft || 0) - (this.nudgeRight || 0)}px`;
    }
    if (this.positionY !== undefined) {
      style.top = `${this.positionY}px`;
    } else {
      style.top = `${this.popover.positionY + (this.nudgeTop || 0) - (this.nudgeBottom || 0)}px`;
    }
    return style;
  }

  getPopoverClass(): string {
    return this.popoverClass.join(' ');
  }

  addPopoverClass(className: string): void {
    const index: number = this.popoverClass.indexOf(className);
    if (index === -1) {
      this.popoverClass.push(className);
    }
  }

  removePopoverClass(className: string): void {
    const index: number = this.popoverClass.indexOf(className);
    if (index !== -1) {
      this.popoverClass.splice(index, 1);
    }
  }

}
</script>

<style scoped lang="scss">
@import "TPopover";
</style>
