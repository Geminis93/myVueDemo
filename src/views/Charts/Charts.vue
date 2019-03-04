<template>
  <div class="charts">
    <ShowTemplate :titleList="numberList" @on-change-content="goContent">
      <ul class="charts-content">
        <li
          v-for="(number, index) in numberList"
          :key="index"
          :ref="`content${index}`"
        >
          <h4>{{ number.title }}</h4>
          <p>{{ number.content }}</p>
          <CommonChart :options="number.options" />
        </li>
      </ul>
    </ShowTemplate>
  </div>
</template>

<script>
import ShowTemplate from "../../components/showTemplate";
import CommonChart from "../../components/charts";

export default {
  name: "charts",
  components: {
    ShowTemplate,
    CommonChart
  },
  data() {
    return {
      numberList: [
        {
          title: "柱状图",
          content: "柱状图展示，图例溢出隐藏处理",
          options: {
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            series: [
              {
                name: "销量销量销量销量销量",
                type: "bar",
                data: [5, 20, 36, 10, 10, 20]
              },
              {
                name: "销量1",
                type: "bar",
                data: [15, 30, 16, 40, 30, 60]
              }
            ]
          }
        },
        {
          title: "折线图",
          content: "单条折线图展示",
          options: {
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            series: {
              name: "销量",
              type: "line",
              data: [5, 20, 36, 10, 10, 20]
            }
          }
        },
        {
          title: "堆积图",
          content: "堆积图展示",
          options: {
            xAxis: {
              data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            series: [
              {
                name: "销量",
                type: "line",
                stack: "总量",
                areaStyle: {},
                data: [5, 20, 36, 50, 10, 20]
              },
              {
                name: "销量1",
                type: "line",
                stack: "总量",
                areaStyle: {},
                data: [51, 120, 316, 50, 110, 210]
              }
            ]
          }
        },
        {
          title: "仪表盘",
          content: "24小时仪表盘展示数据",
          options: {
            xAxis: {
              show: false
            },
            angleAxis: {
              show: false,
              startAngle: -83,
              type: "category",
              axisLine: {
                show: false
              },
              axisTick: {
                show: false
              },
              splitLine: {
                show: false
              },
              axisLabel: {
                fontSize: 12,
                color: "rgba(28,36,56,0.56)"
              }
            },
            radiusAxis: {
              show: false
            },
            polar: {
              center: ["50%", "50%"]
              // radius: 85,
            },
            series: [
              {
                data: [
                  40,
                  2,
                  3,
                  4,
                  5,
                  6,
                  7,
                  8,
                  9,
                  11,
                  23,
                  43,
                  12,
                  24,
                  23,
                  43,
                  34,
                  34,
                  32,
                  35,
                  22,
                  0,
                  23,
                  14
                ],
                type: "bar",
                coordinateSystem: "polar"
              },
              {
                type: "gauge",
                radius: "99%",
                startAngle: -10,
                endAngle: -60,
                splitNumber: 4,
                axisLine: {
                  // 坐标轴线
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[1, "rgba(28,36,56,0.80)"]],
                    width: 1,
                    opacity: 1
                  }
                },
                splitLine: {
                  //分隔线样式
                  show: false
                },
                axisLabel: {
                  //刻度标签
                  show: false
                },
                axisTick: {
                  //刻度样式
                  show: false
                },
                itemStyle: {
                  normal: {
                    opacity: 0
                  }
                },
                title: {
                  show: true,
                  color: "rgba(28,36,56,0.80)",
                  offsetCenter: ["110%", "25%"]
                },
                detail: {
                  show: true,
                  offsetCenter: ["95%", "0"],
                  fontFamily: "PingFangSC-Regular",
                  fontSize: 12,
                  color: "rgba(28,36,56,0.56)",
                  lineHeight: 14,
                  formatter(value) {
                    const str = value < 10 ? `0${value}` : value;
                    return `${str}:00`;
                  }
                },
                data: [
                  {
                    value: "18",
                    name: "夜"
                  }
                ]
              },
              {
                type: "gauge",
                radius: "99%",
                startAngle: -120,
                endAngle: -170,
                splitNumber: 4,
                axisLine: {
                  // 坐标轴线
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[1, "rgba(28,36,56,0.80)"]],
                    width: 1,
                    opacity: 1
                  }
                },
                splitLine: {
                  //分隔线样式
                  show: false
                },
                axisLabel: {
                  //刻度标签
                  show: false
                },
                axisTick: {
                  //刻度样式
                  show: false
                },
                itemStyle: {
                  normal: {
                    opacity: 0
                  }
                },
                title: {
                  show: true,
                  color: "rgba(28,36,56,0.80)",
                  offsetCenter: ["-110%", "25%"]
                },
                detail: {
                  show: true,
                  offsetCenter: ["0", "90%"],
                  fontFamily: "PingFangSC-Regular",
                  fontSize: 12,
                  color: "rgba(28,36,56,0.56)",
                  lineHeight: 14,
                  formatter(value) {
                    const str = value < 10 ? `0${value}` : value;
                    return `${str}:00`;
                  }
                },
                data: [
                  {
                    value: "0",
                    name: "夜"
                  }
                ]
              },
              {
                type: "gauge",
                radius: "99%",
                startAngle: 60,
                endAngle: 10,
                splitNumber: 4,
                axisLine: {
                  // 坐标轴线
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[1, "#3399ff"]],
                    width: 1,
                    opacity: 1
                  }
                },
                splitLine: {
                  //分隔线样式
                  show: false
                },
                axisLabel: {
                  //刻度标签
                  show: false
                },
                axisTick: {
                  //刻度样式
                  show: false
                },
                itemStyle: {
                  normal: {
                    opacity: 0
                  }
                },
                title: {
                  show: true,
                  color: "#3399ff",
                  offsetCenter: ["-110%", "-25%"]
                },
                detail: {
                  show: true,
                  offsetCenter: ["-95%", "0"],
                  fontFamily: "PingFangSC-Regular",
                  fontSize: 12,
                  color: "rgba(28,36,56,0.56)",
                  lineHeight: 14,
                  formatter(value) {
                    const str = value < 10 ? `0${value}` : value;
                    return `${str}:00`;
                  }
                },
                data: [
                  {
                    value: "6",
                    name: "日"
                  }
                ]
              },
              {
                type: "gauge",
                radius: "99%",
                startAngle: 170,
                endAngle: 120,
                splitNumber: 4,
                axisLine: {
                  // 坐标轴线
                  lineStyle: {
                    // 属性lineStyle控制线条样式
                    color: [[1, "#3399ff"]],
                    width: 1,
                    opacity: 1
                  }
                },
                splitLine: {
                  //分隔线样式
                  show: false
                },
                axisLabel: {
                  //刻度标签
                  show: false
                },
                axisTick: {
                  //刻度样式
                  show: false
                },
                itemStyle: {
                  normal: {
                    opacity: 0
                  }
                },
                title: {
                  show: true,
                  color: "#3399ff",
                  offsetCenter: ["110%", "-25%"]
                },
                detail: {
                  show: true,
                  offsetCenter: ["0", "-90%"],
                  fontFamily: "PingFangSC-Regular",
                  fontSize: 12,
                  color: "rgba(28,36,56,0.56)",
                  lineHeight: 14,
                  formatter(value) {
                    const str = value < 10 ? `0${value}` : value;
                    return `${str}:00`;
                  }
                },
                data: [
                  {
                    value: "12",
                    name: "日"
                  }
                ]
              }
            ]
          }
        }
      ]
    };
  },
  methods: {
    goContent(index) {
      this.$refs[`content${index}`][0].scrollIntoView();
    },
    changeData() {
      this.numberList.push({
        title: "第五章",
        content: 5555555555
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Charts.scss";
</style>
