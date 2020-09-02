<template>
  <ul class="carousel-box">
    <li
      class="carousel-item"
      v-for="(item, index) in imageList"
      :class="{ 'carousel-item-present': index == presentIndex, 'carousel-item-prev': index == prevIndex, 'carousel-item-next': index == nextIndex, }"
      :key="index">
      <h3 v-if="item.title">{{ item.title }}</h3>
      <div class="carousel-item-image">{{ item.image }}</div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "carousel",
  props: {
    imageList: Array,
  },
  data() {
    return {
      presentIndex: 0,
      prevIndex: 1,
      nextIndex: 2,
    }
  },
  mounted() {
    setTimeout(() => {
      this.presentIndex = 1;
      this.prevIndex = 2;
      this.nextIndex = 0;
    }, 2000);
  },
};
</script>

<style lang="scss" scoped>
@import 'index.scss';
</style>
