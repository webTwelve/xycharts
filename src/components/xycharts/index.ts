import XYHistogram from "./XYHistogram/index.vue";

// 按需引入
export { XYHistogram };

const component = [XYHistogram];

const XYCharts = {
  install(App: any) {
    component.forEach((item) => {
      App.component(item.name, XYHistogram);
    });
  },
};

export default XYCharts;
