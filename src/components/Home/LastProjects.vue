<template>
  <div class="projects container">
    <div class="row">
      <h2 class="text-center text-capitalize mt-5">Some Of His Projects</h2>
      <p class="text-center text-muted text-capitalize">
        <strong>It's Not All of His Projects</strong> so if you want to see more
        of his projects feel free to vist his
        <a
          href="https://github.com/ahmedragab20"
          target="_blank"
          class="text-muted text-nowrap"
          ><i class="bi-github"></i>GitHub account.</a
        >
      </p>
      <div
        class="col-xl-4 col-sm-6 my-2"
        v-for="project in Projects"
        :key="project.id"
      >
        <div class="rounded-3 project-container pt-3 px-3 d-flex flex-column">
          <div class="project-header d-flex gap-2 align-items-center mb-2 h-25">
            <div class="image w-25">
              <img
                :src="project.img"
                :alt="project.name"
                class="img-thumbnail"
              />
            </div>
            <h3>{{ project.name }}</h3>
          </div>
          <div class="context h-75">
            <h6 class="text-muted">{{ project.tools }}</h6>
            <p class="text-lowercase">
              {{ project.details }}
            </p>
            <a
              :href="project.link"
              target="_blank"
              class="button text-decoration-none"
            >
              Try This <i class="bi-box-arrow-up-right mx-1"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Projects from "@/data/Projects";
import gsap from "gsap";

export default {
  data() {
    return { Projects };
  },
  mounted() {
    gsap.to(".projects", {
      x: 1,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".projects",
        toggleActions: "restart reverse restart reverse",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.projects {
  transform: translateX(300px);
  opacity: 0;

  .project-container {
    margin: 10px;
    padding: 20px 15px;
    min-height: 300px;
    background-color: $darkCard;
    padding: 10px;

    transition: $transition;

    &:hover {
      transform: translateY(-10px);
    }

    .context {
      position: relative;
      h6 {
        font-size: 0.9rem;
      }
      p {
        font-size: 0.75rem;
      }
      .button {
        background: $darkButton;
        color: $appDarkColor;
        padding: 8px 10px;
        font-size: 0.9rem;
        border-radius: 8px;
        transition: $transition;

        &:hover {
          opacity: 0.85;
        }

        &:focus {
          outline: none;
        }
      }
    }
  }
}
@media (max-width: 320px) {
  h2 {
    margin-top: 60px !important;
    font-size: 1rem !important;
    font-weight: 600;
  }
  p {
    font-size: 0.7rem !important;
    padding: 0 15px !important;
  }
}
</style>
