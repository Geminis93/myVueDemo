<template>
  <div class="show-template">
    <slot></slot>
    <div class="show-template-nav">
      <span
        v-for="(number, index) in titleList"
        :key="index"
        @click="onChangeTitle(index)"
      >
        {{ number.title }}
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ShowTemplate',
    props: {
      titleList: Array,
    },
    methods: {
      onChangeTitle(index) {
        this.$emit('on-change-content', index);
      },
    }
  }
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>