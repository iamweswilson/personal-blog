<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full my-8 lg:w-7/12">
        <TheHeader />
        <div class="project-inner my-8">
          <h2>Project: Changing UI based on user's focus</h2>
          <p>I've found the most difficult part of creating marketing pages is gaining and keeping a reader's focus. Focus can be gained through writing, design, and placement. This exercise digs into that challenge a bit, looking at how visual hierarchy, color, spacing, and type can be adjusted based on how much focus you want to bring to that component is to your page. </p>
          <p>
            The idea is that you'd be able to quickly adjust any components to match the level of importance you perceive it having on the page. This is a fairly basic example, but let's assume you have a small "features" component on your marketing page. The content is the same across each variant, but the attention brought to the component changes based on how much focus you believe the item should get.
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
          <div>
            <p>As you can see, the desired focus you set would dictate colors, icons, and text placement. In practice, the desired focus would likely also change this component's placement on the page (which does NOT imply anything needing focus should be above the fold. That's a post for another time.)</p>
            <p>Related, but not shown in this exercise, is that giving more focus to one component would in turn reduce the focus to another, especially if the components are within the same viewport.</p>
          </div>
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
    margin: 1rem 0 4rem;
  }
</style>