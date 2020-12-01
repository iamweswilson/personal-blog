<template>
  <div class="flex justify-between">
    <div v-if="prev" class="w-1/3 xs:w-1/2 font-bold uppercase text-xs text-left">
      <p class="font-bold uppercase text-xs"><span class="shortcut">&larr;</span> Previous</p>
      <NuxtLink
        v-shortkey.once="['arrowleft']"
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="w-1/3 xs:w-1/2 text-primary font-bold hover:underline"
        @shortkey.native="navigate(prev.slug)"
      >
        {{ prev.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
    <div v-if="next" class="w-1/3 xs:w-1/2 font-bold uppercase text-xs text-right">
      <p class="font-bold uppercase text-xs">Next Up <span class="shortcut">&rarr;</span></p>
      <NuxtLink
        v-shortkey.once="['arrowright']"
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline mt-8"
        @shortkey.native="navigate(next.slug)"
      >
        {{ next.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
  </div>
</template>

<style lang="postcss">
  .shortcut {
    background: var(--color);
    color: var(--bg);
    border-radius: 2px;
    padding: 1px;
    font-size: 1em;
    @media (max-width: 468px) {
      display: none;
    }
  }
</style>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null
    },
    next: {
      type: Object,
      default: () => null
    }
  },
  methods: {
    navigate(to) {
      this.$router.push(to);
    },
  }
}
</script>
