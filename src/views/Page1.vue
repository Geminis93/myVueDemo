<template>
  <div class="page1">
    <ul>
      <li
        v-for="(number, index) in numberList"
        :key="index"
        :ref="`content${index}`">
        <h4>{{ number.title }}</h4>
        <p>{{ number.content }}</p>
      </li>
    </ul>
    <div class="page1-nav">
      <span
        v-for="(number, index) in numberList"
        :key="index"
        @click="goContent(index)">{{ number.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "page1",
  data() {
    return {
      numberList: [
        {
          title: '第一章',
          content: 1111,
        },
        {
          title: '第二章',
          content: 2222,
        },
        {
          title: '第三章',
          content: 3333,
        },
        {
          title: '第四章',
          content: 4444,
        }
      ]
    };
  },
  methods: {
    goContent(index) {
      this.$refs[`content${index}`][0].scrollIntoView();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Page1.scss";
</style>
