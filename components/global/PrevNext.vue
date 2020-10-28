<template>
  <div class="flex justify-between">
    <div v-if="prev" class="w-1/3 xs:w-1/2 font-bold uppercase text-xs text-left">
      <p class="font-bold uppercase text-xs">Previous</p>
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="w-1/3 xs:w-1/2 text-primary font-bold hover:underline"
      >
        {{ prev.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
    <div v-if="next" class="w-1/3 xs:w-1/2 font-bold uppercase text-xs text-right">
      <p class="font-bold uppercase text-xs">Next Up</p>
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="font-bold hover:underline mt-8"
      >
        {{ next.title }}
      </NuxtLink>
    </div>
    <span v-else>&nbsp;</span>
  </div>
</template>

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
  }
}
</script>
