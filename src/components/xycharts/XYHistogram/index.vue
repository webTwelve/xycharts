<template>
  <div id="main"></div>
</template>
<script lang="ts">
export default {
  name: "XYHistogram",
};
</script>
<script setup lang="ts">
import { onMounted } from "vue";
import * as echarts from "echarts";

const init = () => {
  const main = document.getElementById("main") as HTMLElement;
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(main);
  // 绘制图表
  myChart.setOption({
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      },
    ],
  });
};
onMounted(() => {
  init();
});
</script>

<style lang="less" scoped>
#main {
  min-height: 300px;
  min-width: 500px;
}
</style>
