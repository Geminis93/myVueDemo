<template>
  <div ref="chartMove" style="width: 400px; height: 400px;"></div>
</template>

<script>
  import echarts from "echarts";
  import commonColors from "../chart-common/chart-common-colors.js";
  import commonLegend from "../chart-common/chart-common-legend.js";
  import commonTooltip from "../chart-common/chart-common-tooltip.js";
  import commonXaxis from "../chart-common/chart-common-xaxis.js";
  import commonYaxis from "../chart-common/chart-common-yaxis.js";

  export default {
    name: "CommonChart",
    props: {
      options: Object
    },
    mounted () {
      const myCharts = echarts.init(this.$refs.chartMove);
      const options = {
        colors: commonColors,
        grid: {
          left: 10,
          right: 25,
          bottom: 5,
          top: 60,
          containLabel: true,
        },
        legend: {
          data: ['销量'],
          ...commonLegend
        },
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"],
          ...commonXaxis
        },
        yAxis: commonYaxis,
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      }
      myCharts.setOption(options);
    }
  }
</script>

<style scoped>

</style>
