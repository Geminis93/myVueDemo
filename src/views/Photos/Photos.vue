<template>
  <div class="photos">
    <ShowTemplate :titleList="list" @on-change-content="goContent">
      <div class="photos-item" key="0" ref="photos0">横图轮播</div>
      <div class="photos-item" key="1" ref="photos1">竖图轮播</div>
    </ShowTemplate>
  </div>
</template>

<script>
import ShowTemplate from "../../components/showTemplate";

export default {
  name: "Photos",
  components: {
    ShowTemplate
  },
  data() {
    return {
      list: [
        {
          title: "横图轮播"
        },
        {
          title: "竖图轮播"
        }
      ]
    };
  },
  methods: {
    goContent(index) {
      this.$refs[`photos${index}`].scrollIntoView();
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./Photos.scss";
</style>
