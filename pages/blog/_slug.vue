<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full my-8 lg:w-7/12">
        <TheHeader />
        <article>
            <!-- <h1 class="text-6xl font-bold">{{ article.title }}</h1> -->
          <div>
            <p class="updated mt-12 mb-2 text-sm font-bold">
              {{ formatDate(article.created) }}
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
            <PrevNext :prev="prev" :next="next" class="mt-12 mb-12" />
          </div>
        </article>
        <hr>
        <TheFooter />
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
      .sortBy('created', 'asc')
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
  
<style lang="scss">
.article-text {
  font-family: Georgia, Cambria, "Times New Roman", Times, serif;
  img {
    margin: 4rem 0;
  }
  h2 {
    font-size: 1.6em;
    text-transform: none;
    margin-top: 2rem;
  }
  h3 {
    font-size: 1.2em;
    text-transform: none;
    font-weight: bold;
    margin-top: 2rem;
  }
  ul {
    padding-left: 1rem;
    margin: 2rem 0;
    li {
        list-style-type: disc;
        font-size: 1.3em;
        margin-bottom: 0.5rem;
      }
  }
}
.updated {
  color: var(--color-secondary);
}
code {
  background-color: var(--code);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  font-size: 0.7em;
  color: var(--code-color);
}
pre {
  code {
    background-color: var(--pre);
    color: var(--pre-color);
    font-size: 0.8em;
  }
}
</style>
