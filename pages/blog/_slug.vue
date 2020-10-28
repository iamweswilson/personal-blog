<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full my-8 lg:w-7/12">
        <TheHeader />
        <article>
            <!-- <h1 class="text-6xl font-bold">{{ article.title }}</h1> -->
          <div>
            <p class="updated mt-12 mb-2 text-sm font-bold">
              {{ formatDate(article.updatedAt) }}
            </p>
            <h1 class="font-extrabold text-4xl leading-9 mb-4">{{ article.title }}</h1>
            
            <img 
              :src="article.img"
              :alt="article.alt"
              class="mb-12"
            />
            <!-- <p>{{ article.description }}</p> -->
            <!-- table of contents -->
            <!-- <nav class="pb-6">
              <ul>
                <li
                  v-for="link of article.toc"
                  :key="link.id"
                  :class="{
                    'font-semibold': link.depth === 2
                  }"
                >
                  <nuxtLink
                    :to="`#${link.id}`"
                    class="hover:underline"
                    :class="{
                      'py-2': link.depth === 2,
                      'ml-2 pb-2': link.depth === 3
                    }"
                    >{{ link.text }}</nuxtLink
                  >
                </li>
              </ul>
            </nav> -->
            <!-- content from markdown -->
            <nuxt-content :document="article" class="article-text mb-12"/>
            <!-- prevNext component -->
            <hr />
            <PrevNext :prev="prev" :next="next" class="mt-12" />
          </div>
        </article>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()
    return {
      article,
      prev,
      next
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
<style>
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.article-text {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;;
}
.updated {
  color: var(--color-secondary);
}
</style>
