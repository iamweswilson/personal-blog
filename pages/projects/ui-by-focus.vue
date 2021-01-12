<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full my-8 lg:w-7/12">
        <TheHeader />
        <div class="project-inner my-8">
          <h2>Project: Adjusting UI based on intended user focus</h2>
          <p>
            So here's the exercise... You're creating a marketing site for your product and want to include the product features. This features component is going to compete for attention with other items on the page like pricing, user stories, testimonials, customer logos, comparison charts, infographics, etc. (you get the point). You need to decide how much focus "features" should receive. Depending on what you decide, the UI for that component should change.
          </p>
          <p>
            Give it a shot 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 inline">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </p>
          <features :class="setClass" />
          <section class="text-center">
            <h3 class="font-medium mt-12">How much focus do you want to give this component on your page?</h3>
            <div class="block">
              <button @click="changeClass('least')" :class="{active: isActive == 'least'}">Minimum</button>
              <button @click="changeClass('mid')" :class="{active: isActive == 'mid'}">Medium</button>
              <button @click="changeClass('most')" :class="{active: isActive == 'most'}">Maximum</button>
            </div>
          </section>
          <p>
            This is a fairly lightweight example of how UI can change based on focus, so plase don't take this as prescriptive. Either way, feel free to <a href="/blog/ui-by-focus/">read the blog post</a> to learn more.
          </p>
        </div>
        <hr>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
  import features from './features.vue'
  export default {
    components: { features },
    props: [
      'buttonValue',
    ],
    data: function() {
      return {
        setClass: 'least',
        isActive: 'least',
      }
    },
    methods: {
      changeClass: function(value) {
        this.setClass = value
        this.isActive = value
      }
    }
  }
</script>

<style lang="scss" scoped>
  button {
    font-size: 0.9em;
    font-weight: bold;
    margin: 1rem 2rem;
    background: var(--code);
    color: var(--code-color);
    padding: 0.5rem;
    border-radius: 999px;
    &.active {
      background: var(--color-primary);
      color: var(--bg);
    }
    &:first-child {
      margin-left: 0
    }
    &:last-child {
      margin-right: 0;
    }
    &:focus {
      outline: none;
    }
    @media (max-width: 640px) {
      margin: 1rem 0.8rem;
      font-size: 0.8em;
    }
  }
  section {
    margin: 1rem 0 2rem;
  }
</style>