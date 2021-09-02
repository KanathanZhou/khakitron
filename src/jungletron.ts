/* tslint:disable */

import _Vue, {PluginFunction} from 'vue';
import {install} from '@/install';
import Theme from './style/_theme.scss';
import {JungletronTheme} from '../types/jungletron-theme';

export default class Jungletron {
  static install: PluginFunction<never> = install;
  theme: JungletronTheme = {};

  constructor(userPresetTheme?: JungletronTheme) {
    this.injectUserPresetTheme(userPresetTheme);
  }

  private injectUserPresetTheme(userPresetTheme?: JungletronTheme): void {
    if (userPresetTheme) {
      Object.keys(Theme).forEach((item: string) => {
        if ((userPresetTheme as any)[item]) {
          (this.theme as any)[item] = (userPresetTheme as any)[item];
        } else {
          (this.theme as any)[item] = Theme[item];
        }
      });
    }
  }
}
