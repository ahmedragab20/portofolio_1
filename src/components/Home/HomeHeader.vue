<template>
  <div class="header container">
    <div class="row">
      <div class="col-xl-6 order-xl-last">
        <div class="image">
          <div class="image-container">
            <img
              src="@/assets/me.jpg"
              width="200"
              alt="Ahmed's Pricture"
              class="ahmed-pic"
            />
          </div>
        </div>
      </div>
      <div class="col-xl-6 order-xl-first">
        <div class="context">
          <div class="large d-none d-md-block">
            <h2 class="h1">Welcome To Ahmed's Protofolio</h2>
            <p class="my-4">
              Ahmed is a junior Front-End Developer with year of experience.
              Also He's working with different technologies like Vue.js and the
              whole versions of Bootstrap.
            </p>
            <a
              class="button text-decoration-none"
              href="https://github.com/ahmedragab20"
              target="_blank"
            >
              <i class="bi-github"></i>
              Discover His Work
            </a>
          </div>
          <div class="small d-block d-md-none text-center mt-2">
            <h3>Welcome To Ahmed's Protofolio</h3>
            <p class="d-block">
              Ahmed is a junior Front-End Developer with year of experience.
              Also He's working with different technologies like Vue.js and the
              whole versions of Bootstrap.
            </p>
            <a
              class="button text-decoration-none"
              href="https://github.com/ahmedragab20"
              target="_blank"
            >
              <i class="bi-github"></i>
              Discover His Work
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  mounted() {
    gsap.to(".image-container", {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".image-container",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(".ahmed-pic", {
      y: 0,
      rotate: 0,
      opacity: 1,
      duration: 1.8,
      scrollTrigger: {
        trigger: ".context",
        toggleActions: "restart reverse restart reverse",
      },
    });
    gsap.to(".context", {
      x: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: ".context",
        toggleActions: "restart reverse restart reverse",
      },
    });
  },
};
</script>

<style lang="scss" scoped>
.header {
  @include align();
  transform: translateY(10vh);
  margin-bottom: 10vh;
  position: relative;

  &::after {
    content: "";
    width: 50vw;
    height: 100% + 40;
    background: linear-gradient(-120deg, #e1e1e12f, rgba(17, 17, 17, 0.288));
    position: absolute;
    top: -15vh;
    right: -30vh;
    z-index: 5;
    border-radius: 0 0 0 20px;
  }

  .image {
    @include align();

    .image-container {
      width: 350px;
      height: 350px;
      padding: 15px;
      background-color: rgba(255, 255, 255, 0.05);
      border-radius: 50%;
      margin-left: auto;
      position: relative;
      opacity: 0;
      transform: translateX(600px);
      z-index: 99;

      .ahmed-pic {
        width: $full;
        height: $full;
        border-radius: 20px;
        box-shadow: 5px 5px 5px rgba(29, 29, 29, 0.3),
          -3px -5px 5px rgba(29, 29, 29, 0.3);
        transform: translateY(-600px) rotate(180deg);
        opacity: 0;
      }
    }
  }

  .context {
    transform: translateX(-900px);
    opacity: 0;

    h2 {
      font-size: 3.1rem;
    }
    h3 {
      font-size: 1.6rem;
    }
    p {
      font-size: 0.9rem;
    }
    .button {
      background: $darkButton;
      color: $appDarkColor;
      padding: 8px 15px;
      border-radius: 8px;
      transition: $transition;

      &:hover {
        opacity: 0.85;
      }
    }
  }
}
@media (max-width: 1024px) {
  .header::after {
    height: 100%;
  }
  .image-container {
    margin: auto !important;
  }
  .context {
    text-align: center !important;
  }
}
@media (max-width: 320px) {
  .header {
    .image {
      .image-container {
        width: 200px;
        height: 200px;
        margin: auto;

        .ahmed-pic {
          width: 170px !important;
          height: 170px !important;
        }
      }
    }
  }
  h3 {
    margin-top: 60px;
    font-size: 1rem !important;
    font-weight: 600;
  }
  p {
    font-size: 0.7rem !important;
    padding: 0 10px;
  }
}
</style>
