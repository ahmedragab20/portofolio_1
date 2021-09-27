<template>
  <div class="home">
    <home-header />
    <last-projects />
    <skills />
  </div>
</template>

<script>
import HomeHeader from "@/components/Home/HomeHeader.vue";
import LastProjects from "../components/Home/LastProjects.vue";
import Skills from "@/components/Home/Skills.vue";

export default {
  name: "Home",
  components: {
    HomeHeader,
    LastProjects,
    Skills,
  },
};
</script>
