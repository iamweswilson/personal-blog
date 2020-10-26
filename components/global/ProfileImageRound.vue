<template>
  <img :src="src" class="h-full w-full object-cover" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      default: () => 'https://via.placeholder.com/728x90.png?text=placeholder'
    },
  }
}
</script>
