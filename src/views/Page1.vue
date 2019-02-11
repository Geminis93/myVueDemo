<template>
  <div>
    <button @click="onChange()">aaa</button>
    <ul>
      <li v-for="number in numberList" :key="number">{{ number }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "page1",
  data() {
    return {
      numberList: [1, 2, 3, 4, 5]
    };
  },
  methods: {
    onChange() {
      this.numberList = ["a", "b", "c", "d", "e"];
    }
  }
};
</script>

<style lang="scss" scoped></style>
