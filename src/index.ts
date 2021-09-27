import Khakitron from "@/khakitron";

export default Khakitron;

const install = Khakitron.install;

Khakitron.install = (Vue, args) => {
  install.call(Khakitron, Vue, args);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Khakitron);
}
