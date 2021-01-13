<template>
  <div>
    <features :class="setClass" />
    <section class="text-center">
      <h3 class="font-medium mt-12">How much focus do you want to give this component on your page?</h3>
      <div class="block">
        <button @click="changeClass('least')" :class="{active: isActive == 'least'}">Minimum</button>
        <button @click="changeClass('mid')" :class="{active: isActive == 'mid'}">Medium</button>
        <button @click="changeClass('most')" :class="{active: isActive == 'most'}">Maximum</button>
      </div>
    </section>
  </div>
</template>

<script>
  import features from './features.vue'
  export default {
    name: 'ByFocus',
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
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 1em;
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
    font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    font-size: 12px;
  }
</style>