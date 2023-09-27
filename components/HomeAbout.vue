<template>
  <section class="about-text my-10 md:my-24 text-left">
    <p>I am Wes Wilson.
    </p>
    <p>
      I am a versatile and strategic leader who can handle multiple responsibilities and roles with ease. I have proven my ability to drive organizational success in various domains and contexts. I am committed to delivering excellence and adapting to changing needs and challenges in any endeavor.</p>
    <p>
      As the VP of Operations for <a href="https://openinfra.dev" target="_blank">the OpenInfra Foundation</a> (formerly OpenStack Foundation), I lead the product strategy that delivers value to our member organizations. I am responsible for daily operations and oversee brand identity, which supports communities that create open source solutions for various domains, such as cloud computing, edge, ontainer security, and CI/CD. Our most known project is OpenStack, which powers some of the most critical infrastructure in the world, including CERN, Walmart, Nike, Bloomberg, Blizzard, and more.
    <p>
      As a leader in the open source community, I have spearheaded several initiatives that have enhanced the collaboration and innovation of OpenInfra. These include developing the OpenInfra Project Funds, a model for hosting and supporting open source projects, and launching the regional hubs OpenInfra Europe in Belgium and OpenInfra Asia in Singapore, which serve as platforms for connecting and empowering local stakeholders.
    </p>
    <p>Previously, I founded a <a href="https://brandcrowd.com" target="_blank">start-up</a> (acquired 2011), was Director of Product at <a href="https://venturelab.org/" target="_blank">VentureLab</a>, helped build ZippyKid (now <a href="https://pressable.com" target="_blank">Pressable</a>), was a mentor for <a href="https://techstars.com/" target="_blank">Techstars</a> Cloud, and spent a few years as a freelance consultant/designer.</p>
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
