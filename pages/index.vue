<template>
  <div>
        <HomeAbout />
        <hr>
        <HomeConnect />
  </div>
</template>

<script>
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('created', 'desc')
      .fetch()
    return {
      articles
    }
  },
  mounted() {
    gsap.set(".article-card", {y: 100});

    ScrollTrigger.batch(".article-card", {
      interval: .15,
      batchMax: 4,
      onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.15, grid: [1, 2]}, overwrite: true}),
      start: "20px bottom",
      end: "top top"
    });

    ScrollTrigger.addEventListener("refreshInit", () => gsap.set(".article-card", {y: 0}));
  }
}
</script>

<style class="postcss" scoped>
h2 {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
p {
  margin: 1rem 0 0;
}
.article-card {
  border-radius: 8px;
  /* for GSAP animation */
  opacity: 0;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
@media (max-width:767px) {
  .post-img {
    max-height: 20rem;
  } 
}
@media (min-width:1350px) {
  .post-img {
    height: 100%;
  } 
}
</style>
