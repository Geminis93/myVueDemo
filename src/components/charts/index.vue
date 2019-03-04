<template>
  <div ref="chartMove" style="width: 100%; height: 400px;"></div>
</template>

<script>
import echarts from "echarts";
import _ from "lodash";
import commonColors from "../chart-common/chart-common-colors.js";
import commonLegend from "../chart-common/chart-common-legend.js";
import commonTooltip from "../chart-common/chart-common-tooltip.js";
import commonXaxis from "../chart-common/chart-common-xaxis.js";
import commonYaxis from "../chart-common/chart-common-yaxis.js";

export default {
  name: "CommonChart",
  props: {
    height: {
      type: Number,
      default: 400
    },
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      myChart: null
    };
  },
  mounted() {
    window.addEventListener("resize", this.myChartResize, false);
    const myCharts = echarts.init(this.$refs.chartMove);
    const addConfig = _.merge({}, this.options);

    // merge xAxis
    if (!!addConfig.xAxis && _.isArray(addConfig.xAxis)) {
      addConfig.xAxis.forEach((item, index) => {
        addConfig.xAxis[index] = _.merge({}, commonXaxis, item);
      });
    } else {
      addConfig.xAxis = _.merge({}, commonXaxis, addConfig.xAxis);
    }

    // merge yAxis
    if (!!addConfig.yAxis && _.isArray(addConfig.yAxis)) {
      addConfig.yAxis.forEach((item, index) => {
        addConfig.yAxis[index] = _.merge({}, commonYaxis, item);
      });
    } else {
      addConfig.yAxis = _.merge({}, commonYaxis, addConfig.yAxis);
    }

    const option = {
      color: commonColors,
      grid: {
        left: 10,
        right: 25,
        bottom: 5,
        top: 60,
        containLabel: true
      },
      legend: commonLegend,
      tooltip: {
        ...commonTooltip
      },
      ...addConfig
    };
    myCharts.setOption(option);
    this.myChart = myCharts;
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.myChartResize, false);
    if (this.myChart) {
      this.myChart.dispose();
    }
  },
  methods: {
    myChartResize() {
      if (this.myChart) {
        this.myChart.resize();
      }
    }
  }
};
</script>

<style scoped></style>
