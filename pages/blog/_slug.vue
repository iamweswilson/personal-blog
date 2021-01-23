<template>
  <div>
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
  </div>
</template>
<script>
import getSiteMeta from '~/utils/getSiteMeta'
export default {
  async asyncData({ $content, params, error }) {
    try {
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
    } catch(err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  computed: {
    meta() {
      const metaData = {
        type: "article",
        title: this.article.title,
        description: this.article.description,
        url: `${this.$config.baseUrl}/blog/${this.$route.params.slug}`,
        mainImage: `${this.$config.baseUrl}${this.article.img}`
      }
      return getSiteMeta(metaData)
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        ...this.meta,
        {
          property: "article:published_time",
          content: this.article.createdAt,
        },
        {
          property: "article:modified_time",
          content: this.article.updatedAt,
        },
        {
          property: "article:tag",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
        { name: "twitter:label1", content: "Written by" },
        { name: "twitter:data1", content: "Wes Wilson" },
        { name: "twitter:label2", content: "Filed under" },
        {
          name: "twitter:data2",
          content: this.article.tags ? this.article.tags.toString() : "",
        },
      ],
      link: [
        {
          hid: "canonical",
          rel: "canonical",
          href: `https://iamweswilson.com/blog/${this.$route.params.slug}`,
        },
      ],
    };
  }
}
</script>
  
<style lang="scss">

</style>
