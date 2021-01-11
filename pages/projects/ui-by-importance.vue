<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full my-8 lg:w-7/12">
        <TheHeader />
        <div class="project-inner my-8">
          <h2>Project: UI Visual Hierarchy by Importance</h2>
          <p>This is an exercise that looks at how visual hierarchy, color, spacing, and type are affected in design based on how important that component is to your page. The concept here is to adjust the UI to match the level of importance you perceive it having on the page. For example, let's assume you have a features section on your marketing page. It's importance would dictate how use of colors, icons, and text placement.</p>
          <importance :class="setClass" />
          <section class="text-center">
            <h3 class="font-medium mt-12">How important is this content?</h3>
            <div class="block">
              <button @click="changeClass('least')" :class="{active: isActive == 'least'}">Least</button>
              <button @click="changeClass('mid')" :class="{active: isActive == 'mid'}">Mid</button>
              <button @click="changeClass('most')" :class="{active: isActive == 'most'}">Very</button>
            </div>
          </section>
        </div>
        <hr>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
  import importance from './importance.vue'
  export default {
    components: { importance },
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
    text-transform: uppercase;
    font-weight: bold;
    margin: 1rem 2rem;
    background: var(--code);
    color: var(--code-color);
    padding: 0.5rem;
    border-radius: 4px;
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
  }
  section {
    margin: 1rem 0 4rem;
  }
</style>