/**
 *  vue-cli configs
 * */
module.exports = {
  /*
  * @inheritDoc: https://cli.vuejs.org/zh/guide/build-targets.html#%E5%BA%94%E7%94%A8
  * @override: bluefeather's entry file is src/bluefeather.ts,
  * so we use 'vue-cli-service build --target lib --name myLib [entry]' to build a single entry as a library using.
  * we can use the following webpack configuration to directly expose the default export.
  * */
  configureWebpack: {
    output: {
      libraryExport: 'default'
    }
  },
  css: {
    /**
     * @inheritDoc https://cli.vuejs.org/config/#css-requiremoduleextension
     * We want to make sure css module have to append .module.(css-pre-processors-extension) naming rule
     */
    requireModuleExtension: true,
    /**
     * @inheritDoc https://cli.vuejs.org/config/#css-extract
     * !!! This is critically important
     * The vue-cli export all css-related files by default, which requires uses to manually import all css files
     * "When building as a library, you can also set this to false to avoid your users having to import the CSS themselves."
     */
    extract: false,
  },
};
