export interface ITBreadcrumb {
  text?: string;
  // to?: string; // TODO: mimic <a>'s behavior to be the same of <router-link>
  href?: string;
  customNavigation?: () => void;
}
