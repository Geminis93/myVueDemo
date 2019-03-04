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
          <CommonChart />
        </li>
      </ul>
    </ShowTemplate>
  </div>
</template>

<script>
import ShowTemplate from "../../components/showTemplate";
import CommonChart from '../../components/charts';

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
          title: "第一章",
          content: 1111
        },
        {
          title: "第二章",
          content: 2222
        },
        {
          title: "第三章",
          content: 3333
        },
        {
          title: "第四章",
          content: 4444
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
