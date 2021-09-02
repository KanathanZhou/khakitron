import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';

const bindEl = (el: any, binding: DirectiveBinding, vnode: VNode) => {
  el.clickOutsideEvent = (event: MouseEvent) => {
    // here I check that click was outside the el and his children
    if (!(el === event.target || el.contains(event.target))) {
      // and if it did, call method provided in attribute value
      // binding.value(); this should work as well, just not recommended
      (vnode.context as any)[binding.expression]();
    }
  };
  document.addEventListener("click", el.clickOutsideEvent);
};

const unbindEl = (el: any) => {
  document.removeEventListener("click", el.clickOutsideEvent);
};

export const ClickOutside = {
  bind: bindEl,
  unbind: unbindEl,
};

export default ClickOutside;
