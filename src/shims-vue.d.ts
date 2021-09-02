declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

/**
 * Declare scss module so that we can successfully import scss files if it exports something
 */
declare module '*.scss' {
  const scss: { [className: string]: string };
  export default scss;
}
