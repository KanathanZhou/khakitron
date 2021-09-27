/* tslint:disable */
import _Vue, {PluginFunction} from 'vue';
import {install} from '@/install';
import Theme from './style/_theme.scss';
import {BlueFeatherTheme} from "../types/blue-feather.theme";

export default class BlueFeather {
  static install: PluginFunction<never> = install;
  theme: BlueFeatherTheme = {};

  constructor(userPresetTheme?: BlueFeatherTheme) {
    this.injectUserPresetTheme(userPresetTheme);
  }

  private injectUserPresetTheme(userPresetTheme?: BlueFeatherTheme): void {
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
