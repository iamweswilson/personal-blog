<template>
  <div>
    <ul>
      <li v-for="color of colors" :key="color" :title="$colorMode.preference">
        <component :is="`icon-${color}`" @click="$colorMode.preference = color" :class="getClasses(color)" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
  .feather {
    position: relative;
    top: 0px;
    cursor: pointer;
    padding: 2px;
    background-color: var(--bg-secondary);
    border: 2px solid var(--border-color);
    margin: 0;
    border-radius: 5px;
    transition: all 0.1s ease;
  }
  .feather:hover {
    top: -3px;
  }
  .feather.preferred {
    border-color: var(--color-primary);
    top: -3px;
  }
  .feather.selected {
    color: var(--color-primary);
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  ul li {
    display: inline-block;
    padding: 3px;
  }
  p {
    margin: 0;
    padding-top: 5px;
    padding-bottom: 20px;
  }
</style>

<script>
  import IconLight from '@/assets/icons/light.svg?inline'
  import IconDark from '@/assets/icons/dark.svg?inline'
  import IconSepia from '@/assets/icons/sepia.svg?inline'

  export default {
    components: {
      IconLight,
      IconDark,
      IconSepia
    },
    data () {
      return {
        colors: ['light', 'dark', 'sepia']
      }
    },
    methods: {
      getClasses (color) {
        // Does not set classes on ssr when preference is system (because we don't know the preference until client-side)
        if (this.$colorMode.unknown) {
          return {}
        }
        return {
          preferred: color === this.$colorMode.preference,
          selected: color === this.$colorMode.value
        }
      }
    }
  }
</script>
