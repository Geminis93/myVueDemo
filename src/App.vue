<template>
  <div id="app">
    <div ref="canvasNest" class="app-bg" />
    <div id="nav">
      <router-link to="/charts" tag="li">图表类</router-link>
      <!-- <router-link to="/page2" tag="li">Page1</router-link>
      <router-link to="/page3" tag="li">Page3</router-link>
      <router-link to="/page4" tag="li">Page4</router-link>
      <router-link to="/page5" tag="li">Page5</router-link> -->
    </div>
    <router-view class="app-view" />
  </div>
</template>

<script>
import CanvasNest from "canvas-nest.js";

export default {
  name: "App",
  data() {
    return {
      canvasNest: null
    };
  },
  mounted() {
    this.canvasNest = new CanvasNest(this.$refs.canvasNest, {
      count: 200
    });
  },
  destroyed() {
    this.canvasNest.destroy();
    this.canvasNest = null;
  }
};
</script>
<style lang="scss">
@import "./App.scss";
</style>
