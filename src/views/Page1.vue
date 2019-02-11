<template>
  <div class="page">
    <div class="page-content">
      <router-link to="/">aa</router-link> | 
      <button @click="onChange()">aaa</button>
      <ul>
        <li v-for="number in numberList" :key="number">{{ number }}</li>
      </ul>
    </div>
    <div ref="canvasNest" class="page-bg" />
  </div>
</template>

<script>
import CanvasNest from 'canvas-nest.js';

export default {
  name: "page1",
  data() {
    return {
      canvasNest: null,
      numberList: [1, 2, 3, 4, 5]
    };
  },
  mounted() {
    this.canvasNest = new CanvasNest(this.$refs.canvasNest);
  },
  destroyed() {
    this.canvasNest.destroy();
    this.canvasNest = null;
  },
  methods: {
    onChange() {
      this.numberList = ["a", "b", "c", "d", "e"];
    }
  }
};
</script>

<style lang="scss" scoped>
@import './Page1.scss';
</style>
