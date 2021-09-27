/* tslint:disable */
import _Vue, {PluginFunction} from 'vue';
import {install} from '@/install';
import Theme from './style/_theme.scss';
import {KhakitronTheme} from "../types/khakitron.theme";

export default class Khakitron {
  static install: PluginFunction<never> = install;
  theme: KhakitronTheme = {};

  constructor(userPresetTheme?: KhakitronTheme) {
    this.injectUserPresetTheme(userPresetTheme);
  }

  private injectUserPresetTheme(userPresetTheme?: KhakitronTheme): void {
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
