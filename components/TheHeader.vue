<template>
  <header class="grid grid-rows-1 grid-flow-col gap-4">
    <NuxtLink to="/"><Logo class="mb-4" /></NuxtLink>
    <!-- <AppSearchInput class="ml-8" /> -->
    <div class="col-end-4">
      <ColorModePicker />
    </div>
  </header>
</template>

<style lang="postcss">
  h1 {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 1em;
  }
  .col-end-4 {
    text-align: right;
  }
</style>

<script>
  import ColorModePicker from '@/components/ColorModePicker'

  export default {
    components: {
      ColorModePicker
    }
  }
</script>