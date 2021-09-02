export interface ITSelectItem {
  text?: string;
  value?: string | number;
  disabled?: boolean;
  icon?: string; // needs to be one of the TGIcons
  [key: string]: string | number | boolean | undefined;
}
