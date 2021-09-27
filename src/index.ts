import BlueFeather from "@/blue-feather";

export default BlueFeather;

const install = BlueFeather.install;

BlueFeather.install = (Vue, args) => {
  install.call(BlueFeather, Vue, args);
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(BlueFeather);
}
