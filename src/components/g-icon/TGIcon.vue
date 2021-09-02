<template>
  <i :class="getIconFontClasses()"
     :style="getIconStyle()"
     @click="onClick($event)"
     @mouseenter="onMouseEnter($event)"
     @mouseleave="onMouseLeave($event)">
    <span v-if="false">
<!--  Name of the icon    -->
      <slot></slot>
    </span>
  </i>
</template>

<script lang="ts">
import {Component, Emit, Prop, Vue} from 'vue-property-decorator';
import {GeneralStyle} from '@/components/general-style';
import {RegexUtility} from '@/components/regex.utility';
import {VNode} from 'vue/types/vnode';

@Component({
  name: "TGIcon"
})
export default class TGIcon extends Vue {
  @Prop({ type: String }) color!: string;
  @Prop({ type: [Number, String] }) size!: number | string; // In pixels
  @Prop({ type: Boolean }) left!: boolean; // will automatically add margin to the right side of the icon
  @Prop({ type: Boolean }) right!: boolean; // will automatically add margin to the left side of the icon

  getIconName(): string {
    if (this.$slots.default) {
      return (this.$slots.default as any)[0]?.text.trim();
    } else {
      return '';
    }
  }

  getIconStyle(): GeneralStyle {
    const style: GeneralStyle = {};
    if (this.size) {
      style.fontSize = RegexUtility.isNumber(this.size) ? `${this.size}px` : this.size + '';
    }
    if (this.color) {
      style.color = this.color;
    }
    if (this.left) {
      style.marginRight = this.getIconMargin();
    }
    if (this.right) {
      style.marginLeft = this.getIconMargin();
    }
    return style;
  }


  getIconFontClasses(): string {
    const classes: string[] = [`iconfont`];
    classes.push(this.getIconName());
    return classes.join(' ');
  }

  /**
   * TGIcon should have extremely strong synergy with other jungletron component
   * which should automatically configure the specs like margin for users
   */
  getIconMargin(): string {
    const parentVNode: VNode | undefined = this.$vnode.componentInstance?.$parent.$vnode;
    if (parentVNode?.componentOptions?.tag === "TButton") {
      const propsData: {} | undefined = parentVNode.componentOptions.propsData;
      if (propsData) {
        const propsDataKeys: string[] = Object.keys(propsData);
        if (propsDataKeys.includes("xxLarge") ||
            propsDataKeys.includes("xLarge") ||
            propsDataKeys.includes("large") ||
            propsDataKeys.includes("medium")) {
          return "12px";
        } else if (propsDataKeys.includes("small") ||
            propsDataKeys.includes("xSmall")) {
          return "8px";
        } else {
          return "12px";
        }
      }
    } else if (parentVNode?.componentOptions?.tag === "TTab") {
      return "8px";
    } else if (parentVNode?.componentOptions?.tag === "TChip") {
      return "4px";
    }
    return "12px";
  }

  /**
   * The purpose of doing this:
   * Components are complicated, vue doesn't know which element you are adding click event, so that we have to emit the click event in order to not confuse the vuejs
   * if not doing so, we have to use @click.native outside which is vue advised against
   */
  @Emit('click')
  onClick(event: MouseEvent) {
  }

  @Emit('mouseenter')
  onMouseEnter(event: MouseEvent) {
  }

  @Emit('mouseleave')
  onMouseLeave(event: MouseEvent) {
  }
}
</script>

<style scoped lang="scss">
@import "TGIcon";
@import "TGIconFont";
</style>
