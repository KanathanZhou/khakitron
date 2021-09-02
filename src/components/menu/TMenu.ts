/*
import './TMenu.scss';
import { Component, Vue } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';

@Component({
  name: `t-menu`,
})
export default class TMenu extends Vue {

  public render(h: CreateElement): VNode {
    return h(
      'div',
      {
        staticClass: 'tMenu',
        style: {
          color: '#1a7322',
          fontSize: '20px',
        },
      },
      this.$slots.default,
    );
  }

}
*/

export enum T_MENU_ITEM_COLOR_THEME {
  primary = 'primary',
  danger = 'danger'
}

export interface ITMenuItem {
  text?: string;
  value?: string | number;
  disabled?: boolean;
  icon?: string; // needs to be one of the TGIcons
  [key: string]: string | number | boolean | undefined;
  colorTheme?: T_MENU_ITEM_COLOR_THEME;
}
