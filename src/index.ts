import Jungletron from '@/jungletron';

export default Jungletron;

const install = Jungletron.install;

Jungletron.install = (Vue, args) => {
  install.call(Jungletron, Vue, args);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Jungletron);
}
