<template>
  <section class="about-text my-10 md:my-24 text-center">
    <p>Hi! 👋 I am Wes Wilson.
    </p>
      I'm Director of Product & Engineering for the newly launched <a href="https://openinfra.dev" target="_blank">OpenInfra Foundation</a> (previously OpenStack Foundation). We build communities who write open source software that runs in production, including OpenStack that powers some of the most critical Infrastructure in the world (CERN, Walmart, Tencent, and Blizzard to name a few).</p>
    <p>Previously, I founded a <a href="https://brandcrowd.com" target="_blank">start-up</a> (acquired 2011), was Director of Product at <a href="https://venturelab.org/" target="_blank">VentureLab</a>, helped build ZippyKid (now <a href="https://pressable.com" target="_blank">Pressable</a>), was a mentor for <a href="https://techstars.com/" target="_blank">Techstars</a> Cloud, and spent a few years as a freelance designer/developer.</p>
  </section>
</template>

<script>
import { gsap } from "gsap";
export default {
  mounted() {
    gsap.from('.about-text p', {
      opacity: 0, duration: 1, y: 30, stagger: 0.3
    })
  }
}
</script>

<style lang="postcss" scoped>

</style>
