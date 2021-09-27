<template>
  <div class="skills container">
    <div class="row">
      <h2 class="d-none d-md-block text-center mt-4 mb-2">Skills</h2>
      <h3 class="d-block d-md-none text-center mt-4 mb-2">Skills</h3>
      <div class="col-lg-2 col-md-4 col-6" v-for="skill in Skills" :key="skill">
        <div class="skill-card rounded-3">
          <div class="image">
            <img :src="skill.img" :alt="skill.name" width="60" />
          </div>
          <h5 class="text-muted">{{ skill.name }}</h5>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Skills from "@/data/skills";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      Skills,
    };
  },
  mounted() {
    gsap.to(".skills", {
      y: 0,
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".skills",
        toggleActions: "restart reverse restart reverse",
      },
    });
  },
};
</script>
<style lang="scss" scoped>
.skills {
  transform: translateY(-300px) translateX(500px);
  opacity: 0;
  .skill-card {
    @include align();
    flex-direction: column;
    transition: $transition;

    &:hover {
      transform: translateY(-10px);
    }

    padding: 10px;
    margin: 10px auto;
    background-color: $darkCard;
    height: 140px;
    transition: $transition;
    &:hover {
      box-shadow: none;
    }
    .image {
      width: 60px;
      height: 60px;
      margin: auto;
      .skill-img {
        width: $full;
        height: $full;
        object-fit: cover;
      }
    }
  }
}
</style>
