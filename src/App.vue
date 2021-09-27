<template>
  <transition name="app" appear>
    <div class="app" :class="{ lightMode: lightMode }">
      <div class="mode" @click="light">
        <span><i class="bi-lightbulb-fill"></i></span>
      </div>
      <router-view />
      <Footer />
      <!-- <div
      class="alert alert-warning alert-dismissible text-capitalize fade show"
      role="alert"
    >
      <strong><i class="bi-bookmark-dash-fill"></i> Alert..</strong> It's Just A
      Demo Protofolio and I'm Still working on it!
      <button
        type="button"
        class="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div> -->
    </div>
  </transition>
</template>
<script>
import Footer from "@/components/global/Footer";

export default {
  components: { Footer },
  data() {
    return {
      lightMode: false,
    };
  },

  methods: {
    light() {
      this.lightMode = !this.lightMode;
    },
  },
};
</script>
<style lang="scss">
.app {
  position: relative;
  background-color: $appDarkBackground;
  color: $appDarkColor;
  transition: $transition;

  .mode {
    position: absolute;
    top: 10px;
    right: 20px;
    height: 25px;
    width: 60px;
    border-radius: 30px;
    background-color: #d1d1d1;
    cursor: pointer;
    z-index: 9;

    span {
      @include align();

      width: 25px;
      height: 25px;
      background-color: #111;
      border-radius: 50%;
      position: absolute;
      transition: $transition;
      transform: translateX(0) translateY(0px) scale(0.9);
    }
  }

  &.lightMode {
    $appDarkBackground: #fff;
    $appDarkColor: #050505;
    $darkButton: #eee;
    $darkCard: #eee;
    background-color: #fff !important;
    color: #050505 !important;

    .mode {
      span {
        transform: translateX(35px) scale(1);
      }
    }

    a {
      color: #050505 !important;
    }

    .button {
      background-color: #d1d1d1 !important;
      color: #050505 !important;
    }
    .image-container,
    .project-container,
    .skill-card {
      background-color: #eee !important;
    }
  }
}

@media (max-width: 320px) {
  h3,
  h2 {
    font-size: 1rem !important;
  }
  p {
    padding: 0 !important;
  }
}
</style>
