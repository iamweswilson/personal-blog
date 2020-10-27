<template>
  <div class="container mx-auto">
    <div class="flex justify-center">
      <div class="w-full my-8 lg:w-7/12">
        <TheHeader />
        <HomeAbout />
        <hr>
        <section>
          <h2>Thoughts & Designs & Other Stuff</h2>
          <ul class="flex flex-wrap">
            <li
              v-for="article of articles"
              :key="article.slug"
              class="xs:w-full md:w-1/2 px-2 xs:mb-6 md:mb-12 article-card"
            >
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
                class="flex transition-shadow duration-150 ease-in-out shadow-sm hover:shadow-md xxlmax:flex-col"
              >
                <img
                  v-if="article.img"
                  class="h-48 xxlmin:w-1/2 xxlmax:w-full object-cover"
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
        <hr>
        <TheFooter />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .fetch()
    return {
      articles
    }
  }
}
</script>

<style class="postcss">
p {
  margin: 2rem 0;
}
h2 {
  font-size: 1.5em;
  font-weight: bold;
  margin-bottom: 2rem;
}
.article-card {
  border-radius: 8px;
}
.article-card a {
  background-color: #fff;
  border-radius: 8px;
}
.article-card img div {
  border-radius: 8px 0 0 8px;
}
</style>
