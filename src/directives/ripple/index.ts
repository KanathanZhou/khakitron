import { DirectiveBinding } from 'vue/types/options';
import { VNode } from 'vue/types/vnode';
import './ripple.scss';
import Theme from '../../style/_theme.scss';

const bindEl = (element: HTMLElement, binding: DirectiveBinding, vnode: VNode) => {
  let ripple: any;
  let outlined: any;

  if (binding.value) {
    ripple = binding.value.ripple;
    outlined = binding.value.outlined;
  }

  if (ripple) {
    element.addEventListener('click', (ev: MouseEvent) => {
      const el = ev.currentTarget as HTMLElement;
      const x = ev.clientX - el.getBoundingClientRect().left;
      const y = ev.clientY - el.getBoundingClientRect().top;

      el.classList.add('__T_ripple_overflowHide');
      el.classList.add('__T_ripple_relative');

      const ripples = document.createElement('span');
      ripples.className = '__T_ripples';
      ripples.style.left = `${ x }px`;
      ripples.style.top = `${ y }px`;
      ripples.style.backgroundColor = outlined ? Theme.primary : Theme.light;
      el.appendChild(ripples);

      const length = Math.max(el.clientWidth, el.clientHeight);
      ripples.style.width = `${ length * 2 }px`;
      ripples.style.height = `${ length * 2 }px`;
      ripples.classList.add('__T_ripples_endState');

      setTimeout(() => {
        ripples.remove();
      }, 1000);
    });
  }
};

//  TODO. this func will work when attrs(like outlined, hideRipple...) is changed.
const updateEl = (element: HTMLElement, binding: DirectiveBinding, vnode: VNode) => {};

export const Ripple = {
  bind: bindEl,
  update: updateEl
};

export default Ripple;
