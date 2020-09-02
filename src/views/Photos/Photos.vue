<template>
  <div class="photos">
    <ShowTemplate :titleList="list" @on-change-content="goContent">
      <div class="photos-item" key="0" ref="photos0">
        <h4>{{ list[0].title }}</h4>
        <carousel :imageList="imageList" />
      </div>
      <div class="photos-item" key="1" ref="photos1">
        <h4>{{ list[1].title }}</h4>
      </div>
    </ShowTemplate>
  </div>
</template>

<script>
import ShowTemplate from "../../components/showTemplate";
import carousel from "../../components/carousel";

export default {
  name: "Photos",
  components: {
    ShowTemplate,
    carousel
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
      ],
      imageList: [
        {
          title: "",
          image: "1",
          url: "1",
        },
        {
          title: "",
          image: "2",
          url: "2",
        },
        {
          title: "",
          image: "3",
          url: "3",
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
