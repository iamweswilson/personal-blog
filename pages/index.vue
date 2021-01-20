<template>
  <div>
        <HomeAbout />
        <hr>
        <section>
          <h2>Thoughts, designs & other stuff</h2>
          <ul class="flex flex-wrap">
            <li
              v-for="article of articles"
              :key="article.slug"
              class="mt-3 xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
            >
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="flex h-full transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col overflow-hidden"
              >
                <img
                  v-if="article.img"
                  class="md:h-64 h-auto xxlmin:w-1/2 xxlmax:w-full object-cover post-img"
                  :src="article.img"
                />

                <div
                  class="p-6 flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
                >
                  <h3 class="font-bold">{{ article.title }}</h3>
                  <p class="font-bold text-gray-600 text-sm">
                    {{ article.description }}
                  </p>
                </div>
              </NuxtLink>
            </li>
          </ul>
      </section>
        <hr>
        <HomeConnect />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('created', 'desc')
      .fetch()
    return {
      articles
    }
  }
}
</script>

<style class="postcss" scoped>
h2 {
  font-size: 1.2em;
  font-weight: bold;
  margin-bottom: 1rem;
  text-transform: uppercase;
}
p {
  margin: 1rem 0 0;
}
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
@media (max-width:767px) {
  .post-img {
    max-height: 20rem;
  } 
}
@media (min-width:1350px) {
  .post-img {
    height: 100%;
  } 
}
</style>
